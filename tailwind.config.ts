import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      brand: {
        100: "#d87d4a",
      },
      gray: {
        100: "#ffffff",
        200: "#fafafa",
        300: "#f1f1f1",
        800: "#191919",
        900: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
