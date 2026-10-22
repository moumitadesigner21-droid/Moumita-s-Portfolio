# Moumita Chowdhury — Founder Portfolio

Premium Next.js portfolio for [moumitadesigner.com](https://moumitadesigner.com).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Netlify + custom domain)

This repo is published to GitHub: [Moumita-s-Portfolio](https://github.com/moumitadesigner21-droid/Moumita-s-Portfolio).

`netlify.toml` configures the [Netlify Next.js runtime](https://docs.netlify.com/frameworks/next-js/overview/).

1. Sign in at [app.netlify.com](https://app.netlify.com) with the account that owns **moumitadesigner.com**.
2. Open the **moumitadesigner** site → **Site configuration** → **Build & deploy** → **Continuous deployment**.
3. Connect **GitHub** → repository **`moumitadesigner21-droid/Moumita-s-Portfolio`** → branch **`main`**.
4. Confirm build command is `npm run build` (Netlify reads `netlify.toml`).
5. **Deploy site** (or **Clear cache and deploy site**).

**Automated deploys:** add `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID` as GitHub Actions secrets — see [docs/netlify-github-secrets.md](docs/netlify-github-secrets.md).

After a successful deploy, [moumitadesigner.com](https://moumitadesigner.com) will serve this Next.js site.

## Stack

Next.js, TypeScript, Tailwind CSS, Framer Motion, next-themes.
