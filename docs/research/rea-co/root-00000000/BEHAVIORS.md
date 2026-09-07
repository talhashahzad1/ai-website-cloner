# REA.co Homepage — Behaviors

## Header
- **Position:** sticky, z-index: 40
- **Background:** rgba(255,255,255,0.95) with backdrop-filter: blur(8px)
- **Border:** bottom 0.67px solid #dbe0e7
- **Height:** 72.67px
- **Behavior:** Remains fixed at top while scrolling, glass-morphism effect

## CTA Buttons
- **Primary CTA:** bg: #20949d, color: white, border-radius: 999px, font-weight: 600
- **Hover:** transform scale + box-shadow transition
- **Transition:** transform 0.15s ease-out, box-shadow 0.15s ease-out, background-color 0.15s ease-out

## FAQ Accordion
- **Interaction model:** click-driven
- **Each item:** clickable heading that expands/collapses answer
- **Behavior:** Click question → answer toggles open/closed

## Software Cards
- **Interaction model:** static grid of link cards
- **Each card:** links to software-specific page
- **Hover state:** likely subtle scale/shadow change

## Hero Section
- **Background:** Navy (#07213a) with skyline image overlay
- **Gradient overlay:** linear-gradient(100deg, rgba(7,33,58,0.94) 0%, rgba(7,33,58,0.82) 42%, rgba(7,33,58,0.45) 100%)
- **Stats bar:** dot-grid pattern background, 4 stats in a row

## Industries Section
- **Background:** Navy (#07213a) with commercial aerial image
- **Gradient overlay:** linear-gradient(rgba(0,0,0,0), rgb(7,33,58))
- **Link cards:** 8 industry verticals as clickable cards

## Dot Grid Pattern
- **Used on:** Stats bar, Technology section, CTA section
- **CSS:** radial-gradient(circle, rgba(255,255,255,0.09) 1px, rgba(0,0,0,0) 1.4px)

## Responsive Behavior
- **Desktop (1440px):** 2-column grids, full layout
- **Tablet (768px):** Maintains 2-column but reduces gap
- **Mobile (390px):** Stacks to single column
