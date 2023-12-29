/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['poppins', 'sans-serif'],
            },
            backgroundImage: {
                'text-gradient': 'linear-gradient(to right, #4b0082, #c084fc, #8f00ff, #c084fc, #4b0082)',
            },
        },
    },
    plugins: [],
}