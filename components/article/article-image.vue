<template>
    <div class="my-10 px-4">
        <img 
            :src="`/images/articles/${image}`" 
            :alt="imageDescription"
            class="mb-2"
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
