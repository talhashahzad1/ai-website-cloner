# REA.co Homepage — Page Topology

## Route
- **Source:** https://rea.co/
- **Destination:** `src/app/page.tsx` (root route `/`)
- **Site Key:** `rea-co`
- **Page Key:** `root-00000000`

## Layout
- **Max-width container:** 1152px (`max-w-6xl`), centered
- **Section padding:** `px-5 sm:px-8` (20px / 32px horizontal), `py-20 sm:py-24` (80px / 96px vertical)
- **Sticky header:** z-40, backdrop-filter blur(8px), bg white/95, border-bottom 0.67px solid #dbe0e7

## Sections (Top to Bottom)

| # | Name | ID | Background | Height (px) | Layout |
|---|------|----|-----------|-------------|--------|
| 1 | Hero | — | `#07213a` (navy) | 706 | Full-width navy bg, skyline image overlay, gradient overlay |
| 2 | Stats Bar | — | `#07213a` (navy) | 183 | Dot grid pattern, 4-column stats |
| 3 | About | `about` | transparent | 656 | 2-column grid (text + image) |
| 4 | Software | `software` | `#f7f6f2` (sand) | 847 | Logo grid cards |
| 5 | Services | `services` | transparent | 701 | 2-column grid (text + image) |
| 6 | Technology | `technology` | `#f7f6f2` (sand) | 1408 | Complex tech stack diagram + "How It Works" steps |
| 7 | Team Roles | `team` | transparent | 544 | 2-column grid (text + role cards) |
| 8 | Industries | `industries` | `#07213a` (navy) | 523 | Full-width navy bg, aerial image, link cards |
| 9 | People | `people` | transparent | 1284 | Team member cards (4 people) + Media logos |
| 10 | Testimonial | — | `#f7f6f2` (sand) | 467 | Quote card with media logos |
| 11 | FAQ | `qa` | transparent | 1471 | Accordion list |
| 12 | CTA / Calendly | `get-started` | `#07213a` (navy) | 1179 | Dot grid, Calendly embed |
| 13 | Footer | — | transparent | — | 5-column footer |

## Interaction Model
- **Static page** — no scroll-driven animations, no Framer Motion, no AOS
- **Sticky header** — position: sticky, z-index: 40, backdrop-filter: blur(8px)
- **Hover states** — CTA buttons have transform/shadow transitions
- **FAQ accordion** — click to expand/collapse
- **No smooth scroll library** (no Lenis, no Locomotive)
