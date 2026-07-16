# Eh Zhong Yu — Portfolio

Personal portfolio built with **Vite + React** for easy maintenance and Vercel deploy.

## Pages

- **Home** — Brand hero, snapshot, selected projects, CTAs
- **About** — Bio, contact details, resume, education/experience, personal highlights
- **Work** — Project gallery with accessible detail dialogs
- **Journey** — Milestones, volunteering, certificate, hobbies (speedcubing, Wing Chun, gaming)
- **Contact** — EmailJS form + FAQ

## Local development

```bash
npm install
cp .env.example .env
# Fill in EmailJS keys in .env
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

```bash
npm run build    # output in dist/
npm run preview  # preview production build
```

## EmailJS (`.env`)

Vite exposes client env vars with the `VITE_` prefix. Copy `.env.example` to `.env`:

```bash
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

Never commit real `.env` values (already gitignored). If keys are missing, the contact form shows a clear error.

Ensure your EmailJS template fields match: `{{name}}`, `{{email}}`, `{{message}}`.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com) — Framework Preset: **Vite**.
3. Add the three `VITE_EMAILJS_*` variables under **Project Settings → Environment Variables**.
4. Deploy. SPA routing is handled by `vercel.json` rewrites.

## Updating content

| File | What it controls |
|------|------------------|
| `src/data/site.ts` | Name, role, contact, footer, FAQs, socials |
| `src/data/education.ts` | Education & experience timeline |
| `src/data/projects.ts` | Work gallery |
| `src/data/highlights.ts` | About “What I bring” highlights |
| `src/data/toolbox.ts` | About toolbox tiers + ways of working |
| `src/data/journey.ts` | Journey milestones & hobbies |
| `public/assets/` | Photos, project images, resume PDF |

## Stack

- Vite + React + TypeScript
- React Router
- CSS design system (`src/styles/global.css`)
- `@emailjs/browser` + SweetAlert2
- Accessibility: skip link, labels, focus styles, `prefers-reduced-motion`, modal Escape/focus restore
