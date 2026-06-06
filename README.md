# Portfolio Website
<!-- version: v4.0.2 -->
![Version](https://img.shields.io/badge/version-v4.0.2-blue)

Personal portfolio for Kaushik Parthasarathy. Built with React 19, TypeScript, Three.js, Redux Toolkit, and SCSS. Features a Google-inspired section accent color system, animated Three.js particle wave background, and full dark/light mode support.

Live at: [vpk-11.github.io/portfolio](https://vpk-11.github.io/portfolio)

## Features

- **Three.js Particle Wave** - Animated WebGL background that adapts to the active theme
- **Dynamic Accent Colors** - Each section carries its own Google-palette accent color; navbar and UI elements update on scroll
- **Dark/Light Mode** - Auto-detects system preference, manual toggle persists in Redux
- **Fully Responsive** - Mobile swipe gestures, hamburger menu, adaptive layouts at 768px and 1024px
- **Content via JSON** - All portfolio data lives in `src/data/`; no rebuild needed for content changes
- **TypeScript strict mode** - No `any`, interfaces throughout

## Stack

| Layer | Tech |
|---|---|
| UI | React 19 + TypeScript |
| Build | Vite |
| State | Redux Toolkit (theme + accent slices) |
| Styles | SCSS modules (`@use` not `@import`) |
| Background | Three.js (WebGL particle wave) |
| Icons | Lucide React |
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
```

## Project Structure

```
src/
  components/
    About/          About.tsx, About.scss
    Background/     ParticleWave.tsx, ParticleWave.scss
    Contact/        Contact.tsx, Contact.scss  (footer merged in)
    Education/      Education.tsx, Education.scss
    Experience/     Experience.tsx, Experience.scss
    Hero/           Hero.tsx, Hero.scss
    Navbar/         Navbar.tsx, Navbar.scss
    Projects/       Projects.tsx, Projects.scss
    Skills/         Skills.tsx, Skills.scss
    ThemeToggle/    ThemeToggle.tsx, ThemeToggle.scss
  data/
    profile.json
    experiences.json
    education.json
    projects.json
    skills.json
    certifications.json
  store/
    store.ts
    accentSlice.ts
    themeSlice.ts
  styles/
    _variables.scss
    _mixins.scss
    global.scss
  types/
    index.ts
  utils/
    formatText.tsx
  App.tsx
  main.tsx
```

## Updating Content

All portfolio data lives in `src/data/`. Edit JSON, push to main, GitHub Actions deploys automatically.

| File | Controls |
|---|---|
| `profile.json` | Name, bio, location, availability, principles, social links, target roles |
| `experiences.json` | Work experience entries |
| `education.json` | Degrees and coursework |
| `projects.json` | Projects with categories, links, tech tags |
| `skills.json` | Skill categories and items |
| `certifications.json` | Certifications with issuer and date |

## Section Accent Colors

| Section | Light | Dark |
|---|---|---|
| Hero | `#EA4335` red | `#FF6B6B` |
| About | `#FF6D00` orange | `#FF9800` |
| Education | `#A142F4` purple | `#C77DFF` |
| Experience | `#4285F4` blue | `#4D9FFF` |
| Skills | `#FBBC04` yellow | `#FFD93D` |
| Projects | `#34A853` green | `#6BCF7F` |
| Contact | `#4285F4` blue | `#4D9FFF` |

## Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `< 1024px`
- Desktop: `> 1024px`

## Deployment

Push to `main`. The `deploy.yml` workflow builds and pushes `dist/` to the `gh-pages` branch automatically. The `version-bump.yml` workflow handles semantic versioning: major on PR merge, minor on direct code push, patch on data-only push.

## Typography

- **Space Grotesk** - Hero headings and name
- **JetBrains Mono** - Skill tags, tech tags, monospace labels
- **System sans-serif** - Body text

---
## Changelog
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