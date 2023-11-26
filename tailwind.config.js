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
