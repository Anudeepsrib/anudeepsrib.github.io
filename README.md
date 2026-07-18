# Anudeep Sri Bathina — Portfolio

[![Deploy](https://github.com/Anudeepsrib/anudeepsrib.github.io/actions/workflows/nextjs.yml/badge.svg)](https://github.com/Anudeepsrib/anudeepsrib.github.io/actions/workflows/nextjs.yml)
[![Live site](https://img.shields.io/badge/live-anudeepsri.com-5f6f52)](https://anudeepsri.com)

The source for [anudeepsri.com](https://anudeepsri.com), a statically exported portfolio covering Anudeep's work in AI architecture, production RAG, agentic systems, evaluation, mentorship, and technical writing.

## Highlights

- Responsive portfolio with light and dark themes
- Project, impact, experience, mentorship, and recognition pages
- Markdown field notes generated as static routes
- SEO metadata, structured data, sitemap, and robots configuration
- Reduced-motion support, keyboard navigation, and a skip link
- Automated GitHub Pages deployment

## Stack

- Next.js 16 App Router, React 18, and TypeScript
- Tailwind CSS and local Cabinet Grotesk/Satoshi fonts
- Framer Motion and Lucide icons
- `react-markdown`, `remark-gfm`, and `gray-matter` for field notes

The site is a static export. It has no API routes, runtime AI services, database, or required environment variables.

## Run locally

Use Node.js 24 (Node.js 22 is the minimum supported version) and npm 10 or newer.

```bash
git clone https://github.com/Anudeepsrib/anudeepsrib.github.io.git
cd anudeepsrib.github.io
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command             | Purpose                                 |
| ------------------- | --------------------------------------- |
| `npm run dev`       | Start the development server            |
| `npm run build`     | Create the static export in `out/`      |
| `npm run lint`      | Run ESLint with zero warnings allowed   |
| `npm run typecheck` | Check TypeScript without emitting files |
| `npm run format`    | Check formatting with Prettier          |
| `npm run depcheck`  | Find unused or missing dependencies     |

## Content map

```text
notes/                 Markdown field notes
public/                Fonts, images, sitemap, and domain configuration
src/app/               Pages, layout, metadata, and global styles
src/components/        Portfolio sections and shared UI
src/data/              Resume and skills content
src/lib/               Markdown, metadata, animation, and class helpers
```

Edit `src/data/resumeData.json` for resume content, `src/components/Projects.tsx` for featured work, and `notes/*.md` for field notes. See [Project-Structure.md](./Project-Structure.md) for the full layout.

## Deployment

Pushing to `main` or `master` runs linting, type-checking, and the production build before publishing `out/` to GitHub Pages. `vercel.json` also supports deployment on Vercel.

## Security and license

Report vulnerabilities through the process in [SECURITY.md](./SECURITY.md). The project is available under the [MIT License](./LICENSE).
