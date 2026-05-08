---
title: llms.txt
description: An assessment of where llms.txt fits in the AI citation toolkit, why MeetGEO still ships it, and how to customize the file for your site.
---

## What it is

`llms.txt` is a **proposed standard** for telling AI engines which content on your site to prioritize. It's a markdown file at your site root: `https://yourdomain.com/llms.txt`. Think of it as `robots.txt` for AI engines — same idea, different audience.

The file structure typically includes:

1. A one-paragraph brand description
2. Priority pages on your site, with descriptions
3. (Optional) An `llms-full.txt` companion file with the full text of priority pages, so crawlers don't have to fetch each one individually

## Where it fits today

Adoption among major AI crawlers is currently low. Based on what MeetGEO observes in customer site logs across hundreds of sites, AI engines aren't yet routinely fetching `llms.txt` as part of their citation work. The standard is being championed by smaller AI projects and a number of independent developers; major providers haven't broadly committed to it yet. Adoption may grow over time. It also may not.

If you've seen GEO advice that frames `llms.txt` as critical or transformative, that's overstated relative to what's actually happening today.

## Why MeetGEO still generates and deploys it

Three reasons:

1. **Deployment cost is near zero.** Once your site profile exists, generation and deployment are automatic. There's no time cost to you.
2. **Future-proofing.** If adoption grows, your site is already compliant. The cost of being early is much smaller than the cost of being behind.
3. **It restates your brand description in plain markdown.** Even crawlers that don't formally support `llms.txt` will sometimes fetch the file. Having a clean, structured brand description at a predictable URL doesn't hurt.

## What MeetGEO's `llms.txt` includes

When MeetGEO generates yours, it includes:

- **Brand description** — the canonical one-paragraph self-description for your brand
- **Priority content** — links to your most important pages (homepage, key products, services, about page) with descriptions
- **`llms-full.txt` reference** — companion file with full text of priority pages
- **Exclusions** — paths you've explicitly told us to omit from both files

## How MeetGEO deploys it

Every Sunday at 02:00 UTC, MeetGEO regenerates your `llms.txt` based on the latest content on your site, then deploys it via the platform integration:

- **WordPress** — via the MeetGEO Connector plugin
- **Shopify** — via the MeetGEO theme template (`templates/page.meetgeo-llms.liquid`)
- **Vercel** — via middleware that serves `/llms.txt` from MeetGEO's API
- **Cloudflare** — via a Worker route at `/llms.txt`

You can also trigger a regeneration manually from the dashboard's "Latest llms.txt" panel any time.

## Customizing the content

The "Guide Your llms.txt" form on the dashboard lets you supply:

- **Business description** — overrides the auto-inferred description
- **Priority content** — page paths or topics to emphasize
- **Emphasis** — explicit instructions like _"always lead with our wholesale program"_
- **Exclusions** — page paths to omit (one per line)

The first time you save guidance, MeetGEO generates a preview before deploying. After you approve once, future regenerations auto-deploy each Sunday.

See [Customize your llms.txt](/guides/customize-llmstxt/) for the full guide.

## Where this fits in the priority order

If you're rationing your attention across GEO work, `llms.txt` is **not** what to focus on. The four levers that demonstrably move the needle are:

1. [Server-side JSON-LD schema (entity graph)](/concepts/entity-graph/) — by far the biggest lever
2. **FAQPage schema** on existing FAQ content
3. **Consistent brand identity** across pages (shared Organization `@id`, populated `sameAs`)
4. [**Answer-first content structure**](/concepts/pages-to-expand/) — first paragraph states the answer

`llms.txt` is below all four of these in actual citation impact today. MeetGEO ships it because the deployment is automated and free for you, not because it's where the value is.

For the full picture, see [What actually moves the needle](/concepts/what-moves-the-needle/).
