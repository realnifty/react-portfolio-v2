/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        readex: "'Readex Pro'",
        fig: "'Figtree'"
      },
    },
  },
  plugins: [],
};
