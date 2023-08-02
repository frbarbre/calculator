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
        "dark-text": "#434A59",
        "dark-screen": "#181F33",
        "dark-btn": "#EAE3DC",
        "dark-btn-hover": "#FFFFFE",
        "dark-board": "#242D44",
        "dark-shadow": "#B3A497",
        "dark-delete": "#647198",
        "dark-delete-hover": "#A2B2E1",
        "dark-delete-shadow": "#414E73",
        "dark-equal": "#D03F2F",
        "dark-equal-hover": "#F96B5B",
        "dark-equal-shadow": "#93261A",
        "dark-theme": "#D03F2F",
        "dark-theme-hover": "#F96B5B",

        light: "#E6E6E6",
        "light-text": "#36362C",
        "light-screen": "#EEEEEE",
        "light-btn": "#E5E4E1",
        "light-btn-hover": "#FFFFFF",
        "light-board": "#D2CDCD",
        "light-shadow": "#A79E91",
        "light-delete": "#378187",
        "light-delete-hover": "#62B5BC",
        "light-delete-shadow": "#1B6066",
        "light-equal": "#C85402",
        "light-equal-hover": "#FF8A38",
        "light-equal-shadow": "#873901",
        "light-theme": "#C85402",
        "light-theme-hover": "#FF8A38",

        neon: "#17062A",
        "neon-text": "#FFE53D",
        "neon-screen": "#1E0936",
        "neon-btn": "#331C4D",
        "neon-btn-hover": "#6B34AC",
        "neon-board": "#1E0936",
        "neon-shadow": "#881C9E",
        "neon-delete": "#56077C",
        "neon-delete-hover": "#8631AF",
        "neon-delete-shadow": "#BE15F4",
        "neon-equal-text": "#1A2327",
        "neon-equal": "#00DED0",
        "neon-equal-hover": "#93FFF8",
        "neon-equal-shadow": "#6CF9F1",
        "neon-theme": "#00DED0",
        "neon-theme-hover": "#93FFF8",
      },
    },
  },
  plugins: [],
};
