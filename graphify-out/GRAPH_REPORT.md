# Graph Report - Portfolio  (2026-07-06)

## Corpus Check
- 48 files · ~16,492 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 253 nodes · 387 edges · 16 communities (15 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `17871087`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Design System + Deployment|Design System + Deployment]]
- [[_COMMUNITY_Projects + Experience UI|Projects + Experience UI]]
- [[_COMMUNITY_Hero, About, Contact|Hero, About, Contact]]
- [[_COMMUNITY_Navbar + Redux Store|Navbar + Redux Store]]
- [[_COMMUNITY_App Entry + Composition|App Entry + Composition]]
- [[_COMMUNITY_Accent + Type Definitions|Accent + Type Definitions]]
- [[_COMMUNITY_Particle Background|Particle Background]]
- [[_COMMUNITY_Scroll + Nav Behavior|Scroll + Nav Behavior]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]

## God Nodes (most connected - your core abstractions)
1. `formatText()` - 21 edges
2. `compilerOptions` - 21 edges
3. `compilerOptions` - 20 edges
4. `sectionNumber()` - 19 edges
5. `compilerOptions` - 19 edges
6. `Portfolio Website` - 12 edges
7. `GeneralData` - 11 edges
8. `ProfileData` - 10 edges
9. `scripts` - 9 edges
10. `RootState` - 6 edges

## Surprising Connections (you probably didn't know these)
- `ProjectCard()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Projects/Projects.tsx → src/utils/formatText.tsx
- `Projects()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/pages/Projects/Projects.tsx → src/data/sectionOrder.ts
- `Projects()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Projects/Projects.tsx → src/utils/formatText.tsx
- `Skills()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/pages/Skills/Skills.tsx → src/data/sectionOrder.ts
- `Skills()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Skills/Skills.tsx → src/utils/formatText.tsx

## Import Cycles
- None detected.

## Communities (16 total, 1 thin omitted)

### Community 0 - "Design System + Deployment"
Cohesion: 0.13
Nodes (11): ParticleWave(), THEME_COLORS, useDynamicFavicon(), AppContent(), AppDispatch, RootState, store, initialState (+3 more)

### Community 2 - "Hero, About, Contact"
Cohesion: 0.13
Nodes (21): About(), BeyondTheCode(), Button(), ButtonProps, ClosingCTA(), SectionId, sectionNumber(), Education() (+13 more)

### Community 3 - "Navbar + Redux Store"
Cohesion: 0.10
Nodes (19): Skills(), AboutSidebar, AboutStat, Certification, ClosingCta, ClosingCtaChannel, CurrentlyBuildingItem, Headliner (+11 more)

### Community 5 - "App Entry + Composition"
Cohesion: 0.11
Nodes (19): devDependencies, baseline-browser-mapping, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, gh-pages, globals (+11 more)

### Community 6 - "Accent + Type Definitions"
Cohesion: 0.07
Nodes (28): dependencies, framer-motion, lucide-react, react, react-dom, react-redux, redux, @reduxjs/toolkit (+20 more)

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
Cohesion: 0.16
Nodes (15): InlineAction(), InlineActionProps, Modal(), ModalProps, ProjectCard(), ProjectCardProps, ProjectModal(), ProjectModalProps (+7 more)

### Community 14 - "Community 14"
Cohesion: 0.13
Nodes (12): SECTION_ORDER, MORE_IDS, { nav: NAV_ITEMS }, NAVIGATE_IDS, SECTION_LABELS, ICONS, MOBILE_NAV_ITEMS, { nav: NAV_ITEMS } (+4 more)

## Knowledge Gaps
- **153 isolated node(s):** `ModalProps`, `ProjectModalProps`, `ButtonProps`, `InlineActionProps`, `TagProps` (+148 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `App Entry + Composition` to `Accent + Type Definitions`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Why does `formatText()` connect `Hero, About, Contact` to `Navbar + Redux Store`, `Community 13`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `ModalProps`, `ProjectModalProps`, `ButtonProps` to the rest of the system?**
  _153 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Design System + Deployment` be split into smaller, more focused modules?**
  _Cohesion score 0.13438735177865613 - nodes in this community are weakly interconnected._
- **Should `Hero, About, Contact` be split into smaller, more focused modules?**
  _Cohesion score 0.13445378151260504 - nodes in this community are weakly interconnected._
- **Should `Navbar + Redux Store` be split into smaller, more focused modules?**
  _Cohesion score 0.10476190476190476 - nodes in this community are weakly interconnected._
- **Should `App Entry + Composition` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._