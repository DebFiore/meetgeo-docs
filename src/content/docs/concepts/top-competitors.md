---
title: Top Competitors & sentiment
description: How MeetGEO identifies your competitors from LLM responses, what sentiment and primary-recommendation share mean, and how to read the Competitive Sets visualization.
---

The Top Competitors card on your dashboard shows the brands AI engines are mentioning instead of (or alongside) yours when they answer category-relevant questions.

## How competitors get detected

Every Monday's monitoring run produces ~50 LLM responses (10 queries × 5 LLMs). Claude Haiku reads each response and extracts every brand mentioned, with metadata:

- Sentiment (positive / neutral / negative) toward that brand
- Position (primary recommendation / mentioned in body / passing reference)
- Sample context (a quote showing the brand in context)
- Co-mentioned brands (the other brands mentioned in the same response)

Brands that show up across multiple responses become "Top Competitors." A clustering pass collapses spelling variants (e.g., "Ella + Mila" / "Ella+Mila" / "ellamila" → one canonical entry).

You can also pre-supply **Known Competitors** in onboarding. Those names get merged into the analysis so brand-family relationships and odd spellings get detected correctly.

## What each metric means

For each Top Competitor, the card shows:

### Mentions
Total count across the 50 responses. Higher = the LLMs are more likely to surface them when answering category questions.

### Positive sentiment %
Share of mentions where the LLM described the brand favorably. **Important caveat: this is sentiment toward the COMPETITOR, not toward you.** A 95% positive rating on a competitor means the LLMs are describing them in glowing terms — which is the gap your content needs to close.

### Positioned as primary recommendation %
Share of mentions where the LLM positioned that competitor as its **top suggested answer**, not just a passing reference.

This is the metric that separates "name-dropped" brands from "actually-recommended" brands. A brand with 50 mentions and 10% primary rec is mentioned a lot but rarely the LLM's go-to. A brand with 30 mentions and 80% primary rec is much more dangerous — they're displacing you at the moment of decision.

### Sample context
A real quote from one of the LLM responses, showing how the brand was described.

### Often co-mentioned with
The 3 brands most frequently mentioned alongside this one.

## The "Sort by Recommended First" toggle

By default the card sorts competitors by raw mention count. Toggling to "Recommended First" sorts by `mentions × primary_rec_pct` — the brands actually winning recommendations, weighted by mention volume.

This is usually the more actionable view. Pure mention count rewards brands name-dropped 50× across all queries. Position-weighted reveals which brands are the LLMs' "go-to recommendation" for your category — the ones you actually need to displace.

## Competitive Sets

Below the Top Competitors grid, the "You're being compared against these competitive sets" section shows clusters of brands that frequently appear together in LLM responses. Each set is a chip-row of brand names.

Why this matters: the **set** an LLM mentions you alongside reveals the category framing. If you're in Set 1 (premium nail polish brands), you're being positioned alongside the premium tier. If you're absent from every competitive set, that's the diagnosis — you're not part of the conversation at all.

The most common pattern: customers in their first month appear in zero competitive sets, then by month 3 they appear in 1–2 sets as their schema and content depth get consistently picked up by the LLMs.
