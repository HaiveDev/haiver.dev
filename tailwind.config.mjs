/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['poppins', 'sans-serif'],
                'Megrim' : ['Megrim','sans-serif'],
                'Averia' : ['Averia Sans Libre','sans-serif']
            },
        },
    },
    plugins: [],
}