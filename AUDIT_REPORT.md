# Audit Report

## Summary

The portfolio now installs, lints, type-checks, builds, exports, audits, and formats cleanly. The app is a static Next.js portfolio with no public-token flow, no server API routes, and no claimed chatbot/OpenAI/Supabase runtime integration.

Highest-risk fixes:

- Re-enabled TypeScript and ESLint enforcement during `next build`.
- Upgraded Next.js from `15.3.1` to `15.5.18` and added a PostCSS override to clear `npm audit`.
- Removed unsafe README guidance for `NEXT_PUBLIC_GITHUB_TOKEN`.
- Removed stale LangChain/Supabase embedding generation code that referenced missing packages and server secrets.
- Removed copied template blog posts with third-party author frontmatter and their unused assets.
- Rewrote GitHub Pages and Vercel deployment configs to use normal installs and quality gates.
- Added `.env.example`, `.nvmrc`, `SECURITY.md`, and a truthful README.

## Findings

### P0

- Build validation was disabled in `next.config.mjs` through `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds`.
  - Fixed by removing both suppressions and correcting the underlying type errors.
- Static export could be misleadingly green because `next build` skipped type and lint validation.
  - Fixed by enforcing lint/type-check in build and GitHub Actions.
- README instructed users to set `NEXT_PUBLIC_GITHUB_TOKEN`.
  - Fixed by removing the pattern and documenting server-only token handling.
- Stale copied posts and assets presented non-owned content in a recruiter-facing portfolio.
  - Fixed by removing the copied posts, generated post images, and the empty blog detail route.

### P1

- `scripts/generate.ts` referenced missing `langchain` and `src/lib/supabase` modules.
  - Fixed by deleting the stale script and removing the `generate` package script.
- `vercel.json` used `npm install --legacy-peer-deps`.
  - Fixed by removing the workaround and relying on normal install/build behavior.
- GitHub Pages workflow built only with `next build`.
  - Fixed by using Node 20, `npm ci`, `npm run lint`, `npm run typecheck`, and `npm run build`.
- `npm audit` initially reported 12 vulnerabilities, including a critical Next.js advisory.
  - Fixed by upgrading Next.js and applying a PostCSS override; final audit reports 0 vulnerabilities.

### P2

- README claimed AI chatbot, LangChain, OpenAI, Supabase pgvector, GitHub stats, and interactive tech-stack validation features not implemented in this repository.
  - Fixed by rewriting README around the actual static portfolio.
- Markdown frontmatter parsing was ad hoc and duplicated.
  - Fixed by adding `src/lib/content.ts` with `gray-matter` and `reading-time`.
- OpenGraph metadata pointed to a missing `/assets/profile-pic.jpeg`.
  - Fixed by using the committed logo asset and adding `metadataBase`/canonical metadata.
- Project cards showed hardcoded star counts and strong metrics that were not sourced from code.
  - Fixed by replacing them with architecture-focused, defensible project notes.
- Unused heavy dependencies and assets increased maintenance and security surface.
  - Fixed by pruning unused packages and deleting unused public assets.

### P3

- Prettier was configured with a missing plugin.
  - Fixed by installing/normalizing formatting support and then simplifying the config.
- Project detail modal lacked escape-key handling and dialog semantics.
  - Fixed by adding `role="dialog"`, `aria-modal`, labelled title, and Escape close handling.
- `.gitignore` missed explicit `.env` handling.
  - Fixed by adding `.env`, `.env.local`, `.env.*.local`, generated outputs, logs, `.vercel/`, `.agent/`, and key files.

## Files Changed

Config and deployment:

- `.github/workflows/nextjs.yml`
- `.gitattributes`
- `.gitignore`
- `.nvmrc`
- `next.config.mjs`
- `package.json`
- `package-lock.json`
- `postcss.config.js`
- `prettier.config.js`
- `tailwind.config.ts`
- `tsconfig.json`
- `vercel.json`
- `webpack.config.js`

Documentation:

- `.env.example`
- `AUDIT_REPORT.md`
- `Project-Structure.md`
- `README.md`
- `SECURITY.md`

App and source:

- `src/app/blog/page.tsx`
- `src/app/case-studies/page.tsx`
- `src/app/globals.css`
- `src/app/impact/page.tsx`
- `src/app/journey/page.tsx`
- `src/app/layout.tsx`
- `src/app/mentorship/page.tsx`
- `src/app/not-found.tsx`
- `src/app/notes/[slug]/page.tsx`
- `src/app/page.tsx`
- `src/app/recognitions/page.tsx`
- `src/components/**`
- `src/data/AdditionalData.json`
- `src/data/resumeData.json`
- `src/data/skills.ts`
- `src/lib/animation.ts`
- `src/lib/content.ts`
- `src/lib/utils.ts`

Removed stale or unsafe files:

