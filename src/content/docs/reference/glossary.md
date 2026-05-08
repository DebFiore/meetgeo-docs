---
title: Glossary
description: Quick definitions for the core terms MeetGEO uses across the dashboard, docs, and API responses.
---

## A

**AI Visibility Score** — A 0–100 number summarizing how well AI engines cite your brand. Calculated as `mention_rate × 60 + infra_health × 40`.

**AIO** — Short for Google AI Overviews. The AI-generated answer that appears above search results on category-defining queries.

## B

**Brand mention** — Any reference to your brand name in an LLM response. Tracked via Claude Haiku extraction of every `monitor_responses` row.

## C

**Canonical host** — The single domain address MeetGEO uses to anchor all schema references for your site (e.g. `www.yoursite.com`). Keeping this consistent across every page is critical for AI engines to recognize your brand as one coherent entity.

**Co-mentioned with** — The brands that appear alongside another brand in an LLM response. Surfaces competitive sets.

**Competitive set** — A cluster of brands the LLMs frequently mention together. Reveals the category framing AI engines use to position you.

**Content depth** — A 0–100 score on each page based on word count, number of headings, and opening paragraph strength. Drives the Pages to Expand card.

## D

**Depth bands** — Comprehensive (80+), Substantial (60+), Moderate (40+), Thin (20+), Empty (0–19).

**Depth score** — A 0–100 number measuring how much content depth a page has. Based on word count, number of headings, and opening paragraph strength. Drives the Pages to Expand card.

## E

**Empty page** — A page with a depth score below 20. Almost no content, often a placeholder.

**Entity graph** — The `@graph` array in JSON-LD that contains cross-referenced schema entities (Organization, WebSite, WebPage, Article, etc.) connected via `@id` pointers.

## F

**FAQPage schema** — A schema.org type for Q&A content. AI engines cite FAQ-marked content disproportionately because it's pre-structured into quotable Q&A pairs.

## G

**GEO** — Generative Engine Optimization. The practice of optimizing for citation by AI engines (vs SEO's optimization for ranking in Google's blue links).

## H

**Dynamic page rendering** — Using a full browser to load pages that display content dynamically (common on Shopify, Next.js, and similar site builders) before reading their content. Ensures MeetGEO can measure pages that don't show their full text on initial load.

## I

**Infrastructure score (infra_health)** — Composite score (0–100) of schema coverage + content depth + llms.txt deployment status. Contributes 40% to your AI Visibility Score. Think of it as "how ready is your site for AI citation."

## L

**`llms.txt`** — Standard markdown file at site root that tells LLMs which content to prioritize. MeetGEO generates and deploys yours weekly.

**`llms-full.txt`** — Companion file containing the full text of priority pages, so LLMs can read content without crawling. Generated alongside `llms.txt`.

## M

**`mention_rate`** — Share of LLM responses that cited your brand across all 5 LLMs in a weekly run. Contributes 60% to AI Visibility Score.

**Weekly monitoring** — The automated process that runs every Monday at 3am UTC, sending questions to all 5 LLMs and analyzing every response for brand mentions, sentiment, and competitor data.

## P

**Page type** — A category MeetGEO assigns to each page during analysis (homepage, about, product, FAQ, etc.) that determines which schema entities to prioritize for that page.

**Page-level entity** — Schema entities specific to one page (e.g., `Product`, `Article`, `FAQPage`). Reference site-level entities via `@id`.

**Position** — Where a brand appears in an LLM response: `primary_recommendation` (top suggestion), `body` (mentioned in the answer), `passing_reference` (briefly named).

**Primary recommendation** — When an LLM positions a brand as its top suggested answer, not just a passing reference. The "Sort by: Recommended First" toggle on Top Competitors ranks by this metric.

## R

**Re-scan** — On-demand content depth re-measurement for a single page. Updates the score in ~3 seconds without waiting for the next weekly cycle.

## S

**SerpAPI** — The service MeetGEO uses to read Google AI Overviews from actual Google search results (since the AI Overview surface isn't accessible via Google's direct APIs).

**Sentiment** — Tone of an LLM response toward a brand: `positive`, `neutral`, or `negative`. Extracted by Claude Haiku per mention.

**Site-level entity** — Schema entities that appear on every page (Organization, WebSite). Same `@id` across all pages.

**Site type** — One of `ecommerce`, `editorial`, `lead_generation`, `local_business`, `personal_brand`. Determines which schema entities MeetGEO prioritizes.

## T

**Thin page** — A page with a depth score between 20 and 39. Has some content but not enough structure or depth to be quoted by AI engines.

**Top Competitors** — The competitor brands surfaced from your weekly monitoring data, with mentions, sentiment, and primary-rec metrics.

**Topic authorities** — The topics your brand is trying to own in AI answers. Used to shape the weekly monitoring questions toward your category. Auto-detected during site analysis, overridable in Settings.

**Trial** — 7-day free access, no credit card required. Defined by `profiles.trial_started_at` + `trial_ends_at`.
