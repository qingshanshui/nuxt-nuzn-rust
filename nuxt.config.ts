// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    css: ["~/assets/css/app.css"],
    app: {
        head: {
            link: [{ rel: 'stylesheet', href: "https://pan.nuzn.cn/v1/download?path=/zui/1.10.0/css/zui.min.css" },
            { rel: 'icon', type: 'image/x-icon', href: 'https://pan.nuzn.cn/v1/download?path=/image/favicon.ico' }],
            script: [{ type: 'text/javascript', src: 'https://pan.nuzn.cn/v1/download?path=/jquery/3.63/jquery-3.6.3.min.js' },
            { type: 'text/javascript', src: 'https://pan.nuzn.cn/v1/download?path=/zui/1.10.0/js/zui.min.js' }],
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
        }
    },
    build: {
        transpile:
            process.env.NODE_ENV === 'production'
                ? [
                    'naive-ui',
                    'vueuc',
                    '@css-render/vue3-ssr',
                    '@juggle/resize-observer'
                ]
                : ['@juggle/resize-observer']
    },
    vite: {
        optimizeDeps: {
            include:
                process.env.NODE_ENV === 'development'
                    ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
                    : []
        }
    }
})