# REA Clone

Pixel-perfect clone of [rea.co](https://rea.co/) built with Next.js 16 (App Router, TypeScript strict, Tailwind v4) and shadcn/ui patterns.

## Stack

- **Framework:** Next.js 16 + React 19 + TypeScript (strict)
- **Styling:** Tailwind CSS v4 with REA brand tokens (oklch-aware)
- **Fonts:** Inter (body) + Poppins (headings), via `next/font/google`
- **Images:** `next/image` with `unoptimized` flag for downloaded assets

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build (37 static routes)
npm run lint      # ESLint
npm run typecheck # TypeScript
npm run check     # lint + typecheck + build
```

## Project structure

```
src/
  app/                          # 35 route pages (/, /about, /appfolio, ...)
  components/sites/rea-co/
    root-00000000/              # Homepage section components
    shared/                     # Reusable: SiteLayout, SubPageHero, FinalCta, icons
  types/rea-co.ts               # Shared TypeScript interfaces
public/sites/rea-co/
  root-00000000/images/         # Homepage images (skyline, founders, logos)
  shared/                       # Shared images (logo, team avatars, media logos)
docs/research/rea-co/           # Spec files, behaviors, page topology
  root-00000000/components/      # Per-component spec files
```

## Routes (35)

Homepage + 34 sub-pages covering services, software platforms, industries, locations, and team content. All routes prerender as static HTML.

## Design tokens

Defined in `src/app/globals.css`:

- `--color-navy: #07213a` (primary dark)
- `--color-teal: #20949d` (CTA / accent)
- `--color-teal-light: #51cec8` (decorative)
- `--color-sand: #f7f6f2` (section backgrounds)
- `--color-slate: #435e6b` (body text)
- `--color-border-line: #dbe0e7`

## Source attribution

Content and brand assets cloned from [rea.co](https://rea.co/) for development reference. All trademarks remain with their respective owners.