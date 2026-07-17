# Anudeep Sri Bathina Portfolio

Static Next.js portfolio for Anudeep Sri Bathina, focused on AI engineering, GenAI, RAG, agentic systems, evaluation, and full-stack AI product architecture.

This repository is intentionally a public, static portfolio. It does not ship a chatbot, OpenAI integration, Supabase pgvector database, private GitHub API token flow, or server API routes. Future server-side AI features should be deployed on a server runtime such as Vercel functions and must keep secrets out of the browser.

## Tech Stack

- Next.js 16 App Router with static export
- React 18 and TypeScript
- Tailwind CSS with local fonts
- Framer Motion with reduced-motion handling
- Markdown content rendered with `react-markdown`, `remark-gfm`, `gray-matter`, and `reading-time`
- GitHub Actions for GitHub Pages deployment
- Vercel config for static Next.js deployment

## Featured Projects

- [ClinIQ](https://github.com/Anudeepsrib/ClinIQ): Healthcare RAG architecture with scoped retrieval, citation handling, and sensitive-data controls.
- [EvidenceIQ](https://github.com/Anudeepsrib/EvidenceIQ): Local-first sensitive-media workspace with role-based access, PII-aware metadata handling, local AI tagging, semantic search, and audit trails.
- [Annapurna-AI](https://github.com/Anudeepsrib/Annapurna-AI): Culture-aware AI meal planning architecture with model routing and typed service boundaries.
- [Decision-Support-System](https://github.com/Anudeepsrib/Decision-Support-System): Decision intelligence workflow for ranking alternatives and explaining trade-offs.
- [InferIQ](https://github.com/Anudeepsrib/InferIQ): Benchmarking and serving reference for vLLM, NVIDIA NIM, and NVIDIA NeMo with optional profiling and a local dashboard.
- [ShiftIQ](https://github.com/Anudeepsrib/shiftIQ): Local-first code migration assistant with static analysis, dry runs, rollback checkpoints, and MCP tools.

## Local Setup

Prerequisites:

- Node.js 22+
- npm 10+

```bash
git clone https://github.com/Anudeepsrib/anudeepsrib.github.io.git
cd anudeepsrib.github.io
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

## Environment Variables

No environment variables are required for the current static portfolio.

Use `.env.example` as a placeholder reference only. Private keys such as `GITHUB_TOKEN`, `OPENAI_API_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` must stay server-only. Never expose personal access tokens or service-role keys through `NEXT_PUBLIC_*`.

Safe public variables may use `NEXT_PUBLIC_*` only when the value is truly safe for every visitor to see, such as a public site URL.

## Quality Commands

```bash
npm run lint
npm run typecheck
npm run build
npm run format
npm audit
npm run depcheck
```

`npm run build` creates a static export in `out/` because `next.config.mjs` uses `output: "export"`.

## Deployment

### GitHub Pages

The workflow in `.github/workflows/nextjs.yml` uses Node 24-compatible actions, Node 24 for the build, `npm ci`, lint, type-check, and `next build`, then uploads `./out` to GitHub Pages. The workflow runs on `main` and `master`; the remote default branch is currently `master`.

### Vercel

`vercel.json` uses the normal `npm run vercel-build` command. No `--legacy-peer-deps` workaround is required after dependency cleanup.

### Static Export Limitation

GitHub Pages can host only the static export. Server features such as AI chat, private GitHub API token access, Supabase service-role operations, or OpenAI calls cannot run on GitHub Pages. Add those only through server-side routes on a server runtime, and keep a static fallback for GitHub Pages.

## Known Limitations

- The portfolio currently uses static project copy and local markdown content.
- There is no live GitHub stats widget or client-side GitHub token usage.
- There is no OpenAI, LangChain, Supabase, or pgvector runtime integration in this repository.

## Security

See [SECURITY.md](./SECURITY.md) for secret handling and vulnerability reporting.
