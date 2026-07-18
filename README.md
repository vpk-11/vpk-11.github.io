# Portfolio Website
<!-- version: v6.1.0 -->
![Version](https://img.shields.io/badge/version-v6.1.0-blue)

Personal portfolio for Kaushik Parthasarathy. Built with React 19, TypeScript, Three.js, Redux Toolkit, and SCSS. Features an animated Three.js particle wave background and full dark/light mode support.

Live at: [vpk-11.github.io/portfolio](https://vpk-11.github.io/portfolio)

## Features

- **Three.js Particle Wave** - Animated WebGL background that adapts to the active theme, guarded so unsupported devices still render the full site (see [No-JS / No-WebGL Fallback](#no-js--no-webgl-fallback))
- **Dark/Light Mode** - Auto-detects system preference, manual toggle persists in Redux; two-tier accent system swaps temperature across themes (see [Accent System](#accent-system))
- **Fully Responsive** - Mobile swipe gestures, hamburger menu, adaptive layouts at 768px and 1024px
- **Content via JSON** - All portfolio data lives in `src/data/`; no rebuild needed for content changes
- **TypeScript strict mode** - No `any`, interfaces throughout
- **WCAG 2.1 AA** - Full accessibility pass across nav, modal, tabs, and contrast
- **No-JS / no-WebGL fallback** - Site renders fully without WebGL support, and serves real static content to non-JS clients (bots, curl, disabled JS) via a `<noscript>` block

## Stack

| Layer | Tech |
|---|---|
| UI | React 19 + TypeScript |
| Build | Vite |
| State | Redux Toolkit (theme slice) |
| Styles | SCSS modules (`@use` not `@import`) |
| Background | Three.js (WebGL particle wave) |
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
      Navbar/, Footer/, ThemeToggle/, Background/ (ParticleWave.tsx), VpkMark/
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

`ui/` primitives are reusable across pages with page-scoped BEM modifier classes; `layout/` singletons are hardwired to specific data/behavior (Redux theme subscription, nav tree, Three.js canvas) and never instantiated twice; `pages/` is one folder per section. Full component-by-component detail lives in `.claude/CLAUDE.md`.

## Updating Content

All portfolio data lives in `src/data/`. Edit JSON, push to main, GitHub Actions deploys automatically.

| File | Controls |
|---|---|
| `profile.json` | Name, bio, location, availability, principles, social links, target roles, about stats/sidebar |
| `general.json` | Nav tree, section headings, resume meta, closing CTA copy |
| `experiences.json` | Work experience entries |
| `education.json` | Degrees and coursework |
| `projects.json` | Projects with categories, links, tech tags — `shortDescription` must be ≤ 150 chars per line (raw string incl. `**` markers) |
| `skills.json` | Skill categories and items |
| `certifications.json` | Certifications with issuer and date |
| `extracurriculars.json` | Beyond the Code entries |

## Accent System

Two-tier global accent system, dark stays warm and light inverts to cool so toggling reads as a real color shift:

| Tier | Light | Dark | Used for |
|---|---|---|---|
| Primary | `#2A4A73` (ink blue) | `#C89B5C` (brass) | Interactive elements: buttons, links, nav active state |
| Secondary | `#7A5F1F` (old gold) | `#5C8891` (steel-teal) | Rare highlight requiring contrast: live-status indicators only |

## Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `< 1024px`
- Desktop: `> 1024px`

## No-JS / No-WebGL Fallback

- **No-WebGL devices**: `isWebGLAvailable()` guards `ParticleWave`'s Three.js init. If unsupported, Three.js is skipped entirely, the rest of the site still renders and hydrates normally.
- **No-JS clients** (bots, curl, disabled JS): `index.html`'s `<noscript>` block contains real static markup (name, title, bio, location, contact links), present in the raw HTTP response regardless of JS execution.

## Deployment

Push to `main`. The `deploy.yml` workflow builds and pushes `dist/` to the `gh-pages` branch automatically. The `version-bump.yml` workflow handles semantic versioning: major on PR merge (via GitHub's `pull_request: closed` event, not a local merge), minor on direct code push, patch on data-only push.

## Typography

- **Space Grotesk** - Hero headings and name
- **JetBrains Mono** - Skill tags, tech tags, monospace labels
- **System sans-serif** - Body text

---
## Changelog
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