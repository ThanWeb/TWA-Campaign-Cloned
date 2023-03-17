<template>
    <div class="category-card">
        <NuxtLink
            :to="`${url}`"
            target="_blank"
        >
            <div class="overflow-hidden mb-3 rounded-lg zoom-image">
                <img 
                    :src="`/images/categories/${image}`" 
                    :alt="heading"
                >
            </div>
            <h3 class="text-xl font-semibold mb-1 text-gray-darkest">
                {{ heading }}
            </h3>
            <p class="text-base category-desc mb-4">
                {{ description }}
            </p>
        </NuxtLink>
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
        },
        url: {
            type: String,
            default: '10travlr.com.au'
        }
    }
}
</script>

<style lang="scss" scoped>
    .category-card {
        cursor: pointer;

        img {
            transition: transform .5s;
        }

        &:hover {
            img {
                transform: scale(1.05);
            }

            h3 {
                text-decoration: underline;
            }
        }
    }
    .category-desc {
        color: $gray-med;
    }
</style>
