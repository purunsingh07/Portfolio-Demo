# Puru Singh — Portfolio

A 3D animated portfolio built with Next.js (App Router), Three.js, GSAP (ScrollTrigger), and Tailwind CSS v4.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. The first build needs internet access once, to fetch the Google Fonts used: Space Grotesk, Inter, JetBrains Mono.

## Deploy

Easiest path is Vercel:

```bash
npm i -g vercel
vercel
```

Or `npm run build && npm run start` on any Node host.

## Things to fill in before you share this

1. **LinkedIn / GitHub links** — `src/components/Contact.tsx` has two `href="#"` placeholders for LinkedIn and GitHub. Swap in your real profile URLs.
2. **Live demo links** — `src/components/Projects.tsx` has a `demo: "#"` field on each of the three projects (CareerNext, Imposter, Cogno Solutions). Point these at your deployed URLs.
3. **Résumé PDF (optional)** — if you'd like a "Download résumé" button, drop a PDF in `/public` and link to it from `Hero.tsx` or `Nav.tsx`.

## Structure

- `src/components/Avatar3D.tsx` — the signature 3D piece: a wireframe icosahedron "core" with an inner pulsing shape, three orbit rings, and floating skill nodes, built in raw Three.js. Reacts to cursor movement and scroll position (GSAP ScrollTrigger).
- `src/components/Reveal.tsx` — reusable scroll-triggered fade/slide wrapper used throughout the page.
- `src/components/Hero.tsx`, `Marquee.tsx`, `About.tsx`, `Experience.tsx`, `Projects.tsx`, `Achievements.tsx`, `Contact.tsx` — page sections, in order.

## Design system

- Colors: ink `#120c2a` (background), lime `#cbff4d`, coral `#ff5d7a`, cyan `#45e8d1`, violet `#8b6bff` — defined in `src/app/globals.css`.
- Type: Space Grotesk (display), Inter (body), JetBrains Mono (labels/stats).