- `posts/*.md`
- `scripts/generate.ts`
- `src/app/blog/[slug]/page.tsx`
- `src/components/SmoothScroll.tsx`
- `src/components/WebMCP.tsx`
- `src/types/global.d.ts`
- unused public template assets under `public/images/`, `public/animations/`, `public/icons/`, plus `public/next.svg`, `public/vercel.svg`, and `public/assets/companies/att.jpg`

Content:

- `notes/*.md`
- `systems/*.md`
- `public/sitemap.xml`
- `remap-lottie-colors.js`

## Commands Run

Initial audit commands:

```bash
git status --short --branch
rg --files -g "!*node_modules*"
Get-Content -Raw package.json
Get-Content -Raw next.config.mjs
Get-Content -Raw vercel.json
Get-Content -Raw .github/workflows/nextjs.yml
Get-Content -Raw .gitignore
Get-Content -Raw README.md
Get-Content -Raw Project-Structure.md
rg -n --hidden -S "OPENAI_API_KEY|GITHUB_TOKEN|NEXT_PUBLIC_GITHUB_TOKEN|SUPABASE_SERVICE_ROLE|BEGIN [A-Z ]*PRIVATE KEY|private key|token|secret|credential|API_KEY|NEXT_PUBLIC|SUPABASE|OPENAI|LANGCHAIN|LangChain|pgvector" -g "!node_modules/**" -g "!.git/**" -g "!.next/**" -g "!out/**"
```

Baseline validation before fixes:

```bash
npm run lint
npx tsc --noEmit
npx prettier --check .
npm run build
npx depcheck
```

Final validation after fixes:

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm audit
npx depcheck
npx prettier --check .
node -e "const fs=require('fs'); const yaml=require('yaml'); yaml.parse(fs.readFileSync('.github/workflows/nextjs.yml','utf8')); console.log('YAML OK')"
npx update-browserslist-db@latest
```

Browser smoke test:

```text
Opened http://localhost:3001 in the in-app browser.
Verified home page title, hero name, navigation, project content, /case-studies, and /notes/rag-failure-patterns.
Checked browser console errors: 0.
```

## Results

- `npm install`: passed; 0 vulnerabilities after dependency cleanup.
- `npm run lint`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; exported static site to `out/`.
- `npm audit`: passed; found 0 vulnerabilities.
- `npx depcheck`: passed; no dependency issues.
- `npx prettier --check .`: passed.
- GitHub Actions YAML parse: passed.
- Browser smoke test: passed with no console errors.

Final build output exported these static routes:

- `/`
- `/_not-found`
- `/blog`
- `/case-studies`
- `/impact`
- `/journey`
- `/mentorship`
- `/notes/rag-failure-patterns`
- `/notes/why-genai-demos-fail`
- `/notes/eval-beyond-accuracy`
- `/recognitions`

## Deployment Posture

Before:

- GitHub Pages build did not explicitly run lint or type-check.
- Vercel used `--legacy-peer-deps`.
- `next build` skipped type and lint validation.
- Static export contained stale copied content and unused assets.

After:

- GitHub Pages uses Node 20, `npm ci`, lint, type-check, build, and uploads `./out`.
- Vercel uses normal `npm run vercel-build`.
- Static export is explicit through `output: "export"`.
- No server runtime features are claimed or required.

## Security Posture

Before:

- README promoted a client-visible GitHub token.
- Stale generation script implied server-only AI/Supabase secret usage but could not run.
- Dependency audit reported vulnerabilities.
- OpenGraph referenced a missing profile asset.

After:

- No real secrets found in source.
- `.env`, `.env.local`, and `.env.*.local` are ignored.
- `.env.example` contains placeholders only.
- `SECURITY.md` documents secret handling and reporting.
- `npm audit` reports 0 vulnerabilities.
- Remote image allowlist was removed because no remote images are used.

## Remaining Risks

- The site is a static portfolio. AI chat, OpenAI calls, Supabase pgvector, private GitHub API calls, and service-role operations still require a future server runtime.
- Some resume and project impact metrics are content claims, not testable by this repository. Keep external proof links current for recruiter review.
- The blog detail route was removed because all copied posts were removed. Reintroduce `src/app/blog/[slug]/page.tsx` only when authored posts exist.
- Autoprefixer was removed to keep the dependency graph minimal. Current CSS targets modern browsers through Next/Tailwind; add Autoprefixer back if legacy browser support becomes a requirement.

## Manual Actions

- Confirm GitHub Pages is configured to deploy from GitHub Actions on the repository settings page.
- Confirm the custom domain `anudeepsri.com` DNS still points to GitHub Pages or the preferred host.
- Add verified external evidence links for any highly specific production metrics that should remain visible.
- If AI/chat features are added later, deploy them on Vercel or another server runtime and keep GitHub Pages on a static fallback.

## Recommended Commit Message

```text
Harden static portfolio build, security docs, and deployment configs
```
