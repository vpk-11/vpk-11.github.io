# Portfolio Website
<!-- version: v6.4.1 -->
![Version](https://img.shields.io/badge/version-v6.4.1-blue)

Personal portfolio for Kaushik Parthasarathy. Built with React 19, TypeScript, Redux Toolkit, and SCSS. Features a diagonal gold-to-green ambient gradient background (pure CSS, no canvas) and full dark/light mode support.

Live at: [vpk-11.github.io/portfolio](https://vpk-11.github.io/portfolio)

## Features

- **Dark/Light Mode** - Auto-detects system preference, manual toggle persists in Redux; two-tier accent system swaps per theme (see [Accent System](#accent-system))
- **Fully Responsive** - Mobile swipe gestures, hamburger menu, adaptive layouts at 768px and 1024px
- **Content via JSON** - All portfolio data lives in `src/data/`; no rebuild needed for content changes
- **TypeScript strict mode** - No `any`, interfaces throughout
- **WCAG 2.1 AA** - Full accessibility pass across nav, modal, tabs, and contrast
- **No-JS fallback** - Serves real static content to non-JS clients (bots, curl, disabled JS) via a `<noscript>` block

## Stack

| Layer | Tech |
|---|---|
| UI | React 19 + TypeScript |
| Build | Vite |
| State | Redux Toolkit (theme slice) |
| Styles | SCSS modules (`@use` not `@import`) |
| Icons | Lucide React |
| Testing | Vitest + Testing Library |
| Package Manager | pnpm |
| Deploy | GitHub Pages via GitHub Actions |

## Prerequisites

- Node.js v18+
- pnpm

## Local Development

```bash
pnpm install
pnpm dev
```

```bash
pnpm build      # production build → dist/
pnpm preview    # preview production build locally
pnpm test       # run test suite once
pnpm lint       # eslint
```

## Project Structure

```
src/
  components/
    ui/             -- reusable primitives, instantiated N times with different props
      Tag/, Card/, Panel/, Button/, InlineAction/, Tab/, SectionHeader/, Modal/, Marquee/, Stat/, StatusDot/
    layout/         -- persistent singletons, never composed differently per page
      Navbar/, Footer/, ThemeToggle/
  pages/            -- one per section, composes ui/ primitives
    Hero/, About/, Education/, Experience/, Projects/, Skills/, Resume/, BeyondTheCode/, ClosingCTA/
  data/
    profile.json, general.json, experiences.json, education.json,
    projects.json, skills.json, certifications.json, extracurriculars.json
    sectionOrder.ts (canonical section order)
  store/
    store.ts, themeSlice.ts
  hooks/
    useViewport.ts
  styles/
    _variables.scss, _mixins.scss, global.scss
  types/
    index.ts
  utils/
    formatText.tsx
  App.tsx
  main.tsx
```

`ui/` primitives are reusable across pages with page-scoped BEM modifier classes; `layout/` singletons are hardwired to specific data/behavior (Redux theme subscription, nav tree) and never instantiated twice; `pages/` is one folder per section. Full component-by-component detail lives in `.claude/CLAUDE.md`.

## Updating Content

All portfolio data lives in `src/data/`. Edit JSON, push to main, GitHub Actions deploys automatically.

| File | Controls |
|---|---|
| `profile.json` | Name, bio, location, availability, social links, target roles, about stats/sidebar |
| `general.json` | Nav tree, section headings, resume meta, closing CTA copy |
| `experiences.json` | Work experience entries |
| `education.json` | Degrees and coursework |
| `projects.json` | Projects with links, tech tags — `shortDescription` shown on the card (falls back to a 250-char-truncated `description` if absent) |
| `skills.json` | Skill categories and items |
| `certifications.json` | Certifications with issuer and date |
| `extracurriculars.json` | Beyond the Code entries |

## Accent System

Two-tier global accent system:

| Tier | Light | Dark | Used for |
|---|---|---|---|
| Primary | `#1B502D` (forest green) | `#235735` (forest green, darker) | Interactive elements: buttons, links, nav active-state underline |
| Secondary | `#7A5F1F` (old gold) | `#A8823A` (antique bronze) | Rare highlight requiring contrast: live-status indicators only |

`$accent-primary-dark` sits below the AA-4.5 text-contrast floor by deliberate choice (background/border/button color only) — a lightened tint (`$accent-primary-dark-text`) is used wherever dark-mode text needs to read as the accent instead.

## Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `< 1024px`
- Desktop: `> 1024px`

## No-JS Fallback

- **No-JS clients** (bots, curl, disabled JS): `index.html`'s `<noscript>` block contains real static markup (name, title, bio, location, contact links), present in the raw HTTP response regardless of JS execution.

## Deployment

Push to `main`. The `deploy.yml` workflow builds and pushes `dist/` to the `gh-pages` branch automatically. The `version-bump.yml` workflow handles semantic versioning: major on PR merge (via GitHub's `pull_request: closed` event, not a local merge), minor on direct code push, patch on data-only push.

## Typography

- **Public Sans** - Sitewide, headings and body — one family, hierarchy from weight/size only
- **JetBrains Mono** - Skill tags, tech tags, monospace labels

---
## Changelog
- **v6.4.1** (2026-08-19) — patch bump
- **v6.4.0** (2026-08-19) — minor bump
- **v6.3.0** (2026-08-18) — minor bump
- **v6.2.1** (2026-07-24) — patch bump
- **v6.2.0** (2026-07-19) — minor bump
- **v6.1.0** (2026-07-18) — minor bump
- **v6.0.0** (2026-07-18) — major bump
- **v5.2.0** (2026-07-18) — minor bump
- **v5.1.1** (2026-07-10) — patch bump
- **v5.1.0** (2026-07-09) — minor bump
- **v5.0.0** (2026-07-08) — major bump
- **v4.5.0** (2026-06-27) — minor bump
- **v4.4.0** (2026-06-27) — minor bump
- **v4.3.0** (2026-06-27) — minor bump
- **v4.2.0** (2026-06-23) — minor bump
- **v4.1.3** (2026-06-21) — patch bump
- **v4.1.2** (2026-06-10) — patch bump
- **v4.1.1** (2026-06-10) — patch bump
- **v4.1.0** (2026-06-08) — minor bump
- **v4.0.4** (2026-06-08) — patch bump
- **v4.0.3** (2026-06-07) — patch bump
- **v4.0.2** (2026-06-06) — patch bump
- **v4.0.1** (2026-06-06) — patch bump
- **v4.0.0** (2026-05-19) — major bump
- **v3.9.0** (2026-05-14) — minor bump
- **v3.8.1** (2026-04-17) — patch bump
- **v3.8.0** (2026-04-17) — minor bump
- **v3.7.0** (2026-04-08) — minor bump
- **v3.6.0** (2026-04-04) — minor bump
- **v3.5.0** (2026-04-02) — minor bump
- **v3.4.0** (2026-04-02) — minor bump
- **v3.3.2** (2026-03-22) — patch bump
- **v3.3.1** (2026-03-18) — patch bump
- **v3.3.0** (2026-03-17) — minor bump
- **v3.2.2** (2026-03-16) — patch bump
- **v3.2.1** (2026-03-13) — patch bump
- **v3.2.0** (2026-03-13) — minor bump
- **v3.0.0** (2026-03-13) — major bump (Test bump)
- **v3.0.0** (2026-03-13) — major bump
- **v2.6.1** (2026-03-08) — patch bump
- **v2.6.0** (2026-03-08) — minor bump
- **v2.5** (2026-03-04) — minor bump via direct push
- **v2.4** (2026-03-04) — minor bump via direct push
- **v2.3** (2026-03-04) — minor bump via direct push
- **v2.2** (2026-03-04) — minor bump via direct push
- **v2.1** (2026-03-04) — minor bump via direct push
- **v2.0** (2026-03-04) — major bump via PR merge

---
**Built with ❤️**