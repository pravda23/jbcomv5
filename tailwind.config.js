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
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#e6e6e6",
        gray: "#c5c5c5",
        darkgray: "#303030",
        primarylight: "#e5bd43",
        lightgray: "hsla(0, 0%, 88%, 0.1)",
        secondarylight: "#3f99d5",
        secondarydark: "hsl(204, 56%, 27%)",
        neutral: "hsl(59, 67%, 12%)",
        black: "#272727",
      },
    },
  },
  plugins: [],
};
