---
title: AI Visibility Score
description: How MeetGEO's AI Visibility Score is calculated, what each band means, and why most new customers start in Critical or Limited.
---

The AI Visibility Score is a single 0–100 number on your dashboard that summarizes how well AI engines are citing your brand. It's the headline metric that everything else on the dashboard ladders up to.

## Formula

```
score = mention_rate × 60 + infra_health × 40
```

- **mention_rate** (60% of the score) — share of LLM responses that cited your brand across all 5 LLMs (ChatGPT, Claude, Gemini, Perplexity, Google AI Overviews) in the latest weekly run. If your brand appeared in 3 of 50 responses, that's 6%.
- **infra_health — infrastructure score** (40% of the score) — composite of three sub-scores, in order of actual contribution to citation impact:
  1. **Schema coverage** — what % of your eligible pages have JSON-LD entity-graph deployed. The biggest lever; AI crawlers parse this directly from your HTML.
  2. **Content depth** — what % of your pages have enough content depth + answer-first structure to be quotable by AI engines (depth score of 40 or higher).
  3. **`llms.txt` deployment status** — is it live, when was it last updated. Included for completeness; it's a small contributor given low current crawler adoption. See [llms.txt](/concepts/llmstxt/) for where it fits in the priority order.

The 60/40 split reflects what actually drives citations. Mention rate is the outcome we care about, but infrastructure is the leading indicator — fix the infrastructure (especially schema + content depth), mentions follow.

## Bands

| Score | Band | What it means |
|------:|------|---------------|
| 80–100 | **Dominant** | Rare. Usually the category-defining brand. AI engines reach for you by default. |
| 60–80 | **Strong** | Your brand is one of the LLMs' default answers in your category. |
| 40–60 | **Building** | Consistent citations, growing primary-recommendation share. |
| 20–40 | **Limited** | Occasional citations, mostly from informational queries. Where most established brands sit when they start GEO work. |
| 0–20 | **Critical** | LLMs aren't citing your brand at all. Common for new customers in their first month. |

## Why most new customers start in Critical

Three reasons most brands score below 20 on day one:

1. **No schema infrastructure** — most sites have either no JSON-LD or fragmented theme-default schema that doesn't form a coherent brand entity graph. AI engines can't confidently cite a brand they can't structurally identify.
2. **No `llms.txt` file** — without this, LLMs scrape your site without prioritization signals.
3. **Content depth gaps** — pages that are 50–200 words don't get cited even when discovered. LLMs prefer depth.

These are exactly what MeetGEO fixes, in that order. The first weekly scan diagnoses; subsequent weeks measure the climb.

## Why your score might drop week-to-week

Three common causes:

1. **Query mix changed.** The system regenerates 10 queries each week. If the new mix probes territory you don't yet rank for, mention_rate drops even though nothing on your site changed.
2. **A competitor expanded.** They published new content the LLMs picked up, displacing you in answers.
3. **An LLM updated its training data.** Periodic refreshes from any of the 5 LLMs can change citation patterns wholesale.

Open the [Weekly Insights](/guides/interpret-weekly-insights/) card for the diagnosis specific to your run — it names the queries you lost ground on.

## Track the trend, not the snapshot

Week-over-week movement matters more than the absolute number. Going from 18 to 24 over four weeks is a healthier signal than holding flat at 60. Most customers see meaningful movement by week 4 once schema and llms.txt have been deployed and AI engines have re-crawled.
