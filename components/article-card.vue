<template>
    <div class="article-card rounded-lg overflow-hidden">
        <img 
            :src="`/images/articles/${image}`" 
            :alt="title"
        >
        <div class="p-4">
            <p class="uppercase text-xs leading-5 tracking-widest">
                {{ category }}
            </p>
            <h3 class="text-xl font-semibold mb-2">
                {{ title }}
            </h3>
            <NuxtLink
                class="block w-full leading-6 rounded-3xl read-more-button uppercase py-3 font-semibold tracking-widest text-center"
                :to="articleLink"
                target="_blank"
            >
                Read More
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    props: {
        title: {
            type: String,
            default: 'Lorem ipsum title'
        },
        category: {
            type: String,
            default: 'Lorem ipsum & dolor sit amet'
        },
        image: {
            type: String,
            default: 'article-01-png'
        },
        articleLink: {
            type: String,
            default: '/'
        }
    }
}
</script>

<style lang="scss" scoped>
    .article-card {
        box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.04), 0px 10px 10px -5px rgba(0, 0, 0, 0.02);
    }
    .read-more-button {
        font-size: 15px;
        color: $gray-darker;
        border: 1px solid $gray-darker;
    }
</style>
