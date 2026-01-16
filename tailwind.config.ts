import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#a07bea",
        "primary-dark": "#6B46C1",
        "secondary": "#9F7AEA",
        "background-light": "#F7FAFC",
        "background-dark": "#191e2e",
        "surface-light": "#FFFFFF",
        "surface-dark": "#232936",
        "text-main": "#131117",
        "text-muted": "#6f6487",
      },
      fontFamily: {
        "display": ["var(--font-manrope)", "sans-serif"],
        "body": ["var(--font-noto-sans)", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #F7FAFC 0%, #E9D8FD 100%)',
        'primary-gradient': 'linear-gradient(135deg, #6B46C1, #9F7AEA)',
      }
    },
  },
  plugins: [],
};
export default config;
