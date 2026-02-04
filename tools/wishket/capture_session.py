#!/usr/bin/env python3
"""Interactive (one-time) login to Wishket and save Playwright storage state.

This is the only step that requires a human because it may require typing credentials.
After saving storage_state.json, the scraper can run headless on a schedule.

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


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument(
        "--start-url",
        required=True,
        help="A Wishket URL that requires login (e.g., your filtered project list page).",
    )
    args = ap.parse_args()

    os.makedirs(STATE_PATH.parent, exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        ctx = browser.new_context()
        page = ctx.new_page()
        page.goto(args.start_url, wait_until="domcontentloaded")

        print("\n[Wishket] Please log in in the opened browser window.")
        print("When you're fully logged in and can see your project list, return here.")
        input("Press ENTER to save session and close the browser... ")

        ctx.storage_state(path=str(STATE_PATH))
        browser.close()

    print(f"Saved storage state: {STATE_PATH}")


if __name__ == "__main__":
    main()
