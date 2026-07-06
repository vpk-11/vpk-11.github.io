# Graph Report - Portfolio  (2026-07-06)

## Corpus Check
- 49 files · ~16,698 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 259 nodes · 400 edges · 16 communities (15 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f72d2beb`
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
- `ExpCard()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Experience/Experience.tsx → src/utils/formatText.tsx
- `Experience()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/pages/Experience/Experience.tsx → src/data/sectionOrder.ts
- `Experience()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Experience/Experience.tsx → src/utils/formatText.tsx
- `Skills()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/pages/Skills/Skills.tsx → src/data/sectionOrder.ts
- `Skills()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Skills/Skills.tsx → src/utils/formatText.tsx

## Import Cycles
- None detected.

## Communities (16 total, 1 thin omitted)

### Community 0 - "Design System + Deployment"
Cohesion: 0.11
Nodes (15): ParticleWave(), SECTION_ORDER, THEME_COLORS, useDynamicFavicon(), ICONS, MOBILE_NAV_ITEMS, { nav: NAV_ITEMS }, AppContent() (+7 more)

### Community 2 - "Hero, About, Contact"
Cohesion: 0.12
Nodes (24): About(), BeyondTheCode(), SectionId, sectionNumber(), Education(), InlineAction(), InlineActionProps, Modal() (+16 more)

### Community 3 - "Navbar + Redux Store"
Cohesion: 0.08
Nodes (27): Card(), CardMeta(), CardMetaItem, CardMetaProps, CardProps, Skills(), Tag(), TagProps (+19 more)

### Community 4 - "Community 4"
Cohesion: 0.48
Nodes (5): ExpCard(), Experience(), useWindowHeight(), useWindowWidth(), Experience

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

### Community 14 - "Community 14"
Cohesion: 0.13
Nodes (12): Button(), ButtonProps, ClosingCTA(), MORE_IDS, { nav: NAV_ITEMS }, NAVIGATE_IDS, SECTION_LABELS, GeneralData (+4 more)

## Knowledge Gaps
- **156 isolated node(s):** `CardProps`, `CardMetaItem`, `CardMetaProps`, `ModalProps`, `ProjectModalProps` (+151 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `App Entry + Composition` to `Accent + Type Definitions`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Why does `formatText()` connect `Hero, About, Contact` to `Navbar + Redux Store`, `Community 4`, `Community 14`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **What connects `CardProps`, `CardMetaItem`, `CardMetaProps` to the rest of the system?**
  _156 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Design System + Deployment` be split into smaller, more focused modules?**
  _Cohesion score 0.10837438423645321 - nodes in this community are weakly interconnected._
- **Should `Hero, About, Contact` be split into smaller, more focused modules?**
  _Cohesion score 0.11586452762923351 - nodes in this community are weakly interconnected._
- **Should `Navbar + Redux Store` be split into smaller, more focused modules?**
  _Cohesion score 0.08266129032258064 - nodes in this community are weakly interconnected._
- **Should `App Entry + Composition` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._