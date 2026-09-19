# AI Systems Portfolio

[![Deploy](https://github.com/Anudeepsrib/anudeepsrib.github.io/actions/workflows/nextjs.yml/badge.svg)](https://github.com/Anudeepsrib/anudeepsrib.github.io/actions/workflows/nextjs.yml)
[![Live site](https://img.shields.io/badge/live-anudeepsri.com-5f6f52)](https://anudeepsri.com)

The source for [anudeepsri.com](https://anudeepsri.com), Anudeep Sri Bathina's portfolio for production AI architecture, agentic systems, multimodal RAG, governed data platforms, technical writing, teaching, and mentorship.

## What the site emphasizes

- Evidence-backed career progression from data engineering to AI architecture
- Production outcomes, platform ownership, and engineering leadership
- Inspectable AI systems with constraints, decisions, and tradeoffs
- Research, guest lectures, teaching, mentorship, and selected credentials
- Accessible responsive design with light and dark themes
- Static output with no database, API routes, or runtime secrets

## Stack

- Next.js 16 App Router, React 18, and TypeScript
- Tailwind CSS with local Cabinet Grotesk and Satoshi fonts
- Framer Motion and Lucide icons
- Markdown field notes with `gray-matter`, `react-markdown`, and `remark-gfm`
- Static export for GitHub Pages or Vercel

## Repository layout

```text
content/
  notes/                 Markdown field notes
public/
  assets/                Company marks and project visuals
  fonts/                 Locally hosted typefaces
src/
  app/                   Routes, metadata, and global styles
  components/            Portfolio sections and shared UI
  data/                  Resume, project, and capability content
  lib/                   Content loading, metadata, and helpers
```

The primary content sources are:

- `src/data/resumeData.json` for profile, experience, education, publications, talks, skills, and certifications
- `src/data/studioData.ts` for case studies, production outcomes, additional systems, and engineering principles
- `content/notes/*.md` for statically generated field notes

## Run locally

Use Node.js 22 or newer and npm 10 or newer.

```bash
git clone https://github.com/Anudeepsrib/anudeepsrib.github.io.git
cd anudeepsrib.github.io
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

| Command             | Purpose                                 |
| ------------------- | --------------------------------------- |
| `npm run format`    | Check formatting with Prettier          |
| `npm run lint`      | Run ESLint with zero warnings allowed   |
| `npm run typecheck` | Check TypeScript without emitting files |
| `npm run build`     | Create the static export in `out/`      |
| `npm run depcheck`  | Find unused or missing dependencies     |

Run the first four checks before deployment.

## Privacy boundary

The repository intentionally excludes phone numbers, email addresses, personal location data, raw resumes, and generated resume pages. Public professional links, including LinkedIn, GitHub, thesis, Topmate, and ADPList references, are intentional portfolio content.

Keep source resumes and exports outside the repository. Temporary review artifacts belong in `tmp/`, which is ignored.

## Deployment

The app uses `output: "export"`. Pushing to the configured deployment branch runs the repository workflow and publishes `out/` to GitHub Pages. `vercel.json` also supports Vercel hosting.

## Security and license

Follow [SECURITY.md](SECURITY.md) for secret-handling guidance. The code is available under the [MIT License](LICENSE).
