import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "10%": { transform: "translateY(0)", opacity: "1" },
          "90%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      animation: {
        "slide-up": "slideUp 2s ease-in-out infinite",
        "slide-left": "slide-left 8s linear infinite",
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
