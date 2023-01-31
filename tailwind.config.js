/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "auth-light": "url('src/assets/backgrounds/authlight.jpg')",
        "auth-dark": "url('src/assets/backgrounds/authdark.jpg')",
      },
    },
  },
  plugins: [],
};
