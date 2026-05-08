---
title: Pages to Expand
description: How MeetGEO scores content depth on every page of your site, why thin pages hurt AI citation, and how the Re-scan button closes the feedback loop to seconds.
---

The "Pages to Expand" card on your dashboard surfaces the pages on your site that don't yet have enough content depth to be quotable by AI engines.

## Depth score: how it works

Every page MeetGEO scans gets a depth score from 0–100, calculated from three signals:

- **Word count** (0–40 points) — scales up to 1,200+ words
- **Headings** (0–30 points) — scales up to 6+ H2 sections
- **Opening paragraph strength** (0–30 points) — length of the first real paragraph, up to 80+ characters

This is intentionally simple and explainable. If a customer sees "your About page scored 45/100," they can reason about what to improve.

## Bands

| Score | Label | What it means |
|------:|-------|---------------|
| 80–100 | **Comprehensive** | Deep, well-structured page. Excellent quotation surface. |
| 60–80 | **Substantial** | Strong content, well-developed. Good quotation surface. |
| 40–60 | **Moderate** | Adequate. Could go deeper. |
| 20–40 | **Thin** | Needs more depth to be quotable by LLMs. |
| 0–20 | **Empty** | Almost no content. Often a placeholder page. |

## Why thin pages hurt AI citation

LLMs prefer to cite sources with depth and structure for two reasons:

1. **Confidence** — when an LLM is constructing an answer, it needs sources that contain enough context to support a quotable claim. A 50-word page is harder to cite confidently than a 1,000-word page covering the same topic in depth.
2. **Specificity** — H2 sections and a strong lede signal "this page covers a specific topic in a structured way." That's exactly the shape AI engines look for when they need to attribute a fact.

A site with 50 thin pages and 5 substantial pages will have its 5 substantial pages cited and the 50 thin ones invisible.

## How to fix a thin page

Click the page row in "Pages to Expand" — MeetGEO opens an AI-generated outline grounded in your brand identity. The outline gives you:

- Section headings (H2s) that match what LLMs expect for your page type
- Talking points per section, written in your brand's voice
- Tone guidance for the lede

Copy the outline into your CMS, expand the page, publish, then click **↻ Re-scan** on the row.

## The ↻ Re-scan button

Re-scan re-fetches the page right now (instead of waiting for the next weekly update) and re-measures content depth. It updates the score and badge in ~3 seconds.

What it does:
- Re-fetches the page using a full browser (works on dynamic pages that load content after the initial page load)
- Recomputes word count, heading count, and opening paragraph strength
- Updates the depth score in real time
- If the score crossed into Moderate or higher, the row drops off the list

What it doesn't do:
- Doesn't update schema (that's part of the weekly process)
- Doesn't call any AI engine
- Doesn't affect monitoring data

It's a lightweight content remeasurement only.

## Aim for substantial, not perfect

A useful baseline:
- **At least 600 words** for most page types
- **At least 3 H2 sections** organizing the content
- **A first paragraph of 80+ characters** that summarizes the page's core claim

Going past Comprehensive (80+) has diminishing returns. The goal isn't "longest page possible" — it's "every important page is at least Substantial."
