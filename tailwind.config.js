/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      backgroundImage: {
        'auth-light': "url('/images/backgrounds/authlight.jpg')",
        'auth-dark': "url('/images/backgrounds/authdark.jpg')",
        'chemex-image': "url('/images/backgrounds/chemex.jpg')",
        'wood-section': "url('/images/backgrounds/wood.jpg')",
        'light-desk': "url('/images/backgrounds/lightdesk.jpg')",
        'dark-desk': "url('/images/backgrounds/darkdesk.jpg')",
      },
      fontFamily: {
        'arvo-regular': ['Arvo Regular', 'sans-serif'],
        'arvo-bold': ['Arvo Bold', 'serif'],
        'arvo-italic': ['Arvo Italic', 'serif'],
        'arvo-bold-italic': ['Arvo Bold Italic', 'serif'],
        'dosis-bold': ['Dosis Bold', 'sans-serif'],
        'dosis-extra-bold': ['Dosis Extra Bold', 'sans-serif'],
        'dosis-extra-light': ['Dosis Extra Light', 'sans-serif'],
        'dosis-light': ['Dosis Light', 'sans-serif'],
        'dosis-medium': ['Dosis Medium', 'sans-serif'],
        'dosis-regular': ['Dosis Regular', 'sans-serif'],
        'dosis-semi-bold': ['Dosis Semi Bold', 'sans-serif'],
        'roboto-mono-bold': ['Roboto Mono Bold', 'monospace'],
        'roboto-mono-bold-italic': ['Roboto Mono Bold Italic', 'monospace'],
        'roboto-mono-extra-light': ['Roboto Mono Extra Light', 'monospace'],
        'roboto-mono-extra-light-italic': ['Roboto Mono Extra Light Italic', 'monospace'],
        'roboto-mono-italic': ['Roboto Mono Italic', 'monospace'],
        'roboto-mono-light': ['Roboto Mono Light', 'monospace'],
        'roboto-mono-light-italic': ['Roboto Mono Light Italic', 'monospace'],
        'roboto-mono-medium': ['Roboto Mono Medium', 'monospace'],
        'roboto-mono-medium-italic': ['Roboto Mono Medium Italic', 'monospace'],
        'roboto-mono-regular': ['Roboto Mono Regular', 'monospace'],
        'roboto-mono-semi-bold': ['Roboto Mono Semi Bold', 'monospace'],
        'roboto-mono-semi-bold-italic': ['Roboto Mono Semi Bold Italic', 'monospace'],
        'roboto-mono-thin': ['Roboto Mono Thin', 'monospace'],
        'roboto-mono-thin-italic': ['Roboto Mono Thin Italic', 'monospace'],
        'satisfy-regular': ['Satisfy', 'cursive'],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')],
};
