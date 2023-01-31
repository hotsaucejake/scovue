/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "auth-light": "url('/images/backgrounds/authlight.jpg')",
        "auth-dark": "url('/images/backgrounds/authdark.jpg')",
      },
    },
  },
  plugins: [],
};
