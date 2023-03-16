<template>
    <div>
        <div class="pt-10 lg:pt-8 text-gray-darkest font-normal">
            <p class="text-center mb-3 text-base tracking-widest uppercase">
                {{ category }}
            </p>
            <h1 class="text-center mb-6 lg:mb-10 text-2xl lg:text-3xl tracking-widest uppercase px-4 leading-6 lg:leading-8 max-w-screen-sm mx-auto">
                {{ title }}
            </h1>
            <img 
                class="main-image w-full object-cover"
                :src="`/images/articles/${image}`" 
                :alt="title"
            >
            <p class="text-xs my-3 px-4 sm:px-6 lg:px-0">
                {{ imageDescription }}
            </p>
        </div>
        <div class="lg:flex justify-center lg:mt-16 text-gray-darkest">
            <div class="header-border px-4 sm:px-6 lg:px-0 pt-10 lg:pt-0 lg:w-60">
                <p class="mb-1 font-bold text-base">
                    {{ writer }}
                </p>
                <p class="text-sm font-normal">
                    {{ date }}
                </p>
            </div>
            <p class="my-6 lg:mt-0 px-4 sm:px-6 lg:px-0 text-2xl font-normal w-article">
                {{ summary }}
            </p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        category: {
            type: String,
            default: 'Lorem ipsum category'
        },
        title: {
            type: String,
            default: 'Lorem ipsum title'
        },
        image: {
            type: String,
            default: 'article-01.png'
        },
        imageDescription: {
            type: String,
            default: 'Lorem ipsum image description'
        },
        writer: {
            type: String,
            default: 'Lorem ipsum N. A.'
        },
        date: {
            type: String,
            default: '29 June 2022'
        },
        summary: {
            type: String,
            default: 'Lorep ipsum dolor amet description and another description'
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-image {
        @media screen and (min-width: 640px) {
            height: 360px;
        }
        
        @media screen and (min-width: 1024px) {
            height: 480px;
        }

        @media screen and (min-width: 1220px) {
            height: 560px;
        }
    }
</style>
