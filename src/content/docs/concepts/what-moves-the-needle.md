---
title: What actually moves the needle
description: The four AI-citation levers ranked by what AI crawlers actually parse from your HTML, with verification methods for each.
---

There's a lot of GEO advice circulating right now, and much of it is overhyped. This page is the practitioner version: the four levers that actually move AI recommendation rates, based on what AI crawlers parse from HTML and what MeetGEO observes across customer monitoring data each week.

## The starting line for most brands

When a customer first connects to MeetGEO, their AI Visibility Score almost always lands in the **Critical band (0–20)**. That's not a defect of the customer or the product — it's the diagnostic. Most brands have never had anyone do this work specifically, so AI engines have no semantic anchor for them yet.

The work that closes that gap is technical, measurable, and verifiable. It's not speculative, and it's not proprietary.

## The four levers, in order of demonstrated impact

### 1. Server-side structured data (JSON-LD schema)

This is the single biggest lever. AI crawlers parse JSON-LD directly out of your HTML — it tells them in machine-readable form what each page is about, who you are, and how your entities relate.

**What MeetGEO does**: deploys an entity-graph schema (Organization + WebSite + page-level entities, all cross-referenced by `@id`) on every page of your site, via the platform integration (WordPress / Shopify / Vercel / Cloudflare). See [JSON-LD entity graph](/concepts/entity-graph/) for the technical details.

**How to verify it's working**: check the Schema Coverage section in your MeetGEO dashboard — it shows exactly which schema types are live on each page. You can also view source on any of your pages and search for `application/ld+json` to see the structured data block directly.

### 2. FAQPage schema on existing FAQ content

If you have a FAQ section anywhere on your site (a page, a section on a product page, a help center), wrapping it in `FAQPage` JSON-LD is the highest-ROI single change available. AI engines disproportionately cite FAQ-marked content because it's pre-structured into Q&A pairs that match how people actually phrase questions to LLMs.

**What MeetGEO does**: detects FAQ-shaped content on your pages and wraps it in `FAQPage` schema. The question text in the schema matches exactly what's written as a heading on your page — that's Google's requirement, and what AI engines verify against.

The reason this works is mechanical: every Q&A pair becomes a quotable atomic unit AI engines can attribute confidently to your domain.

### 3. Consistent brand identity across pages

Every page on your site should reference the same `Organization` entity — same canonical `@id`, same `name`, same `sameAs` array linking to LinkedIn / Wikipedia / industry registries. AI engines verify brand identity by cross-referencing these claims; inconsistent or absent identity claims kill citation confidence.

**What MeetGEO does**: every schema MeetGEO emits uses the same canonical `@id` (`https://yoursite.com/#organization`) for your Organization. The `sameAs` array auto-populates from your `social_profiles` setting and gets verified weekly.

**The cheapest miss to fix**: an empty `sameAs` array. If you haven't added social profiles to your MeetGEO settings yet, that's the first 30 seconds of work that improves citation confidence the most.

### 4. Answer-first content structure

LLMs cite content that's structured to answer questions, not content that's structured to rank in Google. Specifically:

- **First paragraph (the "lede") states the answer**, not setup. Compare: *"What is GEO? GEO is the practice of getting your brand cited by AI engines."* (good) vs *"In today's rapidly evolving digital landscape, brands face increasing challenges..."* (bad — LLMs skip this).
- **H2 headings frame discrete questions** the page answers, not topics it covers. *"How is the score calculated?"* (good) vs *"Methodology"* (worse).
- **Each section is self-contained** so an LLM can quote one paragraph without needing surrounding context. Avoid forward references like *"as we'll see below."*

**What MeetGEO does**: the depth scorer measures word count, number of headings, and opening paragraph strength — all proxies for "is this page structured for citation." The Pages to Expand card surfaces pages that score under 40, and the AI-generated outline drafts the answer-first structure for you.

## Where llms.txt actually fits

`llms.txt` is a proposed standard for telling AI engines which content on your site to prioritize. Adoption among major AI crawlers is currently low — based on what MeetGEO sees in customer site logs, AI engines aren't yet routinely fetching the file as part of their citation work.

MeetGEO still generates and deploys it because:

- **Deployment cost is near zero** — once your site profile exists, generating and deploying the file is automatic
- **Future-proofing** — if any major LLM does adopt the standard, your site is already compliant
- **Belt-and-suspenders** — the file restates your brand description and priority pages in plain markdown, which doesn't hurt and occasionally helps with whatever crawler does fetch it

But `llms.txt` is not what's moving your AI Visibility Score. That's the four levers above. If you're prioritizing time, prioritize those.

See [llms.txt](/concepts/llmstxt/) for the customization options.

## How to verify any of this for yourself

Every claim above is verifiable. You don't have to take MeetGEO's word for any of it:

| Lever | How to verify |
|-------|---------------|
| **JSON-LD schema** | MeetGEO's Schema Coverage report — or view source on any page and search for `application/ld+json` |
| **FAQPage schema** | Same Schema Coverage report — look for the FAQPage type in the deployed list |
| **Brand identity consistency** | View source on any 3 pages of your site — do the Organization `@id` values match? |
| **Answer-first content** | Read the first paragraph of any page out loud — does it state the answer, or set up context? |

If a tool or framework can't make claims at this level of concreteness, treat the advice with appropriate skepticism.

## Where to next

- [JSON-LD entity graph](/concepts/entity-graph/) — the schema architecture in detail
- [Pages to Expand](/concepts/pages-to-expand/) — answer-first content depth scoring
- [Schema entity types](/reference/schema-types/) — full reference for what MeetGEO emits per page type
- [llms.txt](/concepts/llmstxt/) — assessment of where this proposed standard fits
