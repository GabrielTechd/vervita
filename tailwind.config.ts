import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#0C0C0C",
        "texto": "#f1f1f1",
        "primaria": "#D1BB9E",
        "secundaria": "#EAD8C0",
      },
    },
  },
  plugins: [],
};
export default config;
