import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        serif: ["var(--font-caslon)", "Georgia", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Dourado da marca. 400 é o tom de destaque; 600+ tem contraste
        // suficiente para texto e botões com texto branco.
        marca: {
          50: "#FBF6EC",
          100: "#F5E9D2",
          200: "#ECD6AE",
          300: "#E2C088",
          400: "#DAAA63",
          500: "#C48F45",
          600: "#8E642D",
          700: "#74522A",
          800: "#5A3F21",
          900: "#45301A",
          950: "#2C1810",
        },
        // Neutros quentes (substituem zinc/gray). 900 é o marrom da marca.
        areia: {
          50: "#FBF7F1",
          100: "#F6EEE3",
          200: "#EADFCF",
          300: "#D8C8B3",
          400: "#B5A08A",
          500: "#8C7965",
          600: "#6C5B4B",
          700: "#524337",
          800: "#3B2E25",
          900: "#2C1810",
          950: "#1E100A",
        },
      },
      boxShadow: {
        // Sombra de livro "em pé" na estante.
        livro: "6px 10px 18px -6px rgba(44, 24, 16, 0.45), 1px 1px 3px rgba(44, 24, 16, 0.2)",
        estante: "0 18px 30px -18px rgba(44, 24, 16, 0.35)",
      },
    },
  },
  plugins: [typography],
  darkMode: "class",
} satisfies Config;
