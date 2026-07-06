# Graph Report - Portfolio  (2026-07-06)

## Corpus Check
- 50 files · ~16,802 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 262 nodes · 410 edges · 19 communities (18 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `57b03d0f`
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
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]

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
- `ProjectCard()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Projects/Projects.tsx → src/utils/formatText.tsx
- `Projects()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/pages/Projects/Projects.tsx → src/data/sectionOrder.ts

## Import Cycles
- None detected.

## Communities (19 total, 1 thin omitted)

### Community 0 - "Design System + Deployment"
Cohesion: 0.11
Nodes (15): ParticleWave(), SECTION_ORDER, THEME_COLORS, useDynamicFavicon(), ICONS, MOBILE_NAV_ITEMS, { nav: NAV_ITEMS }, AppContent() (+7 more)

### Community 2 - "Hero, About, Contact"
Cohesion: 0.19
Nodes (18): About(), BeyondTheCode(), ClosingCTA(), SectionId, sectionNumber(), Education(), Panel(), PanelProps (+10 more)

### Community 3 - "Navbar + Redux Store"
Cohesion: 0.10
Nodes (20): AboutSidebar, AboutStat, BeyondTheCode, Certification, ClosingCta, ClosingCtaChannel, CurrentlyBuildingItem, Education (+12 more)

### Community 4 - "Community 4"
Cohesion: 0.23
Nodes (10): Card(), CardMeta(), CardMetaItem, CardMetaProps, CardProps, ExpCard(), Experience(), useWindowHeight() (+2 more)

### Community 5 - "App Entry + Composition"
Cohesion: 0.07
Nodes (27): devDependencies, baseline-browser-mapping, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, gh-pages, globals (+19 more)

### Community 6 - "Accent + Type Definitions"
Cohesion: 0.18
Nodes (11): dependencies, framer-motion, lucide-react, react, react-dom, react-redux, redux, @reduxjs/toolkit (+3 more)

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
Cohesion: 0.19
Nodes (13): InlineAction(), InlineActionProps, Modal(), ModalProps, ProjectCard(), ProjectCardProps, ProjectModal(), ProjectModalProps (+5 more)

### Community 14 - "Community 14"
Cohesion: 0.25
Nodes (6): MORE_IDS, { nav: NAV_ITEMS }, NAVIGATE_IDS, SECTION_LABELS, VpkMark(), VpkMarkProps

### Community 17 - "Community 17"
Cohesion: 0.22
Nodes (9): scripts, build, deploy, dev, lint, predeploy, preview, test (+1 more)

### Community 18 - "Community 18"
Cohesion: 0.33
Nodes (3): Button(), ButtonProps, RIPPLE_DIRECTION

## Knowledge Gaps
- **157 isolated node(s):** `PanelProps`, `CardProps`, `CardMetaItem`, `CardMetaProps`, `ModalProps` (+152 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `formatText()` connect `Hero, About, Contact` to `Community 4`, `Community 13`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Accent + Type Definitions` to `App Entry + Composition`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `PanelProps`, `CardProps`, `CardMetaItem` to the rest of the system?**
  _157 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Design System + Deployment` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `Navbar + Redux Store` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `App Entry + Composition` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._
- **Should `Particle Background` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._