// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Watch Out',
            meta: [
                { name: 'description', content: 'Let\'s find watch-able movies' }
            ],
            htmlAttrs: {
                lang: 'en'
            }
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    components: {
        dirs: [
            {
                path: '~/components',
                global: true
            }
        ]
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/_variables.scss" as *;'
                }
            }
        }
    }
})
