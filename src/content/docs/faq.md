---
title: Frequently Asked Questions
description: Quick answers to the most common questions about MeetGEO — including troubleshooting and edge cases.
---

These are the questions customers ask most often. The in-app help chatbot answers them with your specific dashboard data; this page is the public reference version.

## AI Visibility Score

### How is my AI Visibility Score calculated?

Your score is `mention_rate × 60 + infra_health × 40`.

- **mention_rate** — share of AI engine responses that cited your brand across all 5 platforms (ChatGPT, Claude, Gemini, Perplexity, Google AI Overviews) in the latest weekly run.
- **infra_health (infrastructure score)** — composite of schema coverage + content depth + llms.txt deployment. Think of it as "how ready is your site for AI citation."

Bands: 0–20 Critical · 20–40 Limited · 40–60 Building · 60–80 Strong · 80–100 Dominant. Most new customers start in Critical or Limited — that's normal, not a defect.

[Full details →](/concepts/ai-visibility-score/)

### What's a good AI Visibility Score?

There's no universal "good" — it's relative to your category. Track the trend, not the absolute number. Going from 18 to 24 over four weeks is a healthier signal than holding flat at 60.

[Full bands explanation →](/concepts/ai-visibility-score/#bands)

### Why did my score drop this week?

Three common causes:

1. **Query mix changed** — the system regenerates 10 queries each week. New queries probe different territory.
2. **A competitor expanded** — they published new content the LLMs picked up, displacing you.
3. **An LLM updated its training data** — periodic refreshes can change citation patterns wholesale.

Open the Weekly Insights card for the diagnosis specific to your run.

## Pages to Expand

### What does "thin" content mean?

A page is "thin" if its depth score is below 40 out of 100. The score is a 0–100 composite of word count, number of headings, and opening paragraph strength. Thin and empty pages don't get cited because AI engines prefer to quote sources with depth and structure.

[Full details →](/concepts/pages-to-expand/)

### How do I expand a thin page?

Click the page row in "Pages to Expand" — MeetGEO opens an AI-generated outline grounded in your brand identity. Copy it into your CMS, expand the page, publish, then click **↻ Re-scan**. Aim for at least 600 words and 3+ H2s.

[Step-by-step guide →](/guides/expand-thin-page/)

### Why hasn't my page score updated after I expanded it?

Three things to check:

1. **Did your CMS actually publish?** Open the page in an incognito window — if the new content isn't visible there, your CMS hasn't published yet (cache, draft state, or staging environment).
2. **Did the page redirect?** Some platforms redirect newly-edited pages to a different URL — the score is tied to the original URL.
3. **Click ↻ Re-scan again** — the first re-scan can hit a CDN cache. A second click 30 seconds later usually picks up the fresh content.

If the score still doesn't move, the page may be served by a JavaScript SPA that hides content from non-browser fetches. Email hello@meetgeo.ai with the URL.

### What does the ↻ Re-scan button do?

↻ Re-scan re-fetches the page right now (instead of waiting for the next weekly update) and re-measures content depth. It updates the score and badge in ~3 seconds. Use it whenever you've just expanded a page in your CMS and want to see the result immediately. It does NOT update schema or call any AI engine — it's a lightweight content remeasurement.

## llms.txt

### What is llms.txt and does it actually matter?

`llms.txt` is a **proposed standard** for telling AI engines which content on your site to prioritize. It's a markdown file at your site root (`yourdomain.com/llms.txt`).

Adoption among major AI crawlers is currently low — based on what MeetGEO observes in customer site logs, AI engines aren't yet routinely fetching the file as part of their citation work. MeetGEO still generates and deploys yours (auto-deploy each Sunday) because the cost is near-zero and it's reasonable future-proofing. But the heavy lifters for AI citation are schema markup, FAQPage schema, brand identity consistency, and answer-first content depth — not `llms.txt`.

[Full assessment →](/concepts/llmstxt/) · [What actually moves the needle →](/concepts/what-moves-the-needle/)

### How do I customize my llms.txt?

Open the **Guide Your llms.txt** form on the dashboard and fill in any of:

- **Business description** — your one-paragraph self-description
- **Priority content** — page paths or topics you want emphasized
- **Emphasis** — explicit instructions like _"always lead with our wholesale program"_
- **Exclusions** — page paths to omit

The first time you save guidance, MeetGEO generates a preview before deploying. After you approve once, future regenerations auto-deploy each Sunday.

[Full guide →](/guides/customize-llmstxt/)

## Schema deployment

### What is JSON-LD schema and why does MeetGEO deploy it?

JSON-LD schema is structured data embedded in your pages that tells AI engines exactly what each page is about. MeetGEO uses an entity-graph approach: every page links to your Organization and WebSite entities via canonical `@id` references, so AI engines build a coherent knowledge graph of your brand.

[Full details →](/concepts/entity-graph/)

## Brand Mentions & Competitors

### How are competitors detected?

Each Monday at 03:00 UTC, MeetGEO sends 10 category-relevant queries to all 5 LLMs and analyzes every response for brand names. Claude Haiku extracts each mention with sentiment, position-in-response, and which other brands it appears alongside.

You can also pre-supply Known Competitors in onboarding so spelling variants and brand-family relationships get detected correctly.

[Full details →](/concepts/top-competitors/)

### What does "Positioned as primary recommendation" mean?

Primary recommendation = the share of mentions where the LLM positioned that competitor as its **top suggested answer**, not just a passing reference.

A brand with 50 mentions but only 10% primary rec is name-dropped a lot but rarely the LLM's "go-to." A brand with 30 mentions and 80% primary rec is much more dangerous — they're displacing you at the moment of decision.

The "Sort by: Recommended First" toggle on Top Competitors ranks by `mentions × primary_rec_pct`.

## Connections

### How do I connect WordPress?

Three steps:

1. From the dashboard, click **Connect Platform → WordPress**. MeetGEO issues a one-time connect code.
2. Download the MeetGEO Connector plugin from the dashboard, then in your WordPress dashboard go to Plugins → Add New → Upload, select the plugin zip, and activate it.
3. In WordPress, go to Settings → MeetGEO and paste the connect code.

If you're on managed hosting (Pressable, WP Engine, Kinsta) and Plugins → Add New is locked, email hello@meetgeo.ai for SFTP install help.

[All platforms →](/getting-started/connect-platform/)

## Trial & Billing

### How long is the free trial?

7 days, no credit card required. On day 7 the dashboard locks and shows a Subscribe button — clicking it opens Stripe Checkout where you can pick a plan.

Until you subscribe, schemas + llms.txt files already deployed to your site stay in place. For pricing details, see [meetgeo.ai/pricing](https://meetgeo.ai/pricing) or email hello@meetgeo.ai.

## Troubleshooting

### My dashboard says "WordPress connection lost" — what do I do?

Common causes:

1. **Plugin was deactivated** — check WordPress Plugins page, reactivate MeetGEO Connector.
2. **Site went into maintenance mode** — common during host migrations.
3. **Firewall is blocking us** — managed hosts (Pressable, WP Engine) sometimes block outside requests; whitelist `meetgeo.ai` from the host control panel.
4. **The connect code expired** — re-issue from Dashboard → Settings → Connections → Re-connect.

If none of those: email hello@meetgeo.ai with your domain.

### A page on my "Pages to Expand" list shows "EMPTY" but my page has content — what's wrong?

Three causes:

1. **The page loads its content dynamically** — common on Shopify Hydrogen and Next.js sites. The content isn't visible until the page fully loads. Click ↻ Re-scan to retry.
2. **The page is blocking our scanner** — some Cloudflare security rules or paywall plugins block automated page reads. Add `MeetGEO-Analyzer` to your allowed user agents.
3. **The page is genuinely empty** — a placeholder or coming-soon page. Add real content (>50 words) and re-scan.

If you've ruled all three out, email hello@meetgeo.ai with the URL.

---

Have a question that isn't here? Ask the in-app help chatbot (bottom-right of the dashboard) — it answers grounded in your specific dashboard data — or email hello@meetgeo.ai.
