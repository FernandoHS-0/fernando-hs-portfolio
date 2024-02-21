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
        "base-dark": "#07080A",
        "primary-lavender": "#758BFF",
      },
      fontFamily: {
        "primary-font": "Epilogue",
        "titles-font": "Kanit",
      },
    },
  },
  plugins: [],
};
export default config;
