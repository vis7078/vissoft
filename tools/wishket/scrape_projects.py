#!/usr/bin/env python3
"""Scrape Wishket project list into JSON.

This script is intentionally conservative: it captures the page and extracts basic card data.
Selector tuning will likely be required after we see actual DOM.

Usage:
  cd ~/vissoft
  . .venv/bin/activate
  python tools/wishket/scrape_projects.py --list-url "https://www.wishket.com/..." \
    --out data/wishket_candidates.json

Requires tools/wishket/storage_state.json created by capture_session.py
"""

from __future__ import annotations

import argparse
import json
import os
import re
from datetime import datetime
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]
STATE_PATH = ROOT / "tools" / "wishket" / "storage_state.json"
PROFILE_DIR = ROOT / "tools" / "wishket" / "profile"


def norm_ws(s: str) -> str:
    return re.sub(r"\s+", " ", (s or "").strip())


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--list-url", required=True)
    ap.add_argument("--out", default=str(ROOT / "data" / "wishket_candidates.json"))
    ap.add_argument("--headful", action="store_true")
    args = ap.parse_args()

    if not STATE_PATH.exists():
        raise SystemExit(f"Missing storage state: {STATE_PATH}. Run capture_session.py first.")

    out_path = Path(args.out)
    os.makedirs(out_path.parent, exist_ok=True)

    with sync_playwright() as p:
        # Prefer persistent profile if available (more stable auth). Fallback to storage_state.
        if PROFILE_DIR.exists() and any(PROFILE_DIR.iterdir()):
            ctx = p.chromium.launch_persistent_context(
                user_data_dir=str(PROFILE_DIR),
                headless=not args.headful,
                locale="ko-KR",
                viewport={"width": 1280, "height": 900},
            )
        else:
            browser = p.chromium.launch(headless=not args.headful)
            ctx = browser.new_context(storage_state=str(STATE_PATH))

        page = ctx.new_page()

        page.goto(args.list_url, wait_until="domcontentloaded")
        page.wait_for_timeout(1500)

        # Save a snapshot for selector tuning
        snap_dir = ROOT / "data" / "wishket_debug"
        os.makedirs(snap_dir, exist_ok=True)
        ts = datetime.now().strftime("%Y%m%d-%H%M%S")
        html_path = snap_dir / f"list-{ts}.html"
        png_path = snap_dir / f"list-{ts}.png"
        html_path.write_text(page.content(), encoding="utf-8")
        page.screenshot(path=str(png_path), full_page=True)

        # Heuristic extraction: find anchors that look like project links
        items = page.evaluate(
            """() => {
              const anchors = Array.from(document.querySelectorAll('a'));
              const uniq = new Map();
              for (const a of anchors) {
                const href = a.getAttribute('href') || '';
                const text = (a.innerText || '').trim();
                if (!href || !text) continue;
                // Common Wishket patterns often include /project/ or /projects/
                if (!/(project|projects)/i.test(href)) continue;
                const abs = new URL(href, location.origin).toString();
                if (!uniq.has(abs)) {
                  uniq.set(abs, { url: abs, title: text.slice(0, 120) });
                }
              }
              return Array.from(uniq.values()).slice(0, 80);
            }"""
        )

        # Lightweight normalize
        for it in items:
            it["title"] = norm_ws(it.get("title", ""))

        ctx.close()
        try:
            browser.close()  # type: ignore[name-defined]
        except Exception:
            pass

    payload = {
        "listUrl": args.list_url,
        "capturedAt": datetime.now().isoformat(timespec="seconds"),
        "count": len(items),
        "items": items,
        "debug": {
            "html": str(html_path.relative_to(ROOT)),
            "screenshot": str(png_path.relative_to(ROOT)),
        },
    }

    out_path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote: {out_path} (items={len(items)})")
    print(f"Debug: {html_path} / {png_path}")


if __name__ == "__main__":
    main()
