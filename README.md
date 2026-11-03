# Ali Zain — Portfolio

A clean, minimal light-themed portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **plain JavaScript** (no TypeScript).

## 🚀 Quick start

```bash
# 1. Install dependencies
bun install        # or: npm install / pnpm install

# 2. Run the dev server
bun run dev        # or: npm run dev

# 3. Open http://localhost:3000
```

## 📦 Deploy to Vercel

This project has **no database** — the contact form uses `mailto:`, so deployment is dead simple:

1. Push this folder to a GitHub repo
2. Go to https://vercel.com/new
3. Import the repo → Framework auto-detected as Next.js
4. No env variables needed
5. Click **Deploy** → live in ~2 minutes

## 📁 Project structure

```
ali-zain-portfolio/
├── package.json              # dependencies & scripts
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── components.json           # shadcn/ui config
├── .gitignore
├── .env.example
│
├── public/                   # static assets (logo, resume pdf, etc.)
│
└── src/
    ├── app/
    │   ├── layout.jsx        # root layout (fonts, metadata)
    │   ├── page.jsx          # home page — wires all sections
    │   ├── globals.css       # theme variables (light + emerald accent)
    │   └── api/
    │       └── route.js      # tiny health-check API
    │
    ├── components/
    │   ├── ui/               # shadcn/ui component library
    │   └── sections/         # ← your portfolio sections (edit these!)
    │       ├── navbar.jsx
    │       ├── hero.jsx
    │       ├── about.jsx
    │       ├── services.jsx
    │       ├── skills.jsx
    │       ├── experience.jsx
    │       ├── education.jsx
    │       ├── portfolio.jsx
    │       ├── contact.jsx
    │       ├── footer.jsx
    │       └── section-heading.jsx
    │
    ├── lib/
    │   ├── data.js           # ← ALL your content lives here (edit this!)
    │   └── utils.js          # className helper
    │
    └── hooks/                # shared React hooks
```

## ✏️ How to edit your content

**90% of edits happen in ONE file: `src/lib/data.js`**

That single file contains:
- `profile` — your name, role, email, phone, bio, about
- `socials` — GitHub, LinkedIn, Twitter, email links
- `stats` — the numbers on your hero card
- `services` — the 4 service cards
- `technicalSkills` / `professionalSkills` — skill bars & percentages
- `experience` — your work history (timeline)
- `education` — your education background
- `projects` — your portfolio projects
- `navItems` — top nav menu items

Just edit the values and save — the dev server auto-reloads.

## 🎨 How to change colors / theme

Open `src/app/globals.css` and edit the CSS variables in `:root`:

```css
:root {
  --background: oklch(1 0 0);              /* page background */
  --foreground: oklch(0.145 0.005 270);    /* main text color */
  --primary: oklch(0.62 0.17 162);         /* emerald accent */
  /* ... etc */
}
```

Change `--primary` to swap the accent color across the whole site.

## 📂 How to add a new project

In `src/lib/data.js`, add a new entry to the `projects` array:

```js
{
  slug: "my-new-project",
  title: "My New Project",
  description: "Short description...",
  tags: ["JavaScript", "API"],
  features: ["Feature 1", "Feature 2"],
  liveUrl: "https://...",
  repoUrl: "https://github.com/...",
  status: "Live",
}
```

It will automatically appear in the Portfolio section.

## 📧 Upgrading the contact form (optional)

Right now the form uses `mailto:` (opens the user's email app).

If you want real form submissions (no email client popup), use **Formspree**:

1. Sign up at https://formspree.io (free)
2. Create a form, copy your endpoint URL
3. Open `src/components/sections/contact.jsx`
4. Replace `handleSubmit` with a `fetch(formspreeUrl, ...)` call

That's it — no backend needed, works on Vercel free tier.

## 🛠 Tech stack

- **Framework:** Next.js 16 (App Router)
- **Language:** JavaScript (JSX — no TypeScript)
- **Styling:** Tailwind CSS v4 + shadcn/ui components
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Contact form:** mailto: (no backend)

## 📝 License

Personal portfolio of Ali Zain. Feel free to fork and customize for your own use.
