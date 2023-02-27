// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Western Australia Holiday Packages: Perth, The Kimberley & More',
            meta: [
                { name: 'description', content: 'Book your Western Australia holiday with tours, activities, flights and accommodation in East Kimberley, Perth, Rottnest Island and more epic WA holiday locations.' }
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
