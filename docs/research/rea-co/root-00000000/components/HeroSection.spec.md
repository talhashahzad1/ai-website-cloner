# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/rea-co/root-00000000/HeroSection.tsx`
- **Screenshot:** `docs/design-references/rea-co/root-00000000/clone-glass-card-hero.png`
- **Interaction model:** static + scroll-time (one-time animations on mount)

## DOM Structure
```
<section relative bg-navy>
  <Image fill object-cover (skyline-dusk.webp) />
  <div gradient overlay (rgba(7,33,58,0.94) → rgba(7,33,58,0.45)) />
  <div bottom fade gradient />
  <div max-w-7xl grid>
    <div left text column>
      <h1> Outsourced Real Estate Accounting </h1>
      <svg teal swash underline />
      <h2 teal> You Handle the Management... </h2>
      <p> description </p>
      <Link to="#get-started"> Schedule a Call </Link>
      <p software names row />
    </div>
    <div right glass card (lg+ only)>
      <div header (Month-End Close + check icon) />
      <ul checklist 5 items with animated checkmarks />
      <div close complete chip with animation />
    </div>
  </div>
</section>
```

## Computed Styles (exact)

### Section container
- background: `#07213a`
- overflow: hidden
- padding-top: 64px (sm:80px, lg:96px)
- padding-bottom: 96px
- padding-x: 20px (sm:32px)

### Background image
- src: `/sites/rea-co/root-00000000/images/skyline-dusk.webp`
- object-fit: cover
- object-position: center 35%

### Gradient overlay
- linear-gradient(100deg, rgba(7,33,58,0.94) 0%, rgba(7,33,58,0.82) 42%, rgba(7,33,58,0.45) 100%)
- absolute inset-0

### Bottom fade
- linear-gradient(to bottom, transparent, #07213a)
- 112px tall, absolute bottom-0

### H1 (main heading)
- font-family: Poppins
- font-size: clamp(2.5rem, 5.2vw, 3.75rem)
- font-weight: 700
- line-height: 1.05
- letter-spacing: -0.03em
- color: white
- text-wrap: balance

### Teal swash SVG
- 10px tall
- width: min(340px, 56%)
- color: `#51cec8`
- stroke-width: 3.5

### H2 (teal sub-heading)
- font-family: Poppins
- font-size: 1.3rem (sm:1.5rem)
- font-weight: 600
- color: `#51cec8`
- line-height: 1.375

### Body paragraph
- font-size: 17px
- line-height: 1.625 (relaxed)
- color: rgba(255,255,255,0.85)
- max-width: 36rem

### Schedule a Call CTA
- background: `#20949d`
- color: white
- font-size: 15.2px
- font-weight: 600
- padding: 16px 35.2px
- border-radius: 9999px
- box-shadow: 0 2px 4px rgba(4,21,42,0.35), 0 12px 26px -10px rgba(32,148,157,0.55)
- hover: background `#1a7a82`
- transition: 150ms

### Software names row
- font-size: 0.95rem
- font-weight: 700
- letter-spacing: 0.025em
- color: rgba(255,255,255,0.6)
- margin-top: 48px

### Glass card (right column, desktop only)
- background: rgba(255,255,255,0.08)
- border: 1px solid rgba(255,255,255,0.2)
- border-radius: 24px
- padding: 28px
- box-shadow: 0 40px 80px -30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)
- hidden below lg

### Card header (Month-End Close)
- eyebrow: font-size 12px, font-weight 700, uppercase, letter-spacing 0.1em, color rgba(255,255,255,0.55)
- title: font-family Poppins, font-size 14px, font-weight 600, color white

### Check icon
- 16 × 12 viewBox 18×14
- stroke: white
- stroke-width: 2.6

### Checklist items
- font-size: 0.92rem (14.7px)
- font-weight: 600
- color: rgba(255,255,255,0.9)
- border-bottom: 1px solid rgba(255,255,255,0.1)
- padding: 12px 0

### Check circle background
- 24px × 24px
- border-radius: 9999px
- background: rgba(32,148,157,0.25)

### Close complete chip
- background: rgba(255,255,255,0.1)
- border-radius: 12px
- padding: 12px 16px
- font-size: 0.85rem (13.6px)
- font-weight: 700
- color: white
- trailing text: 0.8rem, font-weight 600, color `#51cec8`

## States & Behaviors

### Checkmark pop animation
- keyframe: `check-pop` (defined in globals.css)
  - 0% { opacity: 0; transform: scale(0.3); }
  - 70% { opacity: 1; transform: scale(1.12); }
  - 100% { opacity: 1; transform: scale(1); }
- duration: 0.45s
- easing: cubic-bezier(0.16,1,0.3,1)
- delay per item: 0.5s + index × 0.28s
- animation-fill-mode: both

### Close complete chip rise animation
- keyframe: `chip-rise`
  - 0% { opacity: 0; transform: translateY(8px); }
  - 100% { opacity: 1; transform: translateY(0); }
- duration: 0.5s
- easing: cubic-bezier(0.16,1,0.3,1)
- delay: 2.1s
- animation-fill-mode: both

### Hover states
- CTA: background `#20949d` → `#1a7a82`, transition 150ms

## Per-State Content

### Software names (hero bottom row)
"AppFolio · Yardi · Buildium · Rent Manager · Entrata · RealPage · QuickBooks · MRI"

### Checklist items (5)
1. Bank & Credit Card Reconciliations
2. Accounts Payable & Receivable
3. Accruals & Prepayments
4. Management Fees & Owner Draws
5. Financial Review & Reporting

## Assets
- Background: `public/sites/rea-co/root-00000000/images/skyline-dusk.webp`
- No foreground logos in hero glass card

## Text Content (verbatim)
H1: "Outsourced Real Estate Accounting"
H2: "You Handle the Management. Leave the Accounting to Us."
P: "We help property managers & investors improve profit margins with scalable outsourced accounting: bookkeeping, tax, and lease compliance, inside the software you already use. Real estate accounting outsourcing done properly means outsourced property accounting that runs in your system, not a monthly export."

## Responsive Behavior
- **Desktop (lg+ ≥1024px):** two-column grid `1.05fr / minmax(0, 440px)`, glass card visible right
- **Tablet (768-1023px):** single column, glass card hidden (`hidden lg:block`), text larger
- **Mobile (<768px):** single column, glass card hidden, smaller heading scale via clamp
- **Breakpoint:** 1024px (Tailwind lg) for glass card visibility