# Next.js Project & Playwright Testing Guide

## 1. Project Setup
```bash
npm create next-app@latest my-portfolio
```

## 2. Playwright E2E Setup
```bash
npm install -D @playwright/test
npx playwright install
```

## 3. Running Tests in Different Environments

### Local Environment (Default: http://localhost:3000)
```bash
npx playwright test
```

### Custom Local Port (e.g., PORT 8080)
```bash
PORT=8080 npx playwright test
```

### AWS / Live Production / GitHub Pages Deployment
```bash
BASE_URL=https://omrathore.dev npx playwright test
# or
BASE_URL=https://OmR31997.github.io/portfolio-app npx playwright test
```

## 4. Useful NPM Test Commands
Add to `package.json`:
```json
"scripts": {
  "test": "playwright test",
  "test:ui": "playwright test --ui",
  "test:debug": "playwright test --debug"
}
```

# GitHub Page Deployments
`Step-1: mkdir .github/workflows
Step-2: Create .github/workflows/github-page.yml
Step-3: Add the following code to .github/workflows/github-page.yml` 