<h1 align="center"> svbygoibear.github.io</h1>
<p align="center"><img alt="Simone van Buuren" src="src/assets//nintendo-gamecard.svg" width="200"></p>

Welcome to my resume page! I don't get a ton of time to really update my personal page, but what better use than to play around with a fun, quirky little page where you can get to see my work experience and maybe even schedule some time to chat if you'd like.

## This REPO

I don't often for for minimalism but this is a playground where I just "try things out". Do I want to add a blog here? Yeah sure! But I want to get going with as little effort as possible; with as much control as I can have. What we're left with here is a super simple react act, with a bunch of hardcoded values (for now) and some crazy styling.

## Status

[![Deploy Pages](https://github.com/svbygoibear/svbygoibear.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/svbygoibear/svbygoibear.github.io/actions/workflows/deploy.yml) [![pages-build-deployment](https://github.com/svbygoibear/svbygoibear.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/svbygoibear/svbygoibear.github.io/actions/workflows/pages/pages-build-deployment) [![Release](https://img.shields.io/github/release/svbygoibear/svbygoibear.github.io.svg?style=flat-square)](https://github.com/svbygoibear/svbygoibear.github.io/releases)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ["./tsconfig.node.json", "./tsconfig.app.json"],
            tsconfigRootDir: import.meta.dirname
        }
    }
});
```

-   Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-   Optionally add `...tseslint.configs.stylisticTypeChecked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
    // Set the react version
    settings: { react: { version: "18.3" } },
    plugins: {
        // Add the react plugin
        react
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs["jsx-runtime"].rules
    }
});
```
