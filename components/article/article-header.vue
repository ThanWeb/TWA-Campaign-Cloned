<template>
    <div>
        <div class="pt-10">
            <p class="text-center text-gray-darker font-normal mb-3 text-base tracking-widest uppercase">
                {{ category }}
            </p>
            <h1 class="text-center text-gray-darkest font-normal mb-6 text-2xl tracking-widest uppercase px-4 leading-6 max-w-screen-sm mx-auto">
                {{ title }}
            </h1>
            <img 
                class="main-image w-full object-cover"
                :src="`/images/articles/${image}`" 
                :alt="title"
            >
            <p class="text-xs text-gray-darker font-normal my-2 px-4 sm:px-6">
                {{ imageDescription }}
            </p>
        </div>
        <div>
            <div class="header-border px-4 sm:px-6 pt-10 text-gray-darkest">
                <p class="mb-1 font-bold text-base">
                    {{ writer }}
                </p>
                <p class="text-sm font-normal">
                    {{ date }}
                </p>
            </div>
            <p class="text-gray-darkest my-6 px-4 sm:px-6 text-2xl font-normal">
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
    }
</style>
