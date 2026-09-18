import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1F2A44",
          light: "#33456B",
        },
        accent: "#C6A75E",
        bg: {
          DEFAULT: "#E8DCC8",
          light: "#F5F0E6",
        },
        text: {
          DEFAULT: "#1A1F2E",
          muted: "#6B6459",
        },
        border: {
          DEFAULT: "#D9CBAE",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
