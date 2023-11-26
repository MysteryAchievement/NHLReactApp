# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Install Tailwind CSS

- Install tailwindcss via pnpm: 
```
pnpm add - D tailwindcss postcss autoprefixer
```
- Create your tailwind.config.js file: 
```
npx tailwindcss init
```
- Add the paths to all of your template files in your tailwind.config.js file: 
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- Add the @tailwind directives for each of Tailwind’s layers to your main CSS (`index.css`) file:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Add tailwindcss and autoprefixer to your postcss.config.js file:  
```
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```
- Install the Tailwind CSS plugin: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
- Configure `index.css` to use Tailwind CSS:
   1. Open the index.css file where you imported Tailwind CSS
   2. Press Shift + P and search for “change language mode”
   3. Inside the search bar, type “tailwindcss” and select it.

   ## Rewind-UI
   Rewind-UI is available as an NPM package and can be installed using the following two commands:
```
pnpm add @rewind-ui/core
```
and
```
pnpm add class-variance-authority tailwind-merge tailwind-scrollbar @tailwindcss/forms @tailwindcss/typography
```
After having installed Tailwind CSS, you must configure it to work with Rewind-UI. To do this, you must first create a tailwind.config.js file in the root directory of your project. Then, add the following code to that config file:
```
module.exports = {
  content: [
    './src/**/*.{html,jsx,tsx}',
    // you can either add all styles
    './node_modules/@rewind-ui/core/dist/theme/styles/*.js',
    // OR you can add only the styles you need
    './node_modules/@rewind-ui/core/dist/theme/styles/Button.styles.js',
    './node_modules/@rewind-ui/core/dist/theme/styles/Text.styles.js'
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class' // only generate classes
    })
  ]
};
```
or in ES6 style:
```
import tailwindTypography from '@tailwindcss/typography'
import tailwindForm from '@tailwindcss/forms'
import tailwindScrollbar from 'tailwind-scrollbar'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,ts,tsx}',
    // you can either add all styles
    './node_modules/@rewind-ui/core/dist/theme/styles/*.js',
    // TODO: add only the styles you need
    // './node_modules/@rewind-ui/core/dist/theme/styles/Button.styles.js',
    // './node_modules/@rewind-ui/core/dist/theme/styles/Text.styles.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindTypography,
    tailwindScrollbar({ nocompatible: true }),
    tailwindForm({
      strategy: 'class' // only generate classes
    })
  ],
};
```