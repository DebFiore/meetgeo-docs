---
title: How to expand a thin page
description: Step-by-step walk-through for taking a thin page to Substantial (60+) using MeetGEO's AI-generated outline and the Re-scan button.
---

You opened your dashboard. The "Pages to Expand" card lists 4 pages below moderate. You want to fix one. Here's the workflow.

## 1. Click the page row

Click any row in the **Pages to Expand** card. MeetGEO opens an expansion drawer and generates a custom outline based on your brand identity and the topics your site covers.

The drawer typically takes 5–15 seconds to populate.

## 2. Read the AI-generated outline

The drawer shows:

- **Section headings (H2s)** — what LLMs expect for this page type. For a contact page, that's typically "Get in touch," "Office locations," "Hours," "FAQs." For an about page, it's "Our story," "Mission," "Team," "Values." Type-aware.
- **Talking points per section** — written in your brand's voice (inferred from existing site content + brand description)
- **Tone guidance for the lede** — the first paragraph is weighted heavily in depth scoring; the outline tells you what shape works

## 3. Copy the outline into your CMS

The outline is structured markdown. Paste it into your CMS as a starting point, then expand each section with your own content. It's a framework — fill it in, don't publish it as-is.

Aim for:
- **600+ words minimum**
- **3+ H2 sections**
- **First paragraph ≥ 80 characters** that summarizes the page's core claim

## 4. Publish

Make sure your CMS actually publishes the change to the live URL. Common gotchas:

- WordPress drafts (click Update, not Save Draft)
- Shopify pages with publishing dates set in the future
- Headless CMSs that need a separate deploy step
- Vercel sites where the change is committed but not yet pushed

## 5. Click ↻ Re-scan

Back on the dashboard, hit the **↻ Re-scan** button on the row. MeetGEO re-fetches the page in real time (works on dynamic pages too), recomputes depth, and updates the score in ~3 seconds.

Expected outcomes:

- **Score crossed into Moderate or higher** — row drops off the list with a toast: _"<page> is now <label> (<score>/100). Moved out of expansion list."_
- **Score went up but still thin** — row stays, badge updates: _"Updated to <new>/100 — still <label>. Keep expanding for a bigger jump."_
- **Score didn't change** — toast: _"No change yet — your CMS may not have published the expanded content. Re-scan again in a minute."_

## 6. Repeat

Most sites have 3–10 pages flagged for expansion in the first month. Working through them in priority order (lowest scores first) gives the biggest score improvement per hour spent.

## Why fixing thin pages matters

Thin pages are the cheapest infrastructure win in GEO. They don't require schema changes, platform reconnection, or LLM behavior shifts. They're just content depth — work you control fully.

Each expansion typically adds 1–3 points to your AI Visibility Score (through the infrastructure portion of the formula). Expanding 5 thin pages can move you from Critical to Limited, even before any AI citation changes.

## What if the score stays at 0 even after expanding?

See [the FAQ entry on EMPTY pages](/faq/#a-page-on-my-pages-to-expand-list-shows-empty-but-my-page-has-content--whats-wrong) — usually means our page scanner is being blocked, or the page loads its content dynamically after the initial load. Quick fix: ↻ Re-scan a second time 60 seconds later. Most cases resolve.
