# Changelog

All notable changes to this project are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed
- FAQ rewritten from accordion to flat list (matches original rea.co — all 5 Q&As always visible)
- Services section: image moved to left (`order-last lg:order-first`), stat card positioned outside image (`-right-6 -bottom-6`), 2-column service list grid
- Industries section: 4-column card grid (was 2-col), `backdrop-blur-sm`, `border-white/20`, hover `border-teal/60`
- TeamRoles section: rewritten as vertical timeline (icon + vertical line + role items) instead of cards
- People section: avatars `rounded-2xl` (was full), 112×112 at sm+ (was 80×80), italic blockquote bios, h4 role titles
- About section: h2 "About REA" + h3 "Built Exclusively for Real Estate" structure; added "230+ property accounting professionals" callout
- All section headings restructured: h2 = section eyebrow (large), h3 = sub-heading in teal
- `.measure` utility added to globals.css (max-width: 65ch) for body text

### Added
- Blog page updated with real REA content: "Resources" hero with "208 articles" badge, featured latest post card, 11 grid posts
- 12 blog hero images downloaded to `public/sites/rea-co/shared/blog/`
- Side-by-side QA report at `docs/design-references/rea-co/root-00000000/QA-SIDE-BY-SIDE.html`
- Playwright QA screenshots for desktop + mobile (clone + original)

## [0.2.0] - 2026-09-07

### Changed
- Heading hierarchy fixed: section titles now use `<h2>` instead of `<h3>` for proper a11y/SEO
- FAQ section heading de-duplicated (eyebrow "Frequently Asked Questions" + title "Real Estate Accounting, Answered")
- Calendly embed script guarded against double-load
- Footer invalid `h-13` Tailwind class replaced with `h-12`
- SubPageHero `<img>` replaced with `<Image>` for Next.js optimization
- Industries section broken links fixed (`/hoas/` → `/hoa/`, `/syndicators/` → `/real-estate-syndication-accounting/`)
- Hero, About, Software, Services, Technology, TeamRoles, Industries, People, Testimonial, FAQ content updated to match https://rea.co/ verbatim
- YARDI card now shows "Voyager & Breeze" subtitle matching original

## [0.1.0] - 2026-09-07

### Added
- Initial clone of rea.co homepage with 34 sub-page routes
- Header with desktop dropdowns + mobile menu (sticky, backdrop blur)
- Hero with skyline background, gradient overlay, glass card with check-pop animations
- StatsBar, About, Software, Services, Technology, TeamRoles, Industries, People, Testimonial, FAQ, CTA, Footer
- 40 images downloaded to `public/sites/rea-co/`
- REA brand colors, fonts (Inter + Poppins), dot-grid utility, glass-card keyframes