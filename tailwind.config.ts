import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      mainBg: "var(--main-bg)",
      mainText: "var(--main-text)",
      primary: "var(--primary)",
      fade: "var(--fade)",
      fadePrimary: "var(--fade-primary)",
      shadow: "var(--shadow)",
    },
  },
  plugins: [],
};
export default config;
