<template>
    <div class="article-card lg:w-2/4 rounded-lg overflow-hidden cursor-pointer hover-zoom-image">
        <NuxtLink :to="articleLink">
            <div class="md:h-80 lg:h-56 md:w-full md:object-cover flex items-center overflow-hidden">
                <img 
                    :src="`/images/articles/${image}`" 
                    :alt="title"
                >
            </div>
            <div class="p-4 xl:px-8 lg:py-6 lg:flex lg:gap-x-2 gap-x-6 items-center">
                <div class="">
                    <p class="uppercase text-xs leading-5 tracking-widest text-gray-dark">
                        {{ category }}
                    </p>
                    <h3 class="text-xl font-semibold mb-2">
                        {{ title }}
                    </h3>
                </div>
                <button class="block w-full leading-6 rounded-3xl read-more-button uppercase py-3 font-semibold tracking-widest text-center mt-4 md:w-fit md:px-6 md:py-2 md:mt-3 lg:min-w-fit lg:px-4 lg:h-10 lg:py-0 lg:leading-10 lg:mt-0 text-gray-dark">
                    Read More
                </button>
            </div>
        </NuxtLink>
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

        &:hover {
            .read-more-button {
                background-color: $primary-color;
                border: 1px solid $primary-color;
                color: white;
            }
        }
    }
    .read-more-button {
        font-size: 15px;
        color: $gray-darker;
        border: 1px solid $gray-darker;
    }
</style>
