# FaqSection Specification

## Overview
- **Target file:** `src/components/sites/rea-co/root-00000000/FaqSection.tsx`
- **Screenshot:** `docs/design-references/rea-co/root-00000000/clone-desktop.png` (lower portion)
- **Interaction model:** click-driven (single-open accordion)

## DOM Structure
```
<section id="qa" px-5 sm:px-8>
  <div max-w-3xl py-20 sm:py-24>
    <div text-center header>
      <p teal eyebrow> Frequently Asked Questions </p>
      <h2 navy> Real Estate Accounting, Answered </h2>
    </div>
    <div accordion>
      <FaqAccordionItem × 5>
        <button toggle row>
          <span question />
          <ChevronDownIcon />
        </button>
        <div answer container with measured scrollHeight>
          <p answer />
        </div>
      </FaqAccordionItem>
    </div>
  </div>
</section>
```

## Computed Styles (exact)

### Section container
- padding-x: 20px (sm:32px)
- padding-y: 80px (sm:96px)
- max-width: 768px (max-w-3xl)
- scroll-mt-20 (for sticky-header offset)

### Header (eyebrow + title)
- text-align: center
- margin-bottom: 40px
- eyebrow: font-size 12px, uppercase, letter-spacing 0.1em, color `#20949d`
- title: font-family Poppins, font-size 24px (1.5rem), font-weight 600, color `#07213a`

### Accordion item row (button)
- display: flex, justify-between
- width: 100%
- padding: 20px 0
- text-align: left
- border-bottom: 1px solid `#dbe0e7`

### Question text
- font-family: Poppins
- font-size: 17px
- font-weight: 600
- color: `#07213a`

### Chevron icon
- 20 × 20
- color: `#20949d`
- transition: transform 300ms
- open state: rotate(180deg)

### Answer container
- overflow: hidden
- transition: max-height 300ms ease-in-out, all 300ms
- max-height: 0px (closed) → measured scrollHeight (open)

### Answer text
- padding-bottom: 20px
- font-family: Inter (sans)
- font-size: 17px
- line-height: 1.625
- color: `#435e6b`

## States & Behaviors

### Accordion item open
- Trigger: click on row button
- Effect: max-height animates from 0 to scrollHeight, chevron rotates 180°
- aria-expanded toggles
- Click again closes

### Single-open behavior
- Opening one item closes any other open item (only one expanded at a time)

### Hover states
- Question row: cursor pointer (button default)
- Chevron: color stays `#20949d` (no hover change)

## Per-State Content

### Questions (verbatim, 5)
1. "How can outsourcing my real estate bookkeeping improve my business's profit margins?"
2. "What specific real estate accounting services and tools do you use to manage my financial records?"
3. "Can you handle both residential and commercial real estate bookkeeping?"
4. "What kind of cost savings can I expect by outsourcing my bookkeeping?"
5. "Can you assist with regulatory compliance and audits for real estate businesses?"

### Answers (verbatim)
See `FaqSection.tsx` `faqItems` array for full content extracted from https://rea.co/ on inspection.

## Assets
- None (pure text + chevron icon from shared/icons.tsx)

## Text Content (verbatim)
Section heading: "Frequently Asked Questions" (eyebrow) + "Real Estate Accounting, Answered" (h2)

## Responsive Behavior
- **Desktop (≥640px):** 32px horizontal padding
- **Mobile (<640px):** 20px horizontal padding, full-width accordion
- Same vertical padding at all sizes (80px / 96px sm)
- Breakpoint: 640px (Tailwind sm)