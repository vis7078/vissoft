#!/usr/bin/env python3
"""Wishket -> vissoft pipeline runner.

Current stage (v0):
- Load candidates from a Wishket list URL (requires saved profile)
- Filter to /project/<id>/ items
- Fetch each project detail page HTML + screenshot for later selector tuning
- Write a scored shortlist JSON (very conservative heuristics)

Next stage (v1):
- Choose 0-3 projects/day based on heuristics + history
- Generate portfolio entry + assets
- Create git branch, commit, push; optionally merge when safe

Usage:
  cd ~/vissoft
  . .venv/bin/activate
  python tools/wishket/run_pipeline.py --list-url 'https://www.wishket.com/project/?d=...'

Outputs:
  data/wishket_shortlist.json
  data/wishket_debug/detail-*.html/.png
  data/wishket_state.json
"""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
from dataclasses import dataclass
from datetime import datetime, date as date_cls
from pathlib import Path
from typing import Any

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]
PROFILE_DIR = ROOT / "tools" / "wishket" / "profile"
STATE_PATH = ROOT / "data" / "wishket_state.json"
SHORTLIST_PATH = ROOT / "data" / "wishket_shortlist.json"
DEBUG_DIR = ROOT / "data" / "wishket_debug"


PROJECT_URL_RE = re.compile(r"https?://www\.wishket\.com/project/(\d+)/?$")


def now_iso() -> str:
    return datetime.now().isoformat(timespec="seconds")


def load_state() -> dict[str, Any]:
    if STATE_PATH.exists():
        return json.loads(STATE_PATH.read_text(encoding="utf-8"))
    return {
        "day": str(date_cls.today()),
        "pickedToday": [],
        "seen": {},
    }


def save_state(st: dict[str, Any]) -> None:
    os.makedirs(STATE_PATH.parent, exist_ok=True)
    STATE_PATH.write_text(json.dumps(st, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


@dataclass
class Candidate:
    project_id: str
    url: str
    title: str


def git_head() -> str:
    try:
        return subprocess.check_output(["git", "rev-parse", "--short", "HEAD"], cwd=ROOT).decode().strip()
    except Exception:
        return "unknown"


def extract_project_links(page) -> list[Candidate]:
    items = page.evaluate(
        """() => {
          const anchors = Array.from(document.querySelectorAll('a'));
          const out = [];
          for (const a of anchors) {
            const href = a.getAttribute('href') || '';
            const text = (a.innerText || '').trim();
            if (!href) continue;
            const abs = new URL(href, location.origin).toString();
            out.push({ url: abs, title: text.slice(0, 140) });
          }
          return out;
        }"""
    )

    uniq: dict[str, Candidate] = {}
    for it in items:
        url = it.get("url", "")
        m = PROJECT_URL_RE.match(url)
        if not m:
            continue
        pid = m.group(1)
        title = re.sub(r"\s+", " ", (it.get("title") or "").strip())
        if not title:
            title = f"Wishket project {pid}"
        uniq[url] = Candidate(project_id=pid, url=url, title=title)

    return list(uniq.values())


def score_detail_text(text: str) -> dict[str, Any]:
    t = re.sub(r"\s+", " ", (text or "").strip())
    length = len(t)
    # crude quality signals
    keywords = ["요구", "기능", "화면", "API", "DB", "일정", "기간", "기획", "참고", "산출물", "MVP", "우대"]
    hits = sum(1 for k in keywords if k in t)
    # penalize ultra-short pages
    base = min(100, int(length / 80))  # 8k chars ~ 100
    score = base + hits * 5
    return {"length": length, "keywordHits": hits, "score": score}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--list-url", required=True)
    ap.add_argument("--headful", action="store_true")
    ap.add_argument("--max", type=int, default=20, help="Max projects to fetch details for")
    args = ap.parse_args()

    if not PROFILE_DIR.exists() or not any(PROFILE_DIR.iterdir()):
        raise SystemExit("Missing Wishket profile. Run tools/wishket/capture_session.py first.")

    os.makedirs(DEBUG_DIR, exist_ok=True)

    st = load_state()
    if st.get("day") != str(date_cls.today()):
        st["day"] = str(date_cls.today())
        st["pickedToday"] = []
    st.setdefault("seen", {})

    with sync_playwright() as p:
        ctx = p.chromium.launch_persistent_context(
            user_data_dir=str(PROFILE_DIR),
            headless=not args.headful,
            locale="ko-KR",
            viewport={"width": 1280, "height": 900},
        )
        page = ctx.new_page()
        page.goto(args.list_url, wait_until="domcontentloaded")
        page.wait_for_timeout(1200)

        candidates = extract_project_links(page)

        # Fetch detail pages (limited)
        details = []
        ts = datetime.now().strftime("%Y%m%d-%H%M%S")
        for c in candidates[: args.max]:
            if c.project_id in st["seen"]:
                continue
            dp = ctx.new_page()
            dp.goto(c.url, wait_until="domcontentloaded")
            dp.wait_for_timeout(1200)
            html = dp.content()
            text = dp.inner_text("body") if dp.is_visible("body") else ""
            html_path = DEBUG_DIR / f"detail-{c.project_id}-{ts}.html"
            png_path = DEBUG_DIR / f"detail-{c.project_id}-{ts}.png"
            html_path.write_text(html, encoding="utf-8")
            try:
                dp.screenshot(path=str(png_path), full_page=True)
            except Exception:
                pass
            s = score_detail_text(text)
            rec = {
                "projectId": c.project_id,
                "url": c.url,
                "title": c.title,
                "capturedAt": now_iso(),
                "score": s,
                "debug": {"html": str(html_path.relative_to(ROOT)), "screenshot": str(png_path.relative_to(ROOT))},
            }
            details.append(rec)
            st["seen"][c.project_id] = {"url": c.url, "title": c.title, "firstSeen": now_iso(), "lastScore": s}
            dp.close()

        ctx.close()

    shortlist = {
        "listUrl": args.list_url,
        "generatedAt": now_iso(),
        "git": {"head": git_head()},
        "count": len(details),
        "items": sorted(details, key=lambda x: x["score"]["score"], reverse=True),
    }
    SHORTLIST_PATH.write_text(json.dumps(shortlist, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    save_state(st)

    print(f"Wrote: {SHORTLIST_PATH} (items={len(details)})")
    if details:
        top = shortlist["items"][0]
        print(f"Top: {top['projectId']} score={top['score']['score']} title={top['title']}")


if __name__ == "__main__":
    main()
