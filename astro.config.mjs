// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Astro + Starlight configuration for docs.meetgeo.ai.
//
// Site is deployed as static HTML to Vercel. Zero runtime, zero
// middleware, zero coupling to the main MeetGEO app.
//
// Sidebar structure mirrors the customer journey:
//   Introduction → Getting Started → Concepts → Guides → Reference → FAQ
//
// `head:` injects the MeetGEO Organization entity graph on every page
// so AI engines can attach this docs corpus to the meetgeo.ai brand
// entity (shared @id `https://meetgeo.ai/#organization`). See
// src/components/Head.astro for per-page schema if you want to
// override on specific pages later.

export default defineConfig({
  site: 'https://docs.meetgeo.ai',
  integrations: [
    starlight({
      title: 'MeetGEO Docs',
      description: 'How MeetGEO helps your brand get cited by AI engines (ChatGPT, Claude, Gemini, Perplexity, Google AI Overviews).',
      // Per-theme logo variants from MeetGEO's official brand kit.
      // logo-dark.svg shows on the dark theme (white wordmark on dark bg);
      // logo-light.svg shows on the light theme (dark wordmark on light bg).
      logo: {
        light: './public/logo-light.svg',
        dark: './public/logo-dark.svg',
        replacesTitle: true,
      },
      social: [
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/meetgeo' },
      ],
      editLink: {
        baseUrl: 'https://github.com/DebFiore/meetgeo-docs/edit/main/',
      },
      // Site-wide Organization + WebSite schema injected as JSON-LD into <head>.
      // Same canonical @id as meetgeo.ai itself — ties this docs site into
      // the parent brand entity graph for AI-engine attribution.
      head: [
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          content: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://meetgeo.ai/#organization',
                name: 'MeetGEO',
                url: 'https://meetgeo.ai',
                logo: 'https://meetgeo.ai/logo.png',
                description: 'MeetGEO helps brands get cited by AI engines through automated schema deployment, llms.txt generation, and weekly brand-mention monitoring across ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews.',
                sameAs: [
                  'https://www.linkedin.com/company/meetgeo',
                ],
              },
              {
                '@type': 'WebSite',
                '@id': 'https://docs.meetgeo.ai/#website',
                url: 'https://docs.meetgeo.ai',
                name: 'MeetGEO Documentation',
                publisher: { '@id': 'https://meetgeo.ai/#organization' },
                inLanguage: 'en-US',
              },
            ],
          }),
        },
        // Favicons — multi-format set from MeetGEO's official brand kit.
        // Modern browsers prefer SVG; .ico is the legacy fallback;
        // PNG sizes cover Android, iOS home-screen, and PWA manifests.
        { tag: 'link', attrs: { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' } },
        { tag: 'link', attrs: { rel: 'alternate icon', type: 'image/x-icon', href: '/favicon.ico' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icon-512.png' } },
        // Theme color (browser chrome / mobile address bar)
        { tag: 'meta', attrs: { name: 'theme-color', content: '#4F46E5' } },
        // Open Graph — social-sharing card. Uses sitewide og-image.png as default;
        // individual pages can override via frontmatter `head:` if you want
        // per-page social cards later.
        { tag: 'meta', attrs: { property: 'og:site_name', content: 'MeetGEO Docs' } },
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://docs.meetgeo.ai/og-image.png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        // Twitter / X — uses summary_large_image card type for the wide preview.
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://docs.meetgeo.ai/og-image.png' } },
      ],
      sidebar: [
        {
          label: 'Introduction',
          items: [
            { label: 'What is MeetGEO?', slug: 'index' },
            { label: 'What is GEO?', slug: 'concepts/what-is-geo' },
          ],
        },
        {
          label: 'Getting Started',
          items: [
            { label: 'Sign up + free trial', slug: 'getting-started/signup' },
            { label: 'Connect your platform', slug: 'getting-started/connect-platform' },
            { label: 'Your first weekly scan', slug: 'getting-started/first-scan' },
          ],
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'What actually moves the needle', slug: 'concepts/what-moves-the-needle' },
            { label: 'JSON-LD entity graph', slug: 'concepts/entity-graph' },
            { label: 'Pages to Expand', slug: 'concepts/pages-to-expand' },
            { label: 'AI Visibility Score', slug: 'concepts/ai-visibility-score' },
            { label: '5-LLM monitoring', slug: 'concepts/monitoring' },
            { label: 'Top Competitors & sentiment', slug: 'concepts/top-competitors' },
            { label: 'llms.txt', slug: 'concepts/llmstxt' },
          ],
        },
        {
          label: 'How-To Guides',
          items: [
            { label: 'Expand a thin page', slug: 'guides/expand-thin-page' },
            { label: 'Customize your llms.txt', slug: 'guides/customize-llmstxt' },
            { label: 'Interpret Weekly Insights', slug: 'guides/interpret-weekly-insights' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'LLM targets', slug: 'reference/llm-targets' },
            { label: 'Schema entity types', slug: 'reference/schema-types' },
            { label: 'Glossary', slug: 'reference/glossary' },
          ],
        },
        {
          label: 'FAQ & Troubleshooting',
          items: [
            { label: 'Frequently Asked Questions', slug: 'faq' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
