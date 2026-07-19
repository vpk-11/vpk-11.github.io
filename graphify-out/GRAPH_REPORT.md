# Graph Report - Portfolio  (2026-07-19)

## Corpus Check
- 55 files · ~18,631 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 275 nodes · 444 edges · 17 communities (16 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c3049c82`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Design System + Deployment|Design System + Deployment]]
- [[_COMMUNITY_Projects + Experience UI|Projects + Experience UI]]
- [[_COMMUNITY_Hero, About, Contact|Hero, About, Contact]]
- [[_COMMUNITY_Community 3|Community 3]]
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
6. `Portfolio Website` - 13 edges
7. `GeneralData` - 11 edges
8. `ProfileData` - 10 edges
9. `scripts` - 9 edges
10. `RootState` - 6 edges

## Surprising Connections (you probably didn't know these)
- `ExpCard()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Experience/Experience.tsx → src/utils/formatText.tsx
- `ProjectCard()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Projects/Projects.tsx → src/utils/formatText.tsx
- `Projects()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/pages/Projects/Projects.tsx → src/data/sectionOrder.ts
- `Projects()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Projects/Projects.tsx → src/utils/formatText.tsx
- `Experience()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Experience/Experience.tsx → src/utils/formatText.tsx

## Import Cycles
- None detected.

## Communities (17 total, 1 thin omitted)

### Community 0 - "Design System + Deployment"
Cohesion: 0.11
Nodes (17): ParticleWave(), SECTION_ORDER, THEME_COLORS, useDynamicFavicon(), ICONS, MOBILE_NAV_ITEMS, { nav: NAV_ITEMS }, AppContent() (+9 more)

### Community 2 - "Hero, About, Contact"
Cohesion: 0.14
Nodes (22): About(), BeyondTheCode(), Button(), ButtonProps, ClosingCTA(), SectionId, sectionNumber(), Education() (+14 more)

### Community 3 - "Community 3"
Cohesion: 0.12
Nodes (16): AboutSidebar, AboutStat, ClosingCta, ClosingCtaChannel, CurrentlyBuildingItem, Headliner, HeadlinerMetric, HeroHeading (+8 more)

### Community 4 - "Community 4"
Cohesion: 0.18
Nodes (13): Card(), CardMeta(), CardMetaItem, CardMetaProps, CardProps, ExpCard(), Experience(), useWindowHeight() (+5 more)

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
Cohesion: 0.14
Nodes (13): Accent System, Changelog, Deployment, Features, Local Development, No-JS / No-WebGL Fallback, Portfolio Website, Prerequisites (+5 more)

### Community 11 - "Community 11"
Cohesion: 0.09
Nodes (21): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, moduleResolution, noEmit (+13 more)

### Community 13 - "Community 13"
Cohesion: 0.14
Nodes (16): InlineAction(), InlineActionProps, Modal(), ModalProps, ProjectCard(), ProjectCardProps, ProjectModal(), ProjectModalProps (+8 more)

### Community 14 - "Community 14"
Cohesion: 0.17
Nodes (7): MarqueeProps, StatusDot(), StatusDotProps, GeneralData, RIPPLE_DIRECTION, VpkMark(), VpkMarkProps

## Knowledge Gaps
- **156 isolated node(s):** `ProjectModalProps`, `Features`, `Stack`, `Prerequisites`, `Local Development` (+151 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `App Entry + Composition` to `Accent + Type Definitions`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `formatText()` connect `Hero, About, Contact` to `Community 4`, `Community 13`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `sectionNumber()` connect `Hero, About, Contact` to `Community 4`, `Community 13`, `Community 14`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `ProjectModalProps`, `Features`, `Stack` to the rest of the system?**
  _156 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Design System + Deployment` be split into smaller, more focused modules?**
  _Cohesion score 0.10804597701149425 - nodes in this community are weakly interconnected._
- **Should `Hero, About, Contact` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._