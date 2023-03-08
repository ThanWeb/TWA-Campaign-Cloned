<template>
    <div class="article-card">
        <img 
            :src="`/images/articles/${image}`" 
            :alt="title"
        >
        <p>
            {{ category }}
        </p>
        <h3>
            {{ title }}
        </h3>
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
