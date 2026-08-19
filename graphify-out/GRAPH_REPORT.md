# Graph Report - Portfolio  (2026-08-19)

## Corpus Check
- 52 files · ~17,579 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 267 nodes · 430 edges · 17 communities (16 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d2cbd69e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Design System + Deployment|Design System + Deployment]]
- [[_COMMUNITY_Projects + Experience UI|Projects + Experience UI]]
- [[_COMMUNITY_Hero, About, Contact|Hero, About, Contact]]
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
10. `Card()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `ExpCard()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Experience/Experience.tsx → src/utils/formatText.tsx
- `ProjectCard()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Projects/Projects.tsx → src/utils/formatText.tsx
- `Projects()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/pages/Projects/Projects.tsx → src/data/sectionOrder.ts
- `Projects()` --calls--> `formatText()`  [EXTRACTED]
  src/pages/Projects/Projects.tsx → src/utils/formatText.tsx
- `SectionHeader()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/components/ui/SectionHeader/SectionHeader.tsx → src/data/sectionOrder.ts

## Import Cycles
- None detected.

## Communities (17 total, 1 thin omitted)

### Community 0 - "Design System + Deployment"
Cohesion: 0.13
Nodes (13): SECTION_ORDER, THEME_COLORS, ICONS, MOBILE_NAV_ITEMS, { nav: NAV_ITEMS }, AppDispatch, RootState, store (+5 more)

### Community 2 - "Hero, About, Contact"
Cohesion: 0.14
Nodes (21): About(), BeyondTheCode(), Button(), ButtonProps, ClosingCTA(), SectionId, sectionNumber(), Education() (+13 more)

### Community 4 - "Community 4"
Cohesion: 0.08
Nodes (33): Card(), CardMeta(), CardMetaItem, CardMetaProps, CardProps, ExpCard(), Experience(), useWindowHeight() (+25 more)

### Community 5 - "App Entry + Composition"
Cohesion: 0.07
Nodes (27): devDependencies, baseline-browser-mapping, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, gh-pages, globals (+19 more)

### Community 6 - "Accent + Type Definitions"
Cohesion: 0.22
Nodes (9): dependencies, framer-motion, lucide-react, react, react-dom, react-redux, redux, @reduxjs/toolkit (+1 more)

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
Nodes (15): InlineAction(), InlineActionProps, Modal(), ModalProps, ProjectCard(), ProjectCardProps, ProjectModal(), ProjectModalProps (+7 more)

### Community 14 - "Community 14"
Cohesion: 0.17
Nodes (6): MarqueeProps, StatusDot(), StatusDotProps, RIPPLE_DIRECTION, VpkMark(), VpkMarkProps

### Community 17 - "Community 17"
Cohesion: 0.22
Nodes (9): scripts, build, deploy, dev, lint, predeploy, preview, test (+1 more)

## Knowledge Gaps
- **153 isolated node(s):** `ProjectModalProps`, `name`, `private`, `version`, `type` (+148 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `formatText()` connect `Hero, About, Contact` to `Community 4`, `Community 13`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `sectionNumber()` connect `Hero, About, Contact` to `Community 4`, `Community 13`, `Community 14`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `ProjectModalProps`, `name`, `private` to the rest of the system?**
  _153 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Design System + Deployment` be split into smaller, more focused modules?**
  _Cohesion score 0.13157894736842105 - nodes in this community are weakly interconnected._
- **Should `Hero, About, Contact` be split into smaller, more focused modules?**
  _Cohesion score 0.14453781512605043 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.08333333333333333 - nodes in this community are weakly interconnected._
- **Should `App Entry + Composition` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._