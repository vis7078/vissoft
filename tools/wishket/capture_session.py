#!/usr/bin/env python3
"""Interactive login to Wishket and save a reusable browser profile.

Wishket may invalidate simple storage_state cookies quickly. To improve persistence,
this script uses a *persistent context* (like a normal Chrome profile) and also
exports storage_state.json for debugging.

This is the only step that requires a human because it may require typing credentials.
After saving the profile, the scraper can run headless on a schedule.

Usage:
  cd ~/vissoft
  . .venv/bin/activate
  python tools/wishket/capture_session.py --start-url "https://www.wishket.com/..."

It will open a Chromium window. Log in, then come back to terminal and press ENTER.
"""

from __future__ import annotations

import argparse
import os
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]
STATE_PATH = ROOT / "tools" / "wishket" / "storage_state.json"
PROFILE_DIR = ROOT / "tools" / "wishket" / "profile"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument(
        "--start-url",
        required=True,
        help="A Wishket URL that requires login (e.g., your filtered project list page).",
    )
    args = ap.parse_args()

    os.makedirs(STATE_PATH.parent, exist_ok=True)
    os.makedirs(PROFILE_DIR, exist_ok=True)

    with sync_playwright() as p:
        # Persistent context keeps cookies/localStorage/etc like a real browser profile.
        ctx = p.chromium.launch_persistent_context(
            user_data_dir=str(PROFILE_DIR),
            headless=False,
            locale="ko-KR",
            viewport={"width": 1280, "height": 900},
        )
        page = ctx.new_page()
        page.goto(args.start_url, wait_until="domcontentloaded")

        print("\n[Wishket] Please log in in the opened browser window.")
        print("Tip: if you see a filter-reset page, it's OK. We only need a valid login session.")
        input("When you're logged in, press ENTER here to save and close... ")

        ctx.storage_state(path=str(STATE_PATH))
        ctx.close()

    print(f"Saved profile dir: {PROFILE_DIR}")
    print(f"Saved storage state: {STATE_PATH}")


if __name__ == "__main__":
    main()
