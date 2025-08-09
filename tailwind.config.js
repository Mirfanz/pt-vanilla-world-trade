import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        primary: "#F65124",
        secondary: "#111111",
        accent: "#f59e0b",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      theme: {
        extend: {
          colors: {
            primary: "#F65124",
            secondary: "#111111",
            accent: "#f59e0b",
          },
        },
      },
    }),
  ],
};

module.exports = config;
