import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",  // Ez kell a dark mode-hoz
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;