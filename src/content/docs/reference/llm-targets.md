---
title: LLM targets
description: The 5 LLMs MeetGEO monitors weekly, how each is accessed, and what each surface tells you about your brand's AI visibility.
---

MeetGEO monitors 5 LLM targets every Monday at 03:00 UTC. Each represents a different surface where customers may discover your brand via AI.

| LLM | Provider | Access method | Model |
|-----|----------|---------------|-------|
| **ChatGPT** | OpenAI | Direct API | `gpt-4o` (current default) |
| **Claude** | Anthropic | Direct API | `claude-sonnet-4-5` |
| **Gemini** | Google | Direct API | `gemini-2.5-flash` |
| **Perplexity** | Perplexity | Direct API | `sonar-pro` |
| **Google AI Overviews** | Google | SerpAPI scrape | (Gemini-powered, served from Google's index) |

## Why all 5?

Each LLM has different reach, different audience, and different citation behavior:

- **ChatGPT** — largest weekly active users (~800M). The biggest single source of AI-mediated discovery.
- **Claude** — premium / professional segment. Heavy in B2B, knowledge work, and research-focused queries.
- **Gemini** — native to Google's ecosystem. Direct integration with Google search behaviors and Workspace tools.
- **Perplexity** — the "AI search engine" power-user surface. Heavy citation behavior, often surfaces niche brands.
- **Google AI Overviews** — the AI surface most consumers actually see. Appears above search results on category-defining queries.

A brand can score well on ChatGPT and poorly on Perplexity (or vice versa) depending on what kind of citation infrastructure exists. Monitoring all 5 reveals where the gaps are.

## Why Google AI Overviews via SerpAPI?

What users see in Google search isn't the raw Gemini API response — it's a curated AI Overview that draws from Google's search index. The only authentic way to capture this is to read Google's actual search results page, which SerpAPI does at scale.

When Google surfaces an AI Overview for a query, SerpAPI returns it as a structured response. When Google doesn't show one (common for transactional or low-search-volume queries), MeetGEO skips it rather than counting it as a miss.

## Per-query coverage

Each of your 10 weekly queries goes to all 5 LLMs, giving 50 responses per scan.

For broad queries (the 3 short head-term queries in the mix), Google AI Overviews triggers in roughly 1–3 of 3 cases — the AIO surface is selective about which queries it answers.

For long-tail queries (the 7 deeper queries), Google AI Overviews almost never triggers, so the data on those primarily comes from the other 4 LLMs.

This is by design. The broad queries exist specifically to give Google AI Overviews something to surface; the long-tail queries probe deeper competitive territory the API LLMs handle better.

## What if an LLM is down?

MeetGEO degrades gracefully. If any LLM API is unavailable during a scan:

- The other 4 still complete
- The unavailable one's responses are recorded as `error` status
- That LLM contributes 0 to your mention_rate denominator for the week (so a partial outage doesn't artificially deflate your score)
- The next week's scan picks up where the data left off

Outages are rare but happen 1–2 times per quarter on average across the 5 providers.
