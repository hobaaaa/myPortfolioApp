import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06111d",
        surface: "#0a1828",
        line: "rgba(255,255,255,0.12)",
        accent: "#4DB6F4",
        accentStrong: "#7BD2FF",
        accentDeep: "#1451B5",
        mist: "#D7E9F6"
      },
      fontFamily: {
        sans: ["Aptos", "Segoe UI", "Helvetica Neue", "sans-serif"],
        display: [
          "Iowan Old Style",
          "Palatino Linotype",
          "Book Antiqua",
          "Georgia",
          "serif"
        ]
      },
      boxShadow: {
        panel: "0 28px 90px rgba(4, 12, 24, 0.24)",
        soft: "0 18px 45px rgba(12, 58, 124, 0.22)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(77,182,244,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(77,182,244,0.12) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
