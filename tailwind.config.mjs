import animations from "@midudev/tailwind-animations"

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
        "background-shine": "background-shine 3s linear infinite",
        "move-left": "move-left 1s linear infinite"
      },
      "keyframes": {
        "background-shine": {
          "from": {
            "backgroundPosition": "0 0"
          },
          "to": {
            "backgroundPosition": "-200% 0"
          }
        },
        "move-left": {
          "0%": {
            "transform": "translateX(0%)"
          },
          "50%": {
            "transform": "translateX(0.5%)"
          },
          "100%": {
            "transform": "translateX(0%)"
          }
        }
      }
    },
  },
  plugins: [animations],
};
