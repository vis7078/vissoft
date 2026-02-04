#!/usr/bin/env python3
"""Add a real project entry to vissoft/data/projects.json.

Usage:
  python3 tools/add_project.py --name "..." --description "..." --category web \
    --demo https://... --repo https://... --date 2026-02-04 \
    --tech "React,TypeScript" --image "https://..." --features "a;b;c"

Notes:
- Auto-assigns id = max(existing)+1
- Fills categoryName/icon/badgeClass defaults
"""

from __future__ import annotations

import argparse
import json
import os
from datetime import date as date_cls

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(ROOT, "data", "projects.json")

CATEGORY_DEFAULTS = {
    "web": {"categoryName": "웹 애플리케이션", "categoryIcon": "🌐", "badgeClass": "badge-blue"},
    "mobile": {"categoryName": "모바일 앱", "categoryIcon": "📱", "badgeClass": "badge-green"},
    "desktop": {"categoryName": "데스크톱 앱", "categoryIcon": "🖥️", "badgeClass": "badge-orange"},
    "api": {"categoryName": "API/백엔드", "categoryIcon": "⚡", "badgeClass": "badge-pink"},
    "ai": {"categoryName": "AI/ML 솔루션", "categoryIcon": "🤖", "badgeClass": "badge-purple"},
    "other": {"categoryName": "기타 도구", "categoryIcon": "🔧", "badgeClass": "badge-cyan"},
}


def load_projects() -> list[dict]:
    if not os.path.exists(DATA_PATH):
        return []
    with open(DATA_PATH, "r", encoding="utf-8") as f:
        return json.load(f)


def save_projects(items: list[dict]) -> None:
    os.makedirs(os.path.dirname(DATA_PATH), exist_ok=True)
    with open(DATA_PATH, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)
        f.write("\n")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--name", required=True)
    ap.add_argument("--description", required=True)
    ap.add_argument("--category", default="web", choices=sorted(CATEGORY_DEFAULTS.keys()))
    ap.add_argument("--demo", default="#")
    ap.add_argument("--repo", default="#")
    ap.add_argument("--date", default=str(date_cls.today()))
    ap.add_argument("--tech", default="")
    ap.add_argument("--image", default="https://picsum.photos/seed/vissoft-auto/600/400")
    ap.add_argument("--features", default="")
    ap.add_argument("--featured", action="store_true")

    args = ap.parse_args()

    items = load_projects()
    next_id = (max([int(x.get("id", 0)) for x in items]) + 1) if items else 1

    defaults = CATEGORY_DEFAULTS[args.category]
    tech = [t.strip() for t in args.tech.split(",") if t.strip()]
    features = [f.strip() for f in args.features.split(";") if f.strip()]

    entry = {
        "id": next_id,
        "name": args.name,
        "category": args.category,
        **defaults,
        "description": args.description,
        "techStack": tech,
        "date": args.date,
        "image": args.image,
        "demoUrl": args.demo,
        "repoUrl": args.repo,
        "isReal": True,
        "featured": bool(args.featured),
    }
    if features:
        entry["features"] = features

    items.append(entry)
    save_projects(items)

    print(f"Added project id={next_id} to {os.path.relpath(DATA_PATH, ROOT)}")


if __name__ == "__main__":
    main()
