<template>
    <div class="my-4 lg:my-6 px-4 sm:px-6 lg:px-0">
        <img 
            :src="`/images/articles/${image}`" 
            :alt="imageDescription"
            class="mb-2 article-image"
        >
        <p class="text-xs font-normal text-gray-darkest">
            {{ imageDescription }}
        </p>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        image: {
            type: String,
            default: 'article-01.png'
        },
        imageDescription: {
            type: String,
            default: 'Lorem ipsum image description'
        }
    }
}
</script>

<style lang="scss" scoped>
    .article-image {
        @media screen and (min-width: 640px) {
            max-width: 600px;
            max-height: 600px;
        }
    }
</style>
