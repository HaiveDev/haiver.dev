/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Megrim: ["Megrim", "sans-serif"],
      },
      "animation": {
        "background-shine": "background-shine 3s linear infinite"
      },
      "keyframes": {
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        }
      }
    },
  },
  plugins: [],
};
