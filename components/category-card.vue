<template>
    <div class="category-card">
        <img 
            :src="`/images/categories/${image}`" 
            :alt="heading"
        >
        <h3>
            {{ heading }}
        </h3>
        <p>
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

</style>
