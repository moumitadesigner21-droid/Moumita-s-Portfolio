# Connect GitHub → Netlify (one-time)

After you add two secrets, every push to `main` deploys to **moumitadesigner.com**.

## 1. Netlify personal access token

1. Sign in at [app.netlify.com](https://app.netlify.com) with the account that owns **moumitadesigner.com**.
2. Open **User settings** → **Applications** → **Personal access tokens**.
3. **New access token** → name it `github-moumita-portfolio` → copy the token (shown once).

## 2. Netlify Site ID

1. In Netlify, open the site for **moumitadesigner.com**.
2. **Site configuration** → **General** → **Site details** → copy **Site ID** (UUID).

## 3. GitHub repository secrets

Repo: [Moumita-s-Portfolio](https://github.com/moumitadesigner21-droid/Moumita-s-Portfolio/settings/secrets/actions)

| Secret name | Value |
|-------------|--------|
| `NETLIFY_AUTH_TOKEN` | Token from step 1 |
| `NETLIFY_SITE_ID` | Site ID from step 2 |

Click **New repository secret** for each.

## 4. Run deploy

- Push to `main`, or  
- **Actions** → **Deploy to Netlify** → **Run workflow**

When the workflow succeeds, refresh [moumitadesigner.com](https://moumitadesigner.com).

## Optional: link repo in Netlify UI

You can also connect the GitHub repo under **Build & deploy** → **Continuous deployment** so Netlify builds on push. The GitHub Action above is enough on its own; you do not need both unless you prefer Netlify’s UI builds.
