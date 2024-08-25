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
        "background": "#F6F5F2",
        "texto": "#000",
        "primaria": "#D1BB9E",
        "secundaria": "#EAD8C0",
      },
    },
  },
  plugins: [],
};
export default config;
