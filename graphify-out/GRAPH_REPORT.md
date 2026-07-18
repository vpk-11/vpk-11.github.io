# Graph Report - Portfolio  (2026-07-18)

## Corpus Check
- 57 files · ~17,935 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 279 nodes · 446 edges · 17 communities (15 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ef69e14c`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Design System + Deployment|Design System + Deployment]]
- [[_COMMUNITY_Projects + Experience UI|Projects + Experience UI]]
- [[_COMMUNITY_Hero, About, Contact|Hero, About, Contact]]
- [[_COMMUNITY_Navbar + Redux Store|Navbar + Redux Store]]
- [[_COMMUNITY_Community 4|Community 4]]
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
3. `sectionNumber()` - 20 edges
4. `compilerOptions` - 20 edges
5. `compilerOptions` - 19 edges
6. `Portfolio Website` - 12 edges
7. `GeneralData` - 11 edges
8. `scripts` - 10 edges
9. `ProfileData` - 10 edges
10. `RootState` - 6 edges

## Surprising Connections (you probably didn't know these)
- `ExpCard()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Experience/Experience.tsx → src/utils/formatText.tsx
- `SectionHeader()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/components/ui/SectionHeader/SectionHeader.tsx → src/data/sectionOrder.ts
- `Experience()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/pages/Experience/Experience.tsx → src/data/sectionOrder.ts
- `Projects()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/pages/Projects/Projects.tsx → src/data/sectionOrder.ts
- `Skills()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/pages/Skills/Skills.tsx → src/data/sectionOrder.ts

## Import Cycles
- None detected.

## Communities (17 total, 2 thin omitted)

### Community 0 - "Design System + Deployment"
Cohesion: 0.11
Nodes (16): ParticleWave(), SECTION_ORDER, THEME_COLORS, useDynamicFavicon(), ICONS, MOBILE_NAV_ITEMS, { nav: NAV_ITEMS }, AppContent() (+8 more)

### Community 2 - "Hero, About, Contact"
Cohesion: 0.17
Nodes (17): About(), BeyondTheCode(), Button(), ButtonProps, ClosingCTA(), SectionId, sectionNumber(), Education() (+9 more)

### Community 3 - "Navbar + Redux Store"
Cohesion: 0.07
Nodes (27): MarqueeProps, StatusDot(), StatusDotProps, AboutSidebar, AboutStat, BeyondTheCode, ClosingCta, ClosingCtaChannel (+19 more)

### Community 4 - "Community 4"
Cohesion: 0.15
Nodes (16): Card(), CardMeta(), CardMetaItem, CardMetaProps, CardProps, ExpCard(), Experience(), useWindowHeight() (+8 more)

### Community 5 - "App Entry + Composition"
Cohesion: 0.11
Nodes (19): devDependencies, baseline-browser-mapping, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, gh-pages, globals (+11 more)

### Community 6 - "Accent + Type Definitions"
Cohesion: 0.07
Nodes (29): dependencies, framer-motion, lucide-react, react, react-dom, react-redux, redux, @reduxjs/toolkit (+21 more)

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

## Knowledge Gaps
- **159 isolated node(s):** `name`, `private`, `version`, `type`, `packageManager` (+154 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `App Entry + Composition` to `Accent + Type Definitions`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `formatText()` connect `Hero, About, Contact` to `Community 4`, `Community 13`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `sectionNumber()` connect `Hero, About, Contact` to `Navbar + Redux Store`, `Community 4`, `Community 13`?**
  _High betweenness centrality (0.011) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _159 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Design System + Deployment` be split into smaller, more focused modules?**
  _Cohesion score 0.10591133004926108 - nodes in this community are weakly interconnected._
- **Should `Navbar + Redux Store` be split into smaller, more focused modules?**
  _Cohesion score 0.06685633001422475 - nodes in this community are weakly interconnected._
- **Should `App Entry + Composition` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._