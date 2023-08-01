/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#3A4663",
        light: "#E6E6E6",
        neon: "#17062A",
        "light-text": "#36362C",
        "neon-text": "#FFE53D"
      }
    },
  },
  plugins: [],
};
