# Graph Report - Portfolio  (2026-07-04)

## Corpus Check
- 42 files · ~14,362 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 224 nodes · 310 edges · 16 communities (15 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ee49b7ef`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Design System + Deployment|Design System + Deployment]]
- [[_COMMUNITY_Projects + Experience UI|Projects + Experience UI]]
- [[_COMMUNITY_Hero, About, Contact|Hero, About, Contact]]
- [[_COMMUNITY_Navbar + Redux Store|Navbar + Redux Store]]
- [[_COMMUNITY_Skills + Certifications|Skills + Certifications]]
- [[_COMMUNITY_App Entry + Composition|App Entry + Composition]]
- [[_COMMUNITY_Accent + Type Definitions|Accent + Type Definitions]]
- [[_COMMUNITY_Particle Background|Particle Background]]
- [[_COMMUNITY_Scroll + Nav Behavior|Scroll + Nav Behavior]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 13|Community 13]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 21 edges
2. `compilerOptions` - 20 edges
3. `compilerOptions` - 19 edges
4. `sectionNumber()` - 17 edges
5. `formatText()` - 16 edges
6. `Portfolio Website` - 12 edges
7. `ProfileData` - 11 edges
8. `scripts` - 9 edges
9. `RootState` - 6 edges
10. `ClosingCTA()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `BeyondTheCode()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/components/BeyondTheCode/BeyondTheCode.tsx → src/data/sectionOrder.ts
- `Education()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/components/Education/Education.tsx → src/data/sectionOrder.ts
- `Skills()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/components/Skills/Skills.tsx → src/data/sectionOrder.ts
- `ExpCard()` --calls--> `formatText()`  [EXTRACTED]
  src/components/Experience/Experience.tsx → src/utils/formatText.tsx
- `ProjectCard()` --calls--> `formatText()`  [EXTRACTED]
  src/components/Projects/Projects.tsx → src/utils/formatText.tsx

## Import Cycles
- None detected.

## Communities (16 total, 1 thin omitted)

### Community 0 - "Design System + Deployment"
Cohesion: 0.11
Nodes (12): ParticleWave(), Contact(), THEME_COLORS, useDynamicFavicon(), AppContent(), AppDispatch, RootState, store (+4 more)

### Community 2 - "Hero, About, Contact"
Cohesion: 0.17
Nodes (16): About(), BeyondTheCode(), ClosingCTA(), SECTION_ORDER, SectionId, sectionNumber(), Education(), ExpCard() (+8 more)

### Community 3 - "Navbar + Redux Store"
Cohesion: 0.09
Nodes (20): MINI_NAV, Skills(), AboutSidebar, AboutStat, BeyondTheCode, Certification, ClosingCta, CurrentlyBuildingItem (+12 more)

### Community 4 - "Skills + Certifications"
Cohesion: 0.11
Nodes (17): homepage, name, packageManager, pnpm, onlyBuiltDependencies, private, scripts, build (+9 more)

### Community 5 - "App Entry + Composition"
Cohesion: 0.11
Nodes (19): devDependencies, baseline-browser-mapping, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, gh-pages, globals (+11 more)

### Community 6 - "Accent + Type Definitions"
Cohesion: 0.20
Nodes (10): dependencies, lucide-react, react, react-dom, react-redux, redux, @reduxjs/toolkit, sass (+2 more)

### Community 7 - "Particle Background"
Cohesion: 0.08
Nodes (23): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution (+15 more)

### Community 8 - "Scroll + Nav Behavior"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection, moduleResolution (+13 more)

### Community 10 - "ESLint Config"
Cohesion: 0.15
Nodes (12): Accent Colors, Changelog, Deployment, Features, Local Development, Portfolio Website, Prerequisites, Project Structure (+4 more)

### Community 11 - "Community 11"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 13 - "Community 13"
Cohesion: 0.36
Nodes (8): ProjectCard(), ProjectCardProps, ProjectModal(), ProjectModalProps, Projects(), toAbsolute(), truncate(), Project

## Knowledge Gaps
- **139 isolated node(s):** `SectionHeading`, `HeroHeading`, `SectionHeadings`, `AboutStat`, `CurrentlyBuildingItem` (+134 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `App Entry + Composition` to `Skills + Certifications`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Accent + Type Definitions` to `Skills + Certifications`?**
  _High betweenness centrality (0.015) - this node is a cross-community bridge._
- **What connects `SectionHeading`, `HeroHeading`, `SectionHeadings` to the rest of the system?**
  _139 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Design System + Deployment` be split into smaller, more focused modules?**
  _Cohesion score 0.11375661375661375 - nodes in this community are weakly interconnected._
- **Should `Navbar + Redux Store` be split into smaller, more focused modules?**
  _Cohesion score 0.09057971014492754 - nodes in this community are weakly interconnected._
- **Should `Skills + Certifications` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `App Entry + Composition` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._