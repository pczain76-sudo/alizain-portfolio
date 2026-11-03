# Project File Structure

```
ali-zain-portfolio/
│
├── 📄 package.json              ← dependencies & scripts (bun install / bun run dev)
├── 📄 bun.lock                  ← locked dependency versions
├── 📄 next.config.ts             ← Next.js config (standalone output for Vercel)
├── 📄 tsconfig.json             ← TS config (needed by Next.js tooling even though we use JS)
├── 📄 tailwind.config.ts        ← Tailwind config
├── 📄 postcss.config.mjs         ← PostCSS config (Tailwind v4 plugin)
├── 📄 eslint.config.mjs         ← ESLint rules
├── 📄 components.json            ← shadcn/ui setup config
├── 📄 Caddyfile                 ← local sandbox gateway (ignore on Vercel)
├── 📄 .gitignore                ← what to exclude from git
├── 📄 .env.example              ← env var template (mostly empty — no DB)
├── 📄 README.md                 ← full setup + customization guide
├── 📄 PROJECT_STRUCTURE.md      ← this file
│
├── 📁 public/                   ← static assets served as-is
│   ├── 📄 logo.svg
│   ├── 📄 robots.txt
│   └── 📁 resume/
│       └── 📄 ali-zain-resume.pdf
│
└── 📁 src/
    │
    ├── 📁 app/
    │   ├── 📄 layout.jsx        ← root layout — fonts, metadata, <html>
    │   ├── 📄 page.jsx           ← home page — wires all 10 sections together
    │   ├── 📄 globals.css        ← theme: light + emerald accent (CSS variables)
    │   └── 📁 api/
    │       └── 📄 route.js      ← tiny /api health-check endpoint
    │
    ├── 📁 components/
    │   │
    │   ├── 📁 sections/          ← ⭐ YOUR PORTFOLIO SECTIONS — edit these
    │   │   ├── 📄 navbar.jsx
    │   │   ├── 📄 hero.jsx
    │   │   ├── 📄 about.jsx
    │   │   ├── 📄 services.jsx
    │   │   ├── 📄 skills.jsx
    │   │   ├── 📄 experience.jsx
    │   │   ├── 📄 education.jsx
    │   │   ├── 📄 portfolio.jsx
    │   │   ├── 📄 contact.jsx           ← mailto: form (no backend)
    │   │   ├── 📄 footer.jsx
    │   │   └── 📄 section-heading.jsx   ← reusable heading component
    │   │
    │   └── 📁 ui/                ← shadcn/ui library (preinstalled)
    │       ├── 📄 accordion.tsx
    │       ├── 📄 button.tsx
    │       ├── 📄 card.tsx
    │       ├── 📄 input.tsx
    │       ├── 📄 textarea.tsx
    │       ├── ... (40+ components)
    │       └── 📄 toaster.tsx
    │
    ├── 📁 lib/
    │   ├── 📄 data.js            ← ⭐ ALL CONTENT HERE — profile, projects, skills, etc.
    │   └── 📄 utils.js           ← cn() className helper
    │
    └── 📁 hooks/
        ├── 📄 use-mobile.ts      ← detect mobile viewport
        └── 📄 use-toast.ts       ← toast notifications hook
```

## ⭐ Where to edit what

| Want to change...                  | Edit this file                                |
|------------------------------------|-----------------------------------------------|
| Your name, bio, email, phone       | `src/lib/data.js` → `profile`                |
| Social links (GitHub, LinkedIn...) | `src/lib/data.js` → `socials`                |
| Skills + percentages               | `src/lib/data.js` → `technicalSkills`        |
| Experience entries                  | `src/lib/data.js` → `experience`             |
| Education entries                   | `src/lib/data.js` → `education`              |
| Projects (add/edit/remove)         | `src/lib/data.js` → `projects`               |
| Theme colors (white → black etc)    | `src/app/globals.css` → `:root` CSS vars     |
| Section layout / design             | `src/components/sections/<name>.jsx`        |
| Add a new section                   | Create `src/components/sections/new.jsx` + import in `page.jsx` |
| Resume PDF                          | Replace `public/resume/ali-zain-resume.pdf`  |

## 🚀 Run locally

```bash
cd ali-zain-portfolio
bun install        # or: npm install
bun run dev        # or: npm run dev
# open http://localhost:3000
```

## ☁️ Deploy to Vercel

No database, no env vars needed.

1. `git init && git add . && git commit -m "init"`
2. Push to GitHub
3. https://vercel.com/new → import repo → Deploy
