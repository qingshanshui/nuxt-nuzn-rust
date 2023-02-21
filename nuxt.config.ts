// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    css: ["~/assets/css/app.css"],
    devServer: {
        port: 8003,
    },
    app: {
        head: {
            link: [
                { rel: 'stylesheet', href: "https://pan.nuzn.cn/v1/download?path=/zui/1.10.0/css/zui.min.css" },
                { rel: 'icon', type: 'image/x-icon', href: 'https://pan.nuzn.cn/v1/download?path=/image/favicon.ico' },
                { rel: 'stylesheet', href: "https://blog.nuzn.cn/static/wangEditor/prism.css" },
                { rel: 'stylesheet', href: "https://unpkg.com/@wangeditor/editor@latest/dist/css/style.css" }


            ],
            script: [
                { type: 'text/javascript', src: 'https://pan.nuzn.cn/v1/download?path=/jquery/3.63/jquery-3.6.3.min.js' },
                { type: 'text/javascript', src: 'https://pan.nuzn.cn/v1/download?path=/zui/1.10.0/js/zui.min.js' },
                { type: 'text/javascript', src: 'https://blog.nuzn.cn/static/wangEditor/prism.js' },
                { type: 'text/javascript', src: 'https://blog.nuzn.cn/static/wangEditor/prism-core.js' },
                { type: 'text/javascript', src: 'https://blog.nuzn.cn/static/wangEditor/prism-autoloader.js' },
                { type: 'text/javascript', src: 'https://unpkg.com/@wangeditor/editor@latest/dist/index.js' },

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
        }
    },
})
