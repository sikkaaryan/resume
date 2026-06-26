# Aryan Sikka — Portfolio

Personal portfolio site. Next.js 14 (App Router) + Tailwind CSS + TypeScript. Dark, developer-style theme. Deploy-ready for Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new, import the repo.
3. Framework preset: **Next.js** (auto-detected). Build command, output dir, install command — all defaults.
4. Click **Deploy**.

That's it. Pushes to `main` redeploy automatically.

## Editing content

All content lives in [`lib/data.ts`](./lib/data.ts) — profile, experience, projects, skills, education, certifications. Edit one file, the whole site updates.

Resume PDF lives at [`public/Aryan-Sikka-Resume.pdf`](./public/Aryan-Sikka-Resume.pdf). Replace that file to update what the "Resume" button downloads. The updated markdown resume is in [`RESUME.md`](./RESUME.md) at the project root.

## Project layout

```
app/
  layout.tsx       # root layout + metadata
  page.tsx         # the single page (composes sections)
  globals.css      # Tailwind + theme
components/
  Nav.tsx
  Hero.tsx
  Experience.tsx
  Projects.tsx
  Skills.tsx
  Contact.tsx
  SectionHeading.tsx
lib/
  data.ts          # ← edit me to change site content
public/
  Aryan-Sikka-Resume.pdf
RESUME.md          # updated resume in markdown
```
