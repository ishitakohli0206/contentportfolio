# Ishita Kohli — Portfolio

A premium, editorial-style personal portfolio for Ishita Kohli, Content Writer & SEO Content Writer.

Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

## Content is data-driven

Every fact on this site — name, experience, metrics, skills, work links — lives in one file:

```
lib/data.ts
```

To update anything (a new job, a new published article, a changed metric), edit that file only. No need to touch any component.

To add a new work sample, add an entry to the `work` array in `lib/data.ts`:

```ts
{
  id: "unique-id",
  title: "Article Title",
  publication: "Publication Name",
  url: "https://example.com/the-real-article-url",
  description: "One or two sentences describing the piece.",
  category: "SEO & Blog Writing", // or "Product & Web Content"
  skills: ["Skill One", "Skill Two"],
}
```

## Getting started locally

Requires Node.js 18.18 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for production

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. Once deployed, you'll get a URL like `your-project.vercel.app`. You can attach a custom domain from the Vercel dashboard under **Settings → Domains**.

Alternatively, with the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Fonts

Fonts (Fraunces + Work Sans) are self-hosted via the `@fontsource-variable` packages — no external network request to Google Fonts happens at build or runtime, which makes builds slightly faster and avoids any dependency on Google Fonts' availability.

## Updating the profile photo

Replace `public/images/ishita-kohli.jpg` with a new image of the same or similar aspect ratio (3:4 portrait works best), keeping the same filename — or update the `photo` path in `lib/data.ts` if you rename it.

## Project structure

```
app/
  layout.tsx      — root layout, fonts, SEO metadata
  page.tsx        — composes all sections
  globals.css     — base styles, design tokens
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Experience.tsx
  Work.tsx
  Metrics.tsx
  Skills.tsx      — also renders Services
  Contact.tsx
  Footer.tsx
lib/
  data.ts         — single source of truth for all content
public/
  images/         — profile photo
  favicon.svg
```
