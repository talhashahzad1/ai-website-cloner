# TechnologySection Specification

## Overview
- **Target file:** `src/components/sites/rea-co/root-00000000/TechnologySection.tsx`
- **Screenshot:** `docs/design-references/rea-co/root-00000000/clone-software-section.png`
- **Interaction model:** static (no user interaction)

## DOM Structure
```
<section id="technology" bg-sand>
  <div max-w-6xl py-20 sm:py-24>
    <div section header>
      <p teal eyebrow> Our Technology </p>
      <h2 navy> Our Technology Stack </h2>
      <p slate description> </p>
    </div>
    <div tech diagram grid>
      <div left (what feeds it)>
        <p caption> What feeds it </p>
        7 tool rows (icon + name + description)
      </div>
      <div center (arrow + AI engine)>
        horizontal divider line
        right-arrow SVG
        teal "Proprietary / AI Engine" badge
        horizontal divider line
      </div>
      <div right (4 feature cards in 2x2 grid)>
        Card: Data / Automation / Analysis / Efficiency
      </div>
    </div>
    <p bottom text> </p>
    <div how-it-works>
      <h3> How It Works </h3>
      <p subtitle> </p>
      <div grid 4 columns>
        Step × 4: number badge + title + description
      </div>
    </div>
  </div>
</section>
```

## Computed Styles (exact)

### Section container
- background: `#f7f6f2` (sand)
- padding: 80px 20px (sm:96px 32px)

### Section header
- eyebrow: font-size 12px, uppercase, letter-spacing 0.1em, color `#20949d`
- title: font-family Poppins, font-size 17.28px (1.08rem), font-weight 700, color `#07213a`
- description: max-w-2xl, font-size 16px, line-height 1.625, color `#435e6b`
- margin-bottom: 64px

### Tech diagram
- 3-column grid: `1fr / auto / 1fr` at lg
- mobile: stacks vertically
- margin-bottom: 64px
- gap: 32px

### What feeds it caption
- font-size 12px, font-weight 600, uppercase, letter-spacing 0.05em, color `#9fb3c4`

### Tool row
- display flex, gap 12px, padding 16px
- border: 1px solid `#dbe0e7`
- background: white
- border-radius: 8px
- icon: 32×32, background `#f7f6f2`, font Poppins 12px bold navy (first letter)
- name: font-size 14px, font-weight 500, color navy
- description: font-size 12px, color slate-light

### Center column (AI Engine)
- flex column, items-center, padding-top 48px
- horizontal line: 64px wide, 1px tall, color teal (only at lg)
- arrow SVG: 24×24, color teal
- AI Engine badge: background `#20949d`, padding 24px, border-radius 12px, color white
  - eyebrow: "Proprietary" 12px font-weight 600 uppercase white/80
  - title: "AI Engine" Poppins 18px bold

### Feature cards (right)
- 2×2 grid, gap 16px
- each: padding 24px, border 1px `#dbe0e7`, background white, border-radius 12px
- title: Poppins 14px bold, color navy
- description: font-size 12px, line-height 1.625, color slate

### Bottom text
- max-width 768px (max-w-3xl)
- margin-bottom: 80px
- font-size 14px, line-height 1.625, color slate

### How It Works
- title: Poppins 17.28px bold, color navy, margin-bottom 32px
- subtitle: max-w-2xl, font-size 16px, line-height 1.625, color slate, margin-bottom 40px
- 4-column grid (mobile: 2-col at sm, 1-col default)
- gap: 32px

### How It Works step
- display flex, gap 16px
- number badge: 40×40, border-radius 9999px, background `#20949d`, color white, Poppins 14px bold
- title: Poppins 14px font-weight 600, color navy
- description: font-size 14px, line-height 1.625, color slate

## States & Behaviors

### Hover states
- Tool row: no hover change specified
- Feature cards: no hover change specified
- Number badges: no hover change specified

## Per-State Content

### Tools (7)
- Gong (Call Recordings)
- ClickUp (Task & Project Mgmt)
- Slack (Communications)
- Google (Video · Email · Calendar)
- Perimeter 81 (Network Security)
- PMS (Accounting Software)
- Tableau (Data Analysis)

### AI Engine feature cards (4)
- Data: "Data ingested across every platform, unified into one view of your books."
- Automation: "The repeatable work stops needing a person."
- Analysis: "Variances surface in the month they happen."
- Efficiency: "Which is why outsourcing costs less than hiring."

### How It Works steps (4)
1. Discovery — "We analyze your current accounting setup, software, and reporting needs."
2. Onboarding — "Seamless integration with your property management software and team."
3. Execution — "Daily bookkeeping, monthly reconciliations, and financial reporting."
4. Growth — "Scale your portfolio confidently with REA as your accounting backbone."

## Assets
- None (pure typography + SVG icons inline)

## Text Content (verbatim)
- Eyebrow: "Our Technology"
- Title: "Our Technology Stack"
- Description: "Enterprise-grade tools unified by a proprietary AI layer to deliver faster, more accurate outsourced bookkeeping & tax services."
- Bottom text: "We invested in the tooling most accounting firms skip. Every call, task, timesheet and dashboard feeds the same engine."
- How It Works title: "How It Works"
- How It Works subtitle: "Seamless onboarding and transparent processes designed to get your outsourced real estate bookkeeping up and running fast."

## Responsive Behavior
- **Desktop (lg+ ≥1024px):** 3-column diagram with arrow connectors; 4-column How It Works grid
- **Tablet (sm 640-1023px):** stacks to single column for diagram; 2-column How It Works
- **Mobile (<640px):** single column everywhere; arrows hide (lg:block)
- **Breakpoints:** 640px (sm), 1024px (lg)