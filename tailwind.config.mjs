import animations from "@midudev/tailwind-animations"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Minecraft: ["minecraft", "sans-serif"],
      },
      colors:{
        'color-background': '#222222',
        'color-primary': '#EEEEEE',
        'color-secondary': '#BBBBBB',
        'color-subtle': '#888888',
        'color-blur':'#222222d1',

        'gray-border': '#ffffff1a',
        'yellow-achievement' : '#ffff00'
      },
      "animation": {
        "background-shine": "background-shine 3s linear infinite",
        "move-left": "move-left 1s linear infinite",
        "slide-enter-achievement": "slide-enter-achievement 0.6s cubic-bezier( 0.55, 0.085, 0.68, 0.53 )",
        "slide-exit-achievement": "slide-exit-achievement 0.6s cubic-bezier( 0.55, 0.085, 0.68, 0.53 ) "
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
        },
        "slide-enter-achievement": {
          "0%": {
            "transform": "translateX(400px)"
          },
          "100%": {
            "transform": "translateX(0)"
          }
        },
        "slide-exit-achievement": {
          "0%": {
            "transform": "translateX(0px)"
          },
          "100%": {
            "transform": "translateX(400px)"
          }
        }
      }
    },
  },
  plugins: [animations],
};
