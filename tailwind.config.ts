import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FC842D",
        secondary: "#9B9FAA",
        textColor: "#212121",
        pageBg: "#f0f1f3",
      },
    },
  },
  plugins: [],
} satisfies Config;
