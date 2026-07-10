# cierraking.com — portfolio

A dynamic, design-forward portfolio for Cierra King, creative technologist.
Built with **React + Vite + Framer Motion**. No backend needed — the whole
site is driven by a few plain-text content files, so editing is fast and safe.

## Run it locally

```bash
npm install     # first time only
npm run dev     # → http://localhost:5173
```

`npm run build` creates the production site in `dist/`.

## ✏️ Editing content (the part you'll do most)

All words on the site live in **`src/content/`** — you never need to touch a
component to change text:

| File | What it controls |
| --- | --- |
| `src/content/site.js` | Name, tagline, intro, email, socials, marquee words, footer CTA, bio paragraphs, skills |
| `src/content/projects.js` | Every project — order here = order on the site |
| `src/content/experience.js` | Experience timeline + education on the About page |

### Adding a project

Open `src/content/projects.js`, copy any project block, paste it at the top,
and fill in the fields (each field is documented at the top of the file).
Set `featured: true` to show it on the homepage.

**Project images:** drop a file into `public/projects/` and set
`cover: '/projects/your-image.jpg'`. Projects with `cover: null` get a
generative art tile in their accent color instead — so the site never
looks unfinished.

> ⚠️ Several projects and experience entries are marked `PLACEHOLDER` —
> swap in your real work.

## 🎨 Editing the look

Open **`src/styles/tokens.css`** — every color, font, size, and spacing value
is a variable with a comment. Change `--accent` and the entire site re-tints
(cursor, links, canvas particles, everything). Fonts are loaded in
`index.html` (Google Fonts) and assigned in `tokens.css`.

Section-by-section styles live in `src/styles/global.css`, organized
top-to-bottom in page order.

## ✨ Where the animations live

| Thing | File |
| --- | --- |
| Hero particle flow-field (mouse-reactive) | `src/components/HeroCanvas.jsx` — tune the `CONFIG` at the top |
| Generative project tiles | `src/components/GenTile.jsx` |
| Letter-by-letter hero name reveal | `src/pages/Home.jsx` (`AnimatedLine`) |
| Scroll-in reveals | `src/components/Reveal.jsx` — wrap anything in `<Reveal>` |
| Page transitions between routes | `src/components/PageTransition.jsx` |
| Scrolling marquee | `src/components/Marquee.jsx` |
| Custom cursor | `src/components/Cursor.jsx` |

All animations respect `prefers-reduced-motion`.

## Site structure

- `/` — hero, marquee, featured work, about teaser
- `/work` — all projects with tag filtering
- `/work/:slug` — project detail (role / tools / year, body, next-project link)
- `/about` — full bio, skills, experience, education

## Deploying

The build output (`dist/`) is a static site — deploy free on
[Vercel](https://vercel.com), [Netlify](https://netlify.com), or GitHub Pages.
For Vercel/Netlify: connect this repo, framework preset **Vite**, and add a
SPA rewrite (all routes → `/index.html`) so project URLs work on refresh —
Vercel: add `vercel.json` with `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`
(already included), Netlify: `_redirects` with `/* /index.html 200`.
Then point the `cierraking.com` domain at the new deployment.
