---
title: Your first weekly scan
description: What happens during MeetGEO's first weekly LLM monitoring run for your site, what the dashboard fills in afterward, and what to do with the data.
---

Every Monday at 03:00 UTC, MeetGEO runs the weekly monitoring for each connected site. Here's what happens during your first one.

## The run itself (takes ~3–5 minutes)

1. **Query generation** — 10 category-relevant questions are generated based on your brand description and the topics your site covers. Mix: 7 longer, specific questions + 3 broader category questions.
2. **Send to all 5 LLMs** — Each question goes to ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews. Around 50 responses total.
3. **Brand extraction** — Every response is analyzed for brand mentions — with sentiment, position in the answer, and which other brands appear alongside them.
4. **Consolidation** — Spelling variants of the same brand (e.g. "Ella + Mila" vs "Ella+Mila") are collapsed into one entry.
5. **Results saved** — Everything lands in your dashboard. Raw response text is purged after processing; only the analysis stays.

The first run is more expensive than subsequent ones (no historical data to compare against), but still typically under $0.10 per site.

## What the dashboard shows after the first scan

### AI Visibility Score
Populates with a real number. Most new customers land in **Critical (0–20)** for the first scan — that's the diagnostic, not a defect.

### Top Competitors card
Shows the brands the LLMs mentioned across your 50 responses. Each card has:
- Total mentions
- Positive sentiment %
- Positioned as primary recommendation %
- A sample context quote
- Co-mentioned brands

### Weekly Trend chart
The first dot in your time series. Subsequent weeks add to this — the trajectory is what matters.

### Sentiment Summary band
A single line: _"Across N competitor mentions: X% positive, Y% neutral, Z% negative."_

### Competitive Sets
Up to 5 clusters of brands frequently mentioned together. Reveals the category framing the LLMs are using.

### Weekly Insights card
2–4 prioritized recommendations based on the gap between your current state and where the data suggests you should focus. Each has a "Let MeetGEO handle this" delegate option and an "I'll handle this myself" self-serve option.

## What to do with the first-scan data

**Don't react to absolute numbers.** Most brands score 5–18 in their first run — that's the floor for a category that's never had GEO work done. The interesting signal is week-over-week movement.

**Do read the Top Competitors card carefully.** Even on day one, you'll learn which brands the LLMs reach for in your category. If you see brands you didn't know were competing for the same AI mentions, that's actionable competitive intelligence.

**Do open Weekly Insights.** This is where the agent surfaces what to fix first. By week 4 you should see your first set of recommendations marked as "applied" with measurable score impact.

## The 4-week trajectory

A typical climb (assuming consistent platform deployment + no major site changes):

| Week | What's happening |
|------|------------------|
| 1 | First scan. Score: Critical band. Diagnosis surfaces. |
| 2 | JSON-LD entity graph is now indexed by AI crawlers. Possibly +2–4 score points. |
| 3 | FAQPage markup picked up; first thin-page expansions starting to register. +3–6 points. |
| 4 | Compounding: schema + FAQ + brand identity + content depth all working. +5–10 points. Often crosses into Limited (20–40). |

Faster trajectories are possible if you aggressively expand thin pages and push consistent content updates.

Slower ones happen if your site has structural issues (pages that load content dynamically, blocked scanners, no structured data yet) — those need a few extra weeks for AI engines to re-crawl after MeetGEO fixes the structure.
