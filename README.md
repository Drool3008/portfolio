# Dhawal Pawanarkar — Portfolio

Personal portfolio site. Next.js 16 (App Router) + React 19, Tailwind CSS v4, framer-motion.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000 (uses the next free port if 3000 is taken)
```

## Build

```bash
npm run build
npm start
```

## Editing content (where each tab lives)

Content is data-driven — edit these files, not the component markup:

| Tab / area        | File                       |
| ----------------- | -------------------------- |
| Name, role, tagline, socials, resume, education | `lib/site.ts` |
| Projects (title, blurb, stack, repo, demo, case study) | `lib/projects.tsx` |
| Experience timeline | `lib/experience.ts` |
| Achievements       | `lib/achievements.ts` |
| Skills (chip groups) | `components/Skills.tsx` |

- **Section order:** `app/page.tsx`
- **Nav links:** `components/TopBar.tsx`
- **Theme / colors:** the CSS variables in `app/globals.css`
- **Resume PDF:** `public/resume.pdf`

## Deploy

Connected to Vercel. Push to `main` → production deploy. Every branch / PR → its own preview URL.
