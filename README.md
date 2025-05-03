# 🚀 Deploying to Vercel with GitHub Actions

This guide demonstrates how to deploy your application to **Vercel** using **GitHub Actions**, including support for **GitHub Enterprise Server**.

Vercel for GitHub automatically deploys your GitHub projects, provides Preview Deployment URLs, and updates Custom Domains. For more control, or if you use GitHub Enterprise Server, you can set up deployments using GitHub Actions.

---

## 🏗️ Building Your Application

You can build your app locally or within GitHub Actions using `vercel build`, without giving Vercel access to your source code. The command generates a `.vercel/output` folder that follows the Build Output API specification.

**Steps:**
- Use `vercel build` to prepare your application for deployment.
- Only upload the generated build artifacts to Vercel (not your source code).

---

## ⚙️ Configuring GitHub Actions for Vercel

### ✅ Preview Deployment Workflow

Create a workflow file at `.github/workflows/preview.yaml`:

```yaml
name: Vercel Preview Deployment
env:
  VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
  VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
on:
  push:
    branches-ignore:
      - main
jobs:
  Deploy-Preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install Vercel CLI
        run: npm install --global vercel@latest
      - name: Pull Vercel Environment Info
        run: vercel pull --yes --environment=preview --token=${{ secrets.VERCEL_TOKEN }}
      - name: Build Project
        run: vercel build --token=${{ secrets.VERCEL_TOKEN }}
      - name: Deploy Project
        run: vercel deploy --prebuilt --token=${{ secrets.VERCEL_TOKEN }}
```
