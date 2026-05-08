---
title: JSON-LD entity graph
description: Why MeetGEO uses an entity-graph approach to schema.org markup, and how shared @id references turn disconnected pages into a coherent brand identity for AI engines.
---

Schema.org JSON-LD is structured data embedded in your pages that tells AI engines what each page is about — the products, articles, FAQs, organization, and how they relate.

MeetGEO uses an **entity-graph** approach: every page links to your Organization and WebSite entities via canonical `@id` references, so AI engines see one connected brand instead of disconnected pages.

## Why entity graphs (vs flat schema)

Most sites that have schema markup at all use a "flat" approach: each page emits its own `Organization` block, its own `Product` block, etc., with no cross-references. To an AI engine, these look like 50 disconnected micro-claims about a brand it has to stitch together.

An entity graph uses canonical `@id` URIs to link entities across pages. Every page references the same `Organization` `@id` (`https://yoursite.com/#organization`) and the same `WebSite` `@id`. Page-level entities (Articles, Products, FAQs) reference those parents via `@id` pointers, never by inline duplication.

The result: AI engines see one coherent knowledge graph for your brand. When they're deciding whether to cite you, they're matching against a structured, internally-consistent entity — not guessing.

## What MeetGEO emits

For each eligible page on your site, MeetGEO generates a JSON-LD `@graph` like this (homepage example):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://yoursite.com/#organization",
      "name": "Your Brand",
      "description": "...",
      "sameAs": ["https://linkedin.com/company/yourbrand", "..."]
    },
    {
      "@type": "WebSite",
      "@id": "https://yoursite.com/#website",
      "publisher": { "@id": "https://yoursite.com/#organization" }
    },
    {
      "@type": "WebPage",
      "@id": "https://yoursite.com/#webpage",
      "isPartOf": { "@id": "https://yoursite.com/#website" },
      "about": { "@id": "https://yoursite.com/#organization" }
    }
  ]
}
```

Every page gets `Organization` + `WebSite` + page-specific entities (`Article`, `Product`, `FAQPage`, etc.), all cross-referenced by `@id`.

## Site-type-aware entity priority

MeetGEO tailors the entity emphasis to your site type:

- **E-commerce** — `Product` (with offers, aggregateRating, brand→Organization) takes priority. FAQPage on PDPs.
- **Editorial** — `Article` with `Person` author (drives E-E-A-T signals). FAQPage for explainers.
- **Lead generation / B2B SaaS** — `SoftwareApplication` or `Service`, FAQPage on landing/pricing pages liberally.
- **Local business** — `LocalBusiness` (specific subtype) with `PostalAddress`, geo coordinates, opening hours.
- **Personal brand** — `Person` becomes the central entity, not `Organization`.

The site type is detected during your site's first analysis pass and you can override it in Settings.

## Why it survives reorganization

Because all entities are referenced by canonical `@id` URIs (not by relative position or inline duplication), reorganizing your site, renaming sections, or restructuring URLs doesn't break the entity graph. The `@id` of `https://yoursite.com/#organization` stays stable regardless of which pages exist.

This matters for AI engines because they cache entity associations. A coherent, stable entity graph compounds citation authority over time.
