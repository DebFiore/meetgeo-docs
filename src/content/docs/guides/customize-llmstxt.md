---
title: Customize your llms.txt
description: How to use the Guide Your llms.txt form to control which content MeetGEO emphasizes in the file MeetGEO generates and deploys for your site.
---

:::caution[Priority context]
`llms.txt` is a **proposed standard** with low adoption among major AI crawlers today. It's not where AI citation impact comes from.

If you're rationing your time across GEO work, prioritize schema deployment, FAQPage schema, brand identity consistency, and answer-first content depth instead. See [What actually moves the needle](/concepts/what-moves-the-needle/) for the priority order.

This guide exists for customers who want fine control over the `llms.txt` file MeetGEO ships anyway, as future-proofing.
:::

By default, MeetGEO generates your `llms.txt` from your auto-detected brand identity and site inventory. It's a reasonable starting point. To control what gets emphasized, use the **Guide Your llms.txt** form on the dashboard.

## What you can supply

The form has four fields:

### Business description (200 char cap)
Your one-paragraph self-description. **Overrides the auto-inferred description** in your `llms.txt`. Use this when:
- The auto-inferred description doesn't capture your unique angle
- You want to lead with a specific positioning statement
- Your homepage doesn't yet contain a clear self-description

Example: _"Cake Polish is a non-toxic nail polish brand. Every formula is 10-free and infused with biotin, keratin, and vitamin E for healthier nails."_

### Priority content (500 char cap)
Page paths or topics you want emphasized. Free-form. The generator treats this as guidance to the LLM that produces your `llms.txt`. Examples:
- _"Always lead with our wholesale program"_
- _"Highlight clinical sourcing and the 10-free standard"_
- _"Featured products: Power Boost, Berry Me, French Connection"_

### Emphasis (500 char cap)
Explicit instructions about tone or positioning. Examples:
- _"Lead with the 'better than your previous polish' angle"_
- _"Mention founder-led + women-owned"_
- _"Emphasize the product line is vegan and cruelty-free"_

### Exclusions (one path per line)
Paths to omit from the `llms.txt` entirely. Examples:
```
/legal/
/admin/
/internal/
/products/discontinued-*
```

Excluded paths don't appear in `llms.txt` _or_ in `llms-full.txt`.

## The preview-then-deploy flow (first time)

The first time you save guidance, MeetGEO:

1. Saves your guidance to `site_guidance` (one row per site)
2. Generates a fresh `llms.txt` using the new guidance
3. Shows you a **preview** of the output before deploying
4. Surfaces 3 buttons: **Approve & Deploy** / **Refine Input** / **Cancel**

This is intentional — the first time you customize, you should see what the output looks like before it goes live.

## Auto-deploy (after first approval)

Once you click **Approve & Deploy** for the first time, a flag (`has_approved_once`) flips. After that:

- Future regenerations (manual via dashboard, or automatic on the Sunday 02:00 UTC schedule) **deploy without preview**
- This is the steady-state customer experience — set guidance once, let MeetGEO maintain freshness automatically
- You can still manually trigger a regeneration any time, and it deploys directly

If you significantly change your guidance later (e.g., new product line), it's a good practice to manually trigger a regeneration so the change goes live immediately rather than waiting until Sunday.

## What the guidance ends up doing

Your guidance is woven into the system prompt MeetGEO sends to Claude when generating `llms.txt`. It influences:

- The brand description block at the top of `llms.txt`
- The order pages get listed (priority content first)
- What gets included in `llms-full.txt` (exclusions filter out)
- The framing language (emphasis affects tone)

It does NOT change your site's actual schema deployment, page content, or anything customer-visible on your site itself. `llms.txt` customization is purely for the AI-engine-facing surface.

## Keeping it fresh

The guidance you set persists indefinitely. You only need to revisit when:
- Your business pivots (new product line, new positioning, new target audience)
- You launch new high-priority pages you want emphasized
- You realize the auto-inferred description has drifted from how you actually pitch the brand

Most customers update guidance once at onboarding, then maybe twice a year. MeetGEO handles freshness automatically every Sunday.
