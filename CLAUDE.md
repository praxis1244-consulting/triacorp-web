# TRIACORP

Real estate development & management website for TRIACORP Planificación & Gestión. React + TypeScript, Tailwind CSS v4, Framer Motion, Three.js.

## Design Context

### Users
Investors, developers, and real estate stakeholders in Latin America evaluating TRIACORP as a development partner. They need proof of track record, team capability, and portfolio scope — not marketing fluff.

### Brand Personality
**Preciso, estratégico, confiable.** Professional real estate management — the team that structures and delivers. Architecture-forward aesthetic with restrained sophistication.

### Aesthetic Direction
- **Reference**: High-end architecture firms, editorial real estate presentations
- **Anti-reference**: Generic SaaS pages, overly decorative portfolios, flashy animations
- **Visual tone**: Restrained, professional, warm. The palette is cool-warm (teal/sage) but the structure is precise
- **Theme**: Light + dark mode, multiple surface treatments (editorial, material, minimal)

### Design Tokens
- **Serif**: Playfair Display (headings only)
- **Sans**: Inter weight 300-400 (body, UI)
- **Brand teal**: `#2A6B65` — used sparingly for emphasis, not decoration
- **Brand dark**: `#1E5650` — hover states
- **Brand light**: `#4A8A84` — lighter variant
- **Sage**: `#7DA397` — secondary accent
- **Charcoal**: `#1A1A1A` — primary text
- **Warm white**: `#F8F9F7` — background
- **Warm gray**: `#EDF0EC` — secondary surfaces
- **Border**: `#CDD5CF` — section dividers
- **Dark mode**: `#101212` bg, `#181C1B` surface, `#282E2C` border

### Design Principles
1. **Proof over promise** — Show numbers, real projects, and team credentials. Every section answers "why should I trust you?"
2. **Hierarchy through scale, not color** — Use typographic scale and weight. Reserve brand teal for 1-2 key elements per section.
3. **Blueprint precision** — Geometric SVG motifs reference architectural drawings. Asymmetric grids with intentional negative space.
4. **Architectural warmth** — Despite precision, the palette stays warm-cool. This is a firm that builds homes, not tech.
5. **Quiet confidence** — Animations are subtle (fade + translate). Copy is direct, never salesy. Let the 34 projects speak.

### Component Conventions
- Sections separated by `border-t border-border dark:border-dark-border`
- Section padding: `py-16 md:py-24`
- Section labels: `text-sm uppercase tracking-widest text-charcoal/70`
- Heading scale: `clamp()` fluid typography, serif, tight tracking
- Body text: `text-base sm:text-lg leading-relaxed` at 70-80% opacity
- CTAs: uppercase, wide letter-spacing (`tracking-[0.22em]`), underline or border style
- Animations: Framer Motion `whileInView`, `once: true`, duration 0.4-0.7s, no spring/bounce

## Invariants
| Rule | Files |
|------|-------|
| Contact form Zod schema shared client↔server | `shared/types.ts` · `client/src/components/ContactMixed.tsx` · `server/routers.ts` |
| Brand colors defined once in CSS @theme | `client/src/index.css` (lines 5-24) — all components reference via Tailwind tokens |
| Path aliases `@/*` → `client/src/`, `@shared/*` → `shared/` | `tsconfig.json` · `vite.config.ts` |
| Dark mode via `.dark` class on `<html>` + localStorage `theme` key | `client/index.html` · `client/src/hooks/useTheme.ts` · `client/src/index.css` |

## Gotchas
- Supabase/DB not yet integrated — `submitContact` sends via Resend email only
- Vite dev proxies `/api` → `localhost:3000` — backend must be running for tRPC calls
- `ScrollImage` (Three.js) runs one `requestAnimationFrame` loop per instance
- All content is Spanish (`lang="es"`)
- Project images reference `triacorp.estalisto.cl` WordPress URLs — need image proxy for Three.js textures
