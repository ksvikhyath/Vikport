# vikhyath.dev — portfolio

React + Vite + Tailwind CSS v4 portfolio site.

## Before you deploy
- Replace `public/resume.pdf` with your actual resume (the download buttons already point to `/resume.pdf`).
- Fill in `github` / `caseStudy` links for OrbixAI and the distributed pipeline project in `src/data/content.js` once repos are public.
- All editable content (bio, projects, tech stack, education, links) lives in `src/data/content.js` — you shouldn't need to touch component files for text/link changes.

## Local development
```
npm install
npm run dev
```

## Production build
```
npm run build
npm run preview   # preview the production build locally
```

## Deploy (Vercel)
```
npm install -g vercel
vercel login
vercel
```
Follow the prompts (framework preset: Vite). For production deploy: `vercel --prod`.
