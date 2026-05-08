---
title: 5-LLM monitoring
description: How MeetGEO probes ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews each week to measure your brand's actual AI citation rate.
---

Every Monday at 03:00 UTC, MeetGEO sends 10 category-relevant questions to all 5 LLM targets and analyzes every response.

## The 5 LLM targets

| LLM | Provider | Why it matters |
|-----|----------|----------------|
| **ChatGPT** | OpenAI | Largest weekly active user base. Drives the most AI-mediated discovery traffic. |
| **Claude** | Anthropic | Premium / professional segment. Heavy in B2B and developer queries. |
| **Gemini** | Google | Native to Google's ecosystem. Direct integration with Google search behaviors. |
| **Perplexity** | Perplexity | The "AI search engine" for power users. Heavy citation behavior. |
| **Google AI Overviews** | Google | The AI surface most consumers actually see — appears above search results. |

We probe Google AI Overviews via SerpAPI because what users see in Google search isn't the raw Gemini API response — it's a curated AI Overview that draws from Google's search index.

## How queries get generated

Each week, 10 queries are generated per site, tailored to your brand identity and topic priorities. The mix is structured:

- **7 long-tail queries** (8–14 words each) — probe deep competitive territory. These surface citation patterns from ChatGPT/Claude/Perplexity/Gemini.
- **3 broad queries** (3–6 words each) — high-search-volume head terms that Google AI Overviews reliably triggers for. Without this slice, Google AI Overviews returns empty for almost every long-tail query.

Intent mix across both buckets: roughly 30% commercial ("best non-toxic nail polish"), 40% informational ("how does keratin in nail polish work"), 30% comparison ("10-free polish vs regular polish").

Queries are never branded — they don't include your brand name. The point is to measure organic citation: when somebody asks an AI about your category _without_ knowing about you, does the AI mention you?

## What we measure per response

Each of the ~50 responses (10 queries × 5 LLMs) gets analyzed by Claude Haiku for:

- **Brand mentioned?** Was your brand named in the response?
- **Position** — first sentence (primary recommendation), in the body, or a passing reference?
- **Sentiment** — positive, neutral, or negative tone toward your brand?
- **Competitors mentioned** — which other brands appeared, with their own sentiment + position
- **Co-occurrence** — which competitors are mentioned _alongside_ each other (the competitive set the LLM is grouping you against)
- **Citations** — were any URLs from your site referenced as sources?

This rich per-response data is what powers the Top Competitors card, the sentiment summary, the position-weighted ranking — and the AI Visibility Score itself.

## Why weekly cadence

LLMs don't refresh their training data daily. A brand-citation pattern doesn't change between Tuesday and Wednesday. Weekly cadence is:

- **Frequent enough** to detect meaningful changes (new content drift, competitor moves, training-data refreshes)
- **Infrequent enough** to keep costs bounded without sacrificing signal quality
- **Aligned with content publishing rhythms** customers actually use

If you need on-demand monitoring (e.g. you just published a major new page and want to test it immediately), the Re-scan button on individual pages re-measures depth in real time. Full LLM monitoring stays weekly.
