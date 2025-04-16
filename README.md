# Leap 2025 Website

> [!IMPORTANT]
> READ the [Development Workflow](#development-workflow) for developers to see how to write tests along with your code

## Table of Contents

- [Setup](#setup)
- [Development](#development)

## Setup

1. Clone the repository from `main`

```bash
git clone git@github.com:dlsu-lscs/leap25-web.git
cd leap25-web
```

2. Install dependencies: `npm install`

3. Copy `.env.example` to `.env` && configure environment variables

## Development

```bash
npm run dev
```

- dev dependencies:

```bash
npm install -D eslint eslint-config-next prettier eslint-config-prettier eslint-plugin-prettier husky lint-staged jest babel-jest @testing-library/react @testing-library/jest-dom @testing-library/user-event

```
