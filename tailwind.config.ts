import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAF8F5",
        card: "#FFFFFF",
        navy: "#17143C",
        peach: "#FFDCCF",
        lavender: "#D8D3FF",
        border: "#E8E5E1",
        text: "#1B1B1B",
        muted: "#6B6878",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
