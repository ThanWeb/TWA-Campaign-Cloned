<template>
    <div class="category-card">
        <img 
            :src="`/images/categories/${image}`" 
            :alt="heading"
            class="mb-3 rounded-lg"
        >
        <h3 class="text-xl font-semibold mb-1">
            {{ heading }}
        </h3>
        <p class="text-base category-desc mb-4">
            {{ description }}
        </p>
    </div>
</template>

<script lang="ts">

export default {
    props: {
        heading: {
            type: String,
            default: 'Lorem ipsum heading'
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolor sit amet text'
        },
        image: {
            type: String,
            default: 'category-01-png'
        }
    }
}
</script>

<style lang="scss" scoped>
    .category-desc {
        color: $gray-med;
    }
</style>
