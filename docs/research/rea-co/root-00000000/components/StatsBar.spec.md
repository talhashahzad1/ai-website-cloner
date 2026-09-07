# StatsBar Specification

## Overview
- **Target file:** `src/components/sites/rea-co/root-00000000/StatsBar.tsx`
- **Screenshot:** `docs/design-references/rea-co/root-00000000/clone-stats-section.png`
- **Interaction model:** static

## DOM Structure
```
<section bg-navy dot-grid aria-label="REA by the numbers">
  <div max-w-1152 px-6>
    <p teal-light eyebrow> REA by the numbers </p>
    <div grid 2-col (lg:4-col)>
      4 stat blocks
    </div>
  </div>
</section>
```

## Computed Styles

### Section
- background: `#07213a`
- background-image: radial-gradient dot grid (rgba(255,255,255,0.09) 1px circle, 28px × 28px)
- padding: 64px 24px (lg:80px)

### Eyebrow
- font-size: 12px
- font-weight: 400
- text-transform: uppercase
- letter-spacing: 0.1em
- color: `#51cec8`
- text-align: center
- margin-bottom: 40px

### Grid
- grid-template-columns: repeat(2, minmax(0, 1fr)) at <lg
- grid-template-columns: repeat(4, minmax(0, 1fr)) at lg
- gap: 32px (lg:48px)

### Stat value
- font-family: Poppins
- font-size: 30px (lg:36px)
- font-weight: 700
- color: white

### Stat label
- font-size: 14px
- color: rgba(255,255,255,0.6)
- margin-top: 4px

## Content

### Stats (4)
- "230+" / "Property Accountants"
- "130,000+" / "Residential Units Managed"
- "30M+" / "Commercial Sq. Ft."
- "30%+" / "Avg. Cost Savings"

## Responsive Behavior
- **Desktop (lg+ ≥1024px):** 4 columns
- **Tablet/Mobile (<1024px):** 2 columns
- **Breakpoint:** 1024px (Tailwind lg)