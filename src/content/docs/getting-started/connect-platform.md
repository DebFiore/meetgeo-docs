---
title: Connect your platform
description: How to connect WordPress, Shopify, Vercel, or Cloudflare to MeetGEO so we can deploy schema and llms.txt automatically.
---

MeetGEO supports four platform integrations. Pick the one that matches where your site is hosted.

## WordPress

Three steps:

1. From the dashboard, click **Connect Platform → WordPress**. MeetGEO issues a one-time connect code.
2. Download the MeetGEO Connector plugin from the dashboard, then in your WordPress dashboard go to **Plugins → Add New → Upload**, select the plugin zip, and **Activate**.
3. In WordPress, go to **Settings → MeetGEO** and paste the connect code. The plugin verifies, the dashboard flips to "Connected," and your initial schema generation kicks off automatically.

If you're on managed WordPress hosting (Pressable, WP Engine, Kinsta) and **Plugins → Add New** is locked, email hello@meetgeo.ai — we'll walk you through the alternative install method.

## Shopify

OAuth-based connection:

1. From the dashboard, click **Connect Platform → Shopify**.
2. You're redirected to Shopify's OAuth approval page. Approve the requested scopes (read/write theme assets, read products).
3. You're redirected back to MeetGEO. Connection complete.

MeetGEO adds the schema and `llms.txt` to your Shopify theme automatically — no manual theme editing needed.

## Vercel

GitHub-based connection (because Vercel deploys from your repo):

1. From the dashboard, click **Connect Platform → Vercel**.
2. You're redirected to GitHub OAuth. Authorize MeetGEO read access to the specific repo.
3. MeetGEO sends a pull request to your repo with the necessary middleware (`middleware.ts`) and a config file. Review the PR; merge when ready.
4. After merge + Vercel auto-deploy, MeetGEO verifies the middleware is live and flips your connection to Connected.

The middleware serves `/llms.txt` and per-page schema directly from MeetGEO's API at request time. No build-step changes needed.

## Cloudflare

Cloudflare Worker connection:

1. From the dashboard, click **Connect Platform → Cloudflare**.
2. Follow the displayed instructions to install the MeetGEO Worker on your Cloudflare zone (one command in the Cloudflare dashboard).
3. Once installed, MeetGEO serves schema and `llms.txt` directly on your domain.

## After connecting

Within ~5 minutes of any successful connection:

- MeetGEO generates schema for the first ~10 eligible pages on your site
- Schema deploys via the platform integration
- `llms.txt` and `llms-full.txt` generate and deploy
- The dashboard's "Pages to Expand" card populates

The first weekly LLM monitoring run happens at the next Monday 03:00 UTC.

## Multiple platforms?

You can connect multiple platforms to the same site (e.g., WordPress for the main blog + Vercel for a marketing landing page). MeetGEO routes deploys based on URL patterns. Most customers stick with one platform per site.
