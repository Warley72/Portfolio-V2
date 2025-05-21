import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-ibm)", "monospace"],
      },
      colors: {
        muted: {
          foreground: "#A4A5AD",
        },
      },
    },
  },
  plugins: [],
};

export default config;
