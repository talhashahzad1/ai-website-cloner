# Header Specification

## Overview
- **Target file:** `src/components/sites/rea-co/root-00000000/Header.tsx`
- **Screenshot:** `docs/design-references/rea-co/root-00000000/original-desktop-hero.png`
- **Interaction model:** sticky + click-driven (desktop dropdowns, mobile menu toggle)

## DOM Structure
```
<header sticky top-0 z-40>
  <div max-w-1280>
    <Link to="/"> <Image rea-logo /> </Link>
    <div hidden lg:flex>
      <nav aria-label="Primary">
        3 dropdown buttons (Software, Industries, Services)
        2 plain links (Meet REA, Blog)
        absolute dropdown panel (when open)
      </nav>
      <Link to="/thank-you/"> Schedule a Call (teal CTA) </Link>
    </div>
    <div lg:hidden>
      <Link to="/thank-you/"> Schedule a Call </Link>
      <button aria-label="Open menu"> <MenuIcon /> </button>
    </div>
  </div>
  <div mobile menu (lg:hidden)>
    <nav>
      3 expandable sections
      2 plain links
      "Let's Connect" + Schedule a Call CTA
    </nav>
  </div>
</header>
```

## Computed Styles (exact)

### Header container
- position: sticky
- top: 0
- z-index: 40
- border-bottom: 1px solid `#dbe0e7` (rgba(219, 224, 231, 1))
- background: `rgba(255, 255, 255, 0.95)` with `backdrop-filter: blur(8px)`
- padding: 12px 32px (desktop), 12px 20px (mobile)

### Logo
- Image src: `/sites/rea-co/shared/rea-logo.png`
- dimensions: 180 × 48 px
- on mobile: 11 (44px) tall; desktop: 12 (48px) tall

### Desktop nav links
- font-family: Poppins (var(--font-poppins))
- font-size: 0.9rem (14.4px)
- color: `#121c2b`
- padding: 8px 12px
- border-radius: 9999px
- hover: color `#20949d`, transition-colors

### Schedule a Call CTA (desktop)
- background: `#20949d`
- color: white
- font-size: 13.28px
- font-weight: 600
- padding: 9.92px 22.4px
- border-radius: 9999px
- hover: background `#1a7a82`

### Dropdown panel (desktop)
- absolute left-0 top-full
- z-50
- margin-top: 4px
- min-width: 220px
- border: 1px solid `#dbe0e7`
- background: white
- border-radius: 12px
- padding: 8px
- shadow-lg
- each item: 10px 16px padding, border-radius 8px, font-size 14px, color `#121c2b`, hover bg `#f7f6f2` + color `#20949d`

### Mobile hamburger button
- 44px × 44px
- border: 1px solid `#dbe0e7`
- border-radius: 9999px
- icon: 22 × 22 stroke

### Mobile menu panel
- border-top: 1px solid `#dbe0e7`
- background: white
- padding: 0 20px 32px (desktop 0 32px 32px)

## States & Behaviors

### Sticky header
- Always visible at top of viewport
- z-40 (above page content)
- Translucent background blurs content behind it

### Desktop dropdown open
- Trigger: click on dropdown button
- Effect: panel appears with all sub-items
- Trigger close: click outside (mousedown listener), click on item
- Chevron rotates 180° (transition-transform 150ms)

### Mobile menu open
- Trigger: click hamburger button
- Effect: white panel slides down below header
- Body scroll locked (`document.body.style.overflow = "hidden"`)
- Hamburger swaps to X icon
- Trigger close: click X, click any link, click on `<header>` boundaries only

### Hover states
- nav links: color `#121c2b` → `#20949d`
- CTA: background `#20949d` → `#1a7a82`
- dropdown items: bg `transparent` → `#f7f6f2`, color → `#20949d`
- mobile dropdown chevron: rotate 0° → 180°

## Per-State Content

### Software dropdown items
AppFolio, Yardi, Buildium, Rent Manager, Entrata, RealPage, QuickBooks, MRI, Propertyware

### Industries dropdown items
Property Management, Commercial Real Estate, Owner Operators, Developers, Construction, HOAs, Syndicators, Assisted Living

### Services dropdown items
Real Estate Accounting, Income Tax Services, Fractional CFO, Lease Compliance

### Plain links
Meet REA (/meet-rea/), Blog (/blog/)

## Assets
- Logo: `public/sites/rea-co/shared/rea-logo.png`

## Responsive Behavior
- **Desktop (lg+ ≥1024px):** full nav row visible, mobile elements hidden
- **Tablet/Mobile (<1024px):** desktop nav hidden, "Schedule a Call" + hamburger shown; full menu drops down when toggled
- **Breakpoint:** 1024px (Tailwind lg)