# Accredian Enterprise — Partial Clone

A partial clone of the [Accredian Enterprise](https://enterprise.accredian.com/) landing page, built for the Full Stack Developer Intern assignment. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Live Links

- **Live deployment:** _add your Vercel URL here after deploying_
- **GitHub repo:** _add your repo URL here after pushing_

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Next.js Route Handler as a mock API (`/api/lead`)

## Setup Instructions

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

### Deploying to Vercel

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: Next.js (auto-detected). No environment variables are required.
4. Deploy. The `/api/lead` route works out of the box as a serverless function.

> Note: this project intentionally ships **without** `next/font/google` wired up, because the sandbox this was built in has no outbound access to `fonts.googleapis.com`. The font stacks in `app/globals.css` fall back to close system serif/sans/mono equivalents. On Vercel (which has open network access) you can restore `next/font/google` for Fraunces / Inter / JetBrains Mono — see the comment in `app/globals.css` for exactly where.

## Approach

- **Scope**: since the reference site renders its content client-side and couldn't be scraped section-by-section, I rebuilt the *structure* an enterprise B2B upskilling landing page needs (hero, trust signals, program offerings, differentiators, process, impact metrics, testimonials, lead capture, footer) rather than pixel-matching the live site, per the assignment's note to prioritize "clarity and structure over pixel-perfect design" and to not copy templates directly.
- **Design direction**: deep navy (`#0B1130`) + warm gold (`#C89B3C`) + off-white paper (`#F7F5EE`) palette, paired with a serif display face (Fraunces) for headlines and a neutral sans (Inter) for body copy, plus a monospace face (JetBrains Mono) used for labels/eyebrows to give the page a "reporting/ledger" feel appropriate for an enterprise L&D buyer. The signature element is the **Program Ledger** stat strip in the hero, styled like a data report row.
- **Components**: every section (`Navbar`, `Hero`, `TrustedBy`, `Programs`, `WhyUs`, `Process`, `Impact`, `Testimonials`, `LeadForm`, `Footer`) is a standalone, reusable component in `/components`, driven by typed content in `lib/content.ts` so copy changes don't require touching markup.
- **Responsiveness**: mobile-first Tailwind classes throughout; the nav collapses to a hamburger menu below `md`, and all grids stack to a single column on small screens.
- **Bonus — lead capture form**: `LeadForm.tsx` posts to a real Next.js Route Handler at `app/api/lead/route.ts`, which validates the payload (required fields + email format) and stores submissions in memory, returning a proper success/error response the form reacts to. In production this would write to a database or CRM instead of an in-memory array.

## AI Usage

Claude (this conversation) was used to:
- Scaffold the Next.js project and set up Tailwind v4 theme tokens.
- Generate the component structure, copy, and layout for every section listed above.
- Write the mock `/api/lead` route handler with validation.
- Run `next build` and `eslint` inside a sandboxed environment to catch and fix errors (including the Google Fonts network restriction noted above) before delivery.

What I'd modify/verify manually before treating this as a real submission:
- Swap the placeholder copy, stats, and testimonials for real (or explicitly-labeled fictional) content — the current testimonials and partner names are invented placeholders and are labeled as such in the footer.
- Re-enable `next/font/google` (or self-host the font files) once deployed somewhere with network access, per the note above.
- Wire the lead form to a real backend (database or CRM) instead of the in-memory array.
- Add real logos for the "Trusted by" strip (currently text wordmarks) once actual client permission/assets are available.

## Improvements With More Time

- Add scroll-triggered reveal animations for each section (respecting `prefers-reduced-motion`, which is already handled globally).
- Add an actual multi-page structure (e.g. individual program detail pages) instead of a single landing page.
- Add automated tests (component rendering + API route validation) with Vitest/Playwright.
- Persist leads to a real database (Postgres via Prisma, or a CRM webhook) instead of the in-memory array, which resets on every deploy/restart.
- Add basic analytics (page view + form conversion tracking).

## Project Structure

```
app/
  api/lead/route.ts   # mock lead-capture API (POST/GET)
  layout.tsx
  page.tsx
  globals.css
components/
  Navbar.tsx
  Hero.tsx
  TrustedBy.tsx
  Programs.tsx
  WhyUs.tsx
  Process.tsx
  Impact.tsx
  Testimonials.tsx
  LeadForm.tsx
  Footer.tsx
lib/
  content.ts          # typed copy/data for all sections
```
