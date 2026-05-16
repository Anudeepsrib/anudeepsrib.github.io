# Project Structure

This repository is a static Next.js portfolio. Generated folders such as `.next/`, `out/`, and `node_modules/` are intentionally ignored.

```text
anudeepsrib.github.io/
├── .github/
│   └── workflows/
│       └── nextjs.yml
├── notes/
│   ├── eval-beyond-accuracy.md
│   ├── rag-failure-patterns.md
│   └── why-genai-demos-fail.md
├── public/
│   ├── assets/
│   │   ├── companies/
│   │   │   ├── att.png
│   │   │   ├── capgemini.png
│   │   │   ├── cognizant.png
│   │   │   └── gaininsights.png
│   │   └── logo.png
│   ├── fonts/
│   ├── resume/
│   │   └── Anudeep-Sri-Bathina-Resume.pdf
│   ├── CNAME
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── blog/
│   │   ├── case-studies/
│   │   ├── impact/
│   │   ├── journey/
│   │   ├── mentorship/
│   │   ├── notes/
│   │   ├── recognitions/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   └── section components
│   ├── data/
│   │   ├── AdditionalData.json
│   │   ├── resumeData.json
│   │   └── skills.ts
│   └── lib/
│       ├── animation.ts
│       ├── content.ts
│       └── utils.ts
├── systems/
│   ├── llm-eval-harness.md
│   └── rag-policy-intelligence.md
├── .env.example
├── .eslintrc.json
├── .gitignore
├── .nvmrc
├── AUDIT_REPORT.md
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.js
├── prettier.config.js
├── README.md
├── SECURITY.md
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## Runtime Notes

- `src/lib/content.ts` is server-only build-time content loading for markdown files.
- `posts/` is currently empty because old copied template posts were removed. Add a route under `src/app/blog/[slug]/` again when authored posts are reintroduced.
- `notes/` and `systems/` provide the current public markdown content.
- The app uses `output: "export"` and does not include API routes.
