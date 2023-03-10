// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    css: ["~/assets/css/app.css"],
    devServer: {
        port: 8003,
    },
    app: {
        head: {
            title: "rust中文网",
            link: [
                { rel: 'stylesheet', href: "https://pan.nuzn.cn/v1/download?path=/zui/1.10.0/css/zui.min.css" },
                { rel: 'icon', type: 'image/x-icon', href: 'https://pan.nuzn.cn/v1/download?path=/image/favicon.ico' },
                { rel: 'stylesheet', href: "https://pan.nuzn.cn/v1/download?path=/wangeditor/5.1.23/css/style.css" },
            ],
            script: [
                { type: 'text/javascript', src: 'https://pan.nuzn.cn/v1/download?path=/jquery/3.63/jquery-3.6.3.min.js' },
                { type: 'text/javascript', src: 'https://pan.nuzn.cn/v1/download?path=/zui/1.10.0/js/zui.min.js' },
                { type: 'text/javascript', src: 'https://blog.nuzn.cn/static/wangEditor/prism.js' },
                { type: 'text/javascript', src: 'https://blog.nuzn.cn/static/wangEditor/prism-core.js' },
                { type: 'text/javascript', src: 'https://blog.nuzn.cn/static/wangEditor/prism-autoloader.js' },
            ],
        },
    },
    build: {
        transpile:
            process.env.NODE_ENV === 'production'
                ? [
                    'naive-ui',
                    'vueuc',
                    '@css-render/vue3-ssr',
                    '@juggle/resize-observer',
                    '@wangeditor/editor',
                    '@wangeditor/editor-for-vue'
                ]
                : ['@juggle/resize-observer']
    },
    vite: {
        optimizeDeps: {
            include:
                process.env.NODE_ENV === 'development'
                    ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
                    : []
        },
        server: {
            proxy: {
                "/v1/": 'http://127.0.0.1:8002'
            }
        }
    },
})
