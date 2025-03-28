// tailwind.config.js
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            animation: {
                blinkCursor: "blinkCursor 0.8s steps(1) infinite",
            },
            keyframes: {
                blinkCursor: {
                    "50%": { opacity: "0" },
                },
            },
            colors: {
                "off-black": "#121416",
                "bastion-purple": "#211c84"
            },
        },
    },
    plugins: [],
};