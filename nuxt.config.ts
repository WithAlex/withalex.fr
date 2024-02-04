export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    tailwindcss: {
        configPath: 'tailwind.config.js',
    },
    nitro: {
        compressPublicAssets: {
            brotli: true,
            gzip: true
        }
    },
})
