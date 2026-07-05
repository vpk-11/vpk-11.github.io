# Graph Report - Portfolio  (2026-07-05)

## Corpus Check
- 42 files · ~15,852 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 235 nodes · 321 edges · 17 communities (16 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d9ae1c82`
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
- [[_COMMUNITY_Community 14|Community 14]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 21 edges
2. `compilerOptions` - 20 edges
3. `compilerOptions` - 19 edges
4. `sectionNumber()` - 17 edges
5. `formatText()` - 15 edges
6. `Portfolio Website` - 12 edges
7. `ProfileData` - 10 edges
8. `scripts` - 9 edges
9. `RootState` - 6 edges
10. `toAbsolute()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `ProjectCard()` --calls--> `formatText()`  [EXTRACTED]
  src/components/Projects/Projects.tsx → src/utils/formatText.tsx
- `Projects()` --calls--> `formatText()`  [EXTRACTED]
  src/components/Projects/Projects.tsx → src/utils/formatText.tsx
- `ExpCard()` --calls--> `formatText()`  [EXTRACTED]
  src/components/Experience/Experience.tsx → src/utils/formatText.tsx
- `Wrap()` --calls--> `formatText()`  [EXTRACTED]
  src/test/formatText.test.tsx → src/utils/formatText.tsx
- `BeyondTheCode()` --calls--> `sectionNumber()`  [EXTRACTED]
  src/components/BeyondTheCode/BeyondTheCode.tsx → src/data/sectionOrder.ts

## Import Cycles
- None detected.

## Communities (17 total, 1 thin omitted)

### Community 0 - "Design System + Deployment"
Cohesion: 0.11
Nodes (15): ParticleWave(), THEME_COLORS, useDynamicFavicon(), MOBILE_NAV_ITEMS, NAV_ITEMS, NavItem, SubMenuGroup, SubMenuItem (+7 more)

### Community 2 - "Hero, About, Contact"
Cohesion: 0.15
Nodes (18): About(), BeyondTheCode(), ClosingCTA(), SECTION_ORDER, SectionId, sectionNumber(), Education(), ExpCard() (+10 more)

### Community 3 - "Navbar + Redux Store"
Cohesion: 0.10
Nodes (19): Skills(), AboutSidebar, AboutStat, Certification, ClosingCta, ClosingCtaChannel, CurrentlyBuildingItem, Headliner (+11 more)

### Community 4 - "Skills + Certifications"
Cohesion: 0.22
Nodes (9): scripts, build, deploy, dev, lint, predeploy, preview, test (+1 more)

### Community 5 - "App Entry + Composition"
Cohesion: 0.11
Nodes (19): devDependencies, baseline-browser-mapping, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, gh-pages, globals (+11 more)

### Community 6 - "Accent + Type Definitions"
Cohesion: 0.10
Nodes (19): dependencies, framer-motion, lucide-react, react, react-dom, react-redux, redux, @reduxjs/toolkit (+11 more)

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
Cohesion: 0.33
Nodes (9): ProjectCard(), ProjectCardProps, ProjectModal(), ProjectModalProps, Projects(), stripMarkdown(), toAbsolute(), truncate() (+1 more)

### Community 14 - "Community 14"
Cohesion: 0.29
Nodes (5): MORE_IDS, NAVIGATE_IDS, SECTION_LABELS, VpkMark(), VpkMarkProps

## Knowledge Gaps
- **149 isolated node(s):** `SubMenuItem`, `SubMenuGroup`, `NavItem`, `NAV_ITEMS`, `MOBILE_NAV_ITEMS` (+144 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `App Entry + Composition` to `Accent + Type Definitions`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **Why does `scripts` connect `Skills + Certifications` to `Accent + Type Definitions`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `SubMenuItem`, `SubMenuGroup`, `NavItem` to the rest of the system?**
  _149 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Design System + Deployment` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `Hero, About, Contact` be split into smaller, more focused modules?**
  _Cohesion score 0.1455026455026455 - nodes in this community are weakly interconnected._
- **Should `Navbar + Redux Store` be split into smaller, more focused modules?**
  _Cohesion score 0.09782608695652174 - nodes in this community are weakly interconnected._
- **Should `App Entry + Composition` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._