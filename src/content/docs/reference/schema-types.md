---
title: Schema entity types
description: The schema.org entity types MeetGEO emits per page type, how they cross-reference via @id, and what each one signals to AI engines.
---

MeetGEO uses an entity-graph methodology — every page emits a `@graph` array with cross-referenced entities. Page-level entities reference site-level Organization and WebSite entities by `@id`, never by inline duplication.

## Site-level entities (every page)

These two appear on every page, with the same canonical `@id`:

### `Organization`
```json
{
  "@type": "Organization",
  "@id": "https://yoursite.com/#organization",
  "name": "...",
  "description": "...",
  "url": "https://yoursite.com",
  "logo": { "@type": "ImageObject", "url": "..." },
  "sameAs": ["https://linkedin.com/company/...", "..."]
}
```

`sameAs` is critical — it's how AI engines verify the brand entity is the same one that exists on LinkedIn, social profiles, etc. An empty `sameAs` is a citation-confidence killer.

For local businesses, `Organization` becomes `LocalBusiness` (or a more specific subtype like `Restaurant`, `Dentist`, etc.) with `PostalAddress` + `geo` + `OpeningHoursSpecification`.

For personal brands, `Person` becomes the central entity instead of `Organization`.

### `WebSite`
```json
{
  "@type": "WebSite",
  "@id": "https://yoursite.com/#website",
  "url": "https://yoursite.com",
  "name": "...",
  "publisher": { "@id": "https://yoursite.com/#organization" }
}
```

References Organization by `@id`. Page-level entities reference `WebSite` via `isPartOf`.

## Page-level entities (varies by page type)

### `WebPage` (every page)
The canonical wrapper for any page. Other entities on the page reference it via `mainEntityOfPage`.

```json
{
  "@type": "WebPage",
  "@id": "https://yoursite.com/some-path#webpage",
  "url": "https://yoursite.com/some-path",
  "name": "Page title",
  "isPartOf": { "@id": "https://yoursite.com/#website" },
  "about": { "@id": "https://yoursite.com/#organization" }
}
```

### `Product` (e-commerce product pages)
```json
{
  "@type": "Product",
  "@id": "https://yoursite.com/products/foo#product",
  "name": "Product name",
  "description": "...",
  "brand": { "@id": "https://yoursite.com/#organization" },
  "offers": { "@type": "Offer", "price": "...", "priceCurrency": "USD" },
  "mainEntityOfPage": { "@id": "https://yoursite.com/products/foo#webpage" }
}
```

### `Article` / `BlogPosting` (editorial content)
```json
{
  "@type": "Article",
  "@id": "https://yoursite.com/blog/post-1#article",
  "headline": "...",
  "datePublished": "...",
  "dateModified": "...",
  "author": { "@id": "https://yoursite.com/authors/jane-doe#person" },
  "publisher": { "@id": "https://yoursite.com/#organization" },
  "mainEntityOfPage": { "@id": "https://yoursite.com/blog/post-1#webpage" }
}
```

For E-E-A-T citation signals, `author` should reference a `Person` entity (real byline, not a generic Organization). Person profiles with rich `sameAs` arrays (LinkedIn, Twitter, professional bios) are MeetGEO's gold standard for editorial sites.

### `FAQPage` (any page with Q&A content)
```json
{
  "@type": "FAQPage",
  "@id": "https://yoursite.com/some-path#faq",
  "mainEntity": [
    { "@type": "Question", "name": "...", "acceptedAnswer": { "@type": "Answer", "text": "..." } }
  ],
  "isPartOf": { "@id": "https://yoursite.com/some-path#webpage" }
}
```

The question text in the schema must match exactly what's written as a heading on your page. MeetGEO extracts this automatically; any mismatch — even a small edit to punctuation — breaks Google's rich-result eligibility.

### `BreadcrumbList` (any page with parent navigation)
```json
{
  "@type": "BreadcrumbList",
  "@id": "https://yoursite.com/products/foo#breadcrumb",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Products", "item": "https://yoursite.com/products" },
    { "@type": "ListItem", "position": 2, "name": "Foo", "item": "https://yoursite.com/products/foo" }
  ]
}
```

### `LocalBusiness` (local-business sites only)
Replaces `Organization` as the root entity. Includes `address`, `geo`, `openingHours`.

### `SoftwareApplication` / `Service` (lead-gen / B2B SaaS)
For software or service companies, this becomes the central product entity. References `Organization` as `provider`.

## Site-type-aware emission

MeetGEO doesn't emit every entity type on every page. The site type (detected during analysis, overridable in Settings) determines what to prioritize:

| Site type | Highest-value entities |
|-----------|------------------------|
| **E-commerce** | `Product` + `Offer` + `AggregateRating`, `CollectionPage`, `FAQPage` on PDPs |
| **Editorial** | `Article` + `Person` author + `ImageObject`, `FAQPage` for explainers |
| **Lead gen / B2B SaaS** | `SoftwareApplication` or `Service`, `HowTo` for tutorials, `FAQPage` on pricing/landing |
| **Local business** | `LocalBusiness` (specific subtype), `Review`/`AggregateRating` |
| **Personal brand** | `Person` (root), `Article`, `CreativeWork` |

## Why @id-based cross-referencing

The whole architecture is built on `@id` URIs because:

1. **Stability across reorganization** — the `@id` `https://yoursite.com/#organization` is stable regardless of which pages exist or how the site is structured.
2. **Internal consistency** — AI engines can verify that the Organization referenced on page A is the same as on page B by matching `@id` strings.
3. **External cross-references** — `sameAs` arrays on Organization/Person link to LinkedIn, Wikipedia, etc., creating provable identity claims AI engines can validate.

A schema graph without `@id` cross-referencing is just a pile of independent claims. A graph with consistent `@id`s is a coherent brand entity AI engines can confidently cite.
