# MeetGEO Documentation

Source for [docs.meetgeo.ai](https://docs.meetgeo.ai). Static docs site built with [Astro Starlight](https://starlight.astro.build/) and deployed to Vercel.

## Deliberate architecture choices

- **Separate repo from the main MeetGEO app.** Zero shared code, zero shared deploys, zero middleware spreading between them. If this repo breaks, the main MeetGEO app is unaffected.
- **Static site, no runtime.** Astro builds plain HTML/CSS/JS at compile time. No Node runtime in production, no auth, no middleware function — just files served from CDN.
- **Markdown-first content.** Every page lives as a `.md` or `.mdx` file under `src/content/docs/`. Editing content = editing one file, restarting nothing.
- **MeetGEO's own entity graph baked in.** The site emits Organization + WebSite JSON-LD on every page using the same canonical `@id` (`https://meetgeo.ai/#organization`) as the marketing site. AI engines see the docs as part of the parent brand entity, strengthening the meetgeo.ai entity instead of competing with it.
- **Static `llms.txt` at `/public/llms.txt`** that lists all docs pages with descriptions. Updated manually for now; future enhancement is to generate it dynamically via MeetGEO's own `/generate/llmstxt` API.

## Content structure

```
src/content/docs/
├── index.mdx                      # What is MeetGEO?
├── faq.md                         # FAQ + troubleshooting
├── getting-started/
│   ├── signup.md
│   ├── connect-platform.md
│   └── first-scan.md
├── concepts/
│   ├── what-is-geo.md
│   ├── ai-visibility-score.md
│   ├── llmstxt.md
│   ├── entity-graph.md
│   ├── monitoring.md
│   ├── pages-to-expand.md
│   └── top-competitors.md
├── guides/
│   ├── expand-thin-page.md
│   ├── customize-llmstxt.md
│   └── interpret-weekly-insights.md
└── reference/
    ├── llm-targets.md
    ├── schema-types.md
    └── glossary.md
```

The sidebar nav is configured in `astro.config.mjs` — order pages there, slugs map to file paths.

## Local development

```bash
npm install        # one time
npm run dev        # http://localhost:4321
```

Edit any `.md` file under `src/content/docs/`; the dev server hot-reloads.

## Build for production

```bash
npm run build      # writes static site to ./dist/
npm run preview    # local preview of the built site
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import into Vercel as a new project (auto-detects Astro).
3. Vercel deploys on every push to `main`.
4. In Vercel project settings → Domains, add `docs.meetgeo.ai`.
5. Update DNS at your registrar:
   - Add CNAME `docs` → `cname.vercel-dns.com.`
6. Vercel auto-provisions HTTPS.

## Adding a new page

1. Create `src/content/docs/<category>/<slug>.md`.
2. Add frontmatter:
   ```markdown
   ---
   title: Page title
   description: One-sentence description for SEO + AI citation.
   ---
   ```
3. Add the page to the sidebar in `astro.config.mjs` under the appropriate category's `items` array.
4. (Optional) Add an entry to `public/llms.txt` so the page surfaces in MeetGEO's own llms.txt for the docs site.
5. Commit + push. Vercel deploys automatically.

## Customizing the look

- Brand colors: `src/styles/custom.css`
- Logo: drop SVG at `public/logo.svg` (already referenced in `astro.config.mjs`)
- Sidebar order, social links, edit-on-GitHub link: `astro.config.mjs`

## Eat the dog food

Once this site is live at `docs.meetgeo.ai`:

1. Add it as a tracked site in MeetGEO's own dashboard.
2. Watch the AI Visibility Score for the docs site weekly.
3. Publish a `/about/our-own-ai-visibility-score` page that shows the trend (live testimonial).
4. Apply MeetGEO's own monitoring + recommendations to improve the docs site's GEO over time.

This is the strongest sales asset MeetGEO has — proof, not pitch.
