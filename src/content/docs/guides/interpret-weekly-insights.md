---
title: Interpret Weekly Insights
description: How to read MeetGEO's Weekly Insights card, what each recommendation type means, and when to delegate vs handle yourself.
---

The Weekly Insights card is MeetGEO's primary actionable surface. After every Monday's monitoring run, the agent analyzes the gap between your current state and where the data suggests you should focus, then surfaces 2–4 prioritized recommendations.

Each recommendation includes:

- A specific change to make
- Why this change matters for your AI Visibility Score
- A "Let MeetGEO handle this" delegate option
- An "I'll handle this myself" self-serve option

## The four recommendation types

MeetGEO surfaces four kinds of recommendations:

### 1. Brand story
**What it is:** Update your brand identity — typically the homepage or About page — to better align with how AI engines describe your brand.

**Why it matters:** AI engines synthesize a "what is this brand?" answer from the first few hundred words on your most authoritative pages. Weak or misaligned brand-story content → vague AI descriptions when somebody asks about you.

**Delegate option:** MeetGEO drafts the rewrite and (if WordPress) deploys via the plugin, or surfaces a diff for review.

**Self-serve option:** Outline + talking points + tone guidance, you publish in your CMS.

### 2. Page expansion
**What it is:** Expand a specific thin page so it becomes quotable.

**Why it matters:** The same logic as the Pages to Expand card, but Weekly Insights ranks pages by AI-citation impact rather than just depth score. A thin Product page on a high-traffic item is higher priority than a thin "Privacy Policy" page even if their depth scores are similar.

**Delegate option:** MeetGEO generates the expansion outline + drafts the new content + (where possible) deploys.

**Self-serve option:** AI-generated outline you copy into your CMS, then ↻ Re-scan to confirm.

### 3. Add an FAQ section
**What it is:** Add an FAQ section to a specific page (with corresponding structured schema).

**Why it matters:** FAQ markup is one of the strongest "this page contains specific quotable claims" signals for AI engines. They cite FAQ content disproportionately because it's pre-structured into Q&A pairs that match how users actually ask LLMs.

**Delegate option:** MeetGEO generates the FAQ pairs from your existing content + customer questions + competitor patterns, deploys schema + content where the integration supports it.

**Self-serve option:** FAQ pair drafts + the structured schema, you add to your page manually.

### 4. New page
**What it is:** Create a new page covering a topic AI engines are asking about that you don't yet have a page for.

**Why it matters:** Gap-fill. If LLMs are getting asked _"what's the difference between 10-free and regular nail polish?"_ and you don't have a page on that topic, you're invisible on that query — but if you publish one, you become a strong candidate citation source.

**Delegate option:** MeetGEO drafts the new page + outline + brand-aligned content + schema, deploys to your platform.

**Self-serve option:** Topic brief + outline + recommended structure, you write and publish.

## When to delegate vs handle yourself

**Delegate when:**
- You don't have time to write
- The topic is technical and you trust MeetGEO's brand-aligned drafting
- You've reviewed previous delegated outputs and like the voice
- You want to maintain consistent publishing cadence without the overhead

**Handle yourself when:**
- The brand voice is highly idiosyncratic and you don't trust automated drafting
- The topic is sensitive (legal, regulatory, founder-personal)
- You enjoy the writing work
- You want full editorial control before publishing

Most customers do a mix: delegate `page_content` and `page_faq` (which are mostly mechanical), self-serve `brand_story` and `new_page` (which carry more strategic weight).

## Why the recommendations change week to week

The Weekly Insights agent reads:

- Your latest monitoring run (mention rate, competitor share, sentiment)
- Your current schema coverage and content depth distribution
- Your historical recommendation completion (don't re-recommend things you already did)
- Trending queries from the latest LLM responses

So the recommendations rotate. Don't stress about completing every recommendation in a given week — pick 1–2 to act on, do them well, watch for the score impact next Monday.

## How to know if a recommendation worked

Each recommendation, after you mark it complete (or after MeetGEO deploys it via delegate), gets tagged so the next week's monitoring run can isolate its impact:

- Did the queries that previously didn't mention you start mentioning you?
- Did related competitors lose ground?
- Did your AI Visibility Score move?

Score impact takes 2–4 weeks to fully materialize because AI engines need to re-crawl + re-index. Don't judge a recommendation's value by next Monday's run — judge by the run 2–3 weeks out.
