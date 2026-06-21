# Safirah Tajul Ariffin — Portfolio

A premium personal portfolio website built with React, Vite, Tailwind CSS, Framer Motion, React Router, and EmailJS.

## Tech Stack
- React 19 + Vite
- React Router DOM (client-side routing)
- Tailwind CSS (custom Café Noir / Kombu Green / Moss Green / Tan / Bone palette, light + dark mode)
- Framer Motion (page transitions, scroll reveals)
- React Icons
- React Helmet Async (SEO)
- EmailJS (contact form)

## Project Structure
```
src/
  components/   Navbar, Footer, ContactForm, Reveal, PageTransition, SEO
  pages/        Home, Projects, Experience, Education, Certifications, Gallery
  layouts/      Layout.jsx (Navbar + Footer wrapper)
  hooks/        useTheme.js (dark mode, persisted to localStorage)
  data/         content.js (single source of truth for all resume content)
  styles/       index.css (Tailwind + global styles)
```

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Adding Your Resume PDF & Images

1. Place your resume PDF at `public/resume.pdf`.
2. Replace the placeholder blocks in `Home.jsx`, `Projects.jsx`, `Certifications.jsx`, and `Gallery.jsx`
   with real images (e.g. `public/profile.jpg`, `public/gallery/*.jpg`) once you have them ready.

## Setting Up EmailJS (Contact Form)

1. Create a free account at https://www.emailjs.com
2. Create an Email Service and an Email Template (with fields: `name`, `email`, `subject`, `message`)
3. Open `src/components/ContactForm.jsx` and replace:
   ```js
   const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID";
   const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
   const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
   ```
   with your actual EmailJS credentials.

## Deploying to GitHub Pages

This repo is pre-configured for GitHub Pages under the repo name `safirah-portfolio`
(see `base: '/safirah-portfolio/'` in `vite.config.js` and `basename` in `main.jsx`).

**If you use a different repo name**, update both of those to match, e.g. `/your-repo-name/`.

### Option A — One command deploy (gh-pages package, already installed)
```bash
npm run deploy
```
This builds the project and pushes `dist/` to the `gh-pages` branch.
Then in your GitHub repo: **Settings → Pages → Source → Deploy from a branch → gh-pages → / (root)**.

### Option B — GitHub Actions (automatic on every push to `main`)
A workflow is already included at `.github/workflows/deploy.yml`. To enable it:
1. Push this project to a GitHub repository named `safirah-portfolio` (or update the base path if different).
2. In your repo: **Settings → Pages → Source → GitHub Actions**.
3. Push to `main` — the site builds and deploys automatically.

### Full deployment steps from scratch
```bash
git init
git add .
git commit -m "Initial commit: premium portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/safirah-portfolio.git
git push -u origin main
```
Then follow Option A or B above.

Your live site will be available at:
`https://<your-username>.github.io/safirah-portfolio/`

## Notes
- Dark mode preference is saved in `localStorage` and respects system preference on first visit.
- A `public/404.html` redirect script is included so direct links to sub-pages (e.g. `/projects`)
  work correctly on GitHub Pages, which otherwise only serves `index.html` at the root.
