<template>
    <div class="article-card lg:w-2/4 rounded-lg overflow-hidden">
        <NuxtLink :to="articleLink">
            <img 
                :src="`/images/articles/${image}`" 
                :alt="title"
                class="md:h-80 lg:h-56 md:w-full md:object-cover"
            >
            <div class="p-4 xl:px-8 lg:py-6 lg:flex gap-x-6 items-center">
                <div class="lg:w-9/12 xl:w-10/12">
                    <p class="uppercase text-xs leading-5 tracking-widest">
                        {{ category }}
                    </p>
                    <h3 class="text-xl font-semibold mb-2">
                        {{ title }}
                    </h3>
                </div>
                <button class="block w-full lg:w-5/12 xl:w-4/12 lg:h-10 lg:py-0 leading-6 lg:leading-10 rounded-3xl read-more-button uppercase py-3 font-semibold tracking-widest text-center">
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
        cursor: pointer;

        img {
            transition: transform .5s;
        }

        &:hover {
            img {
                transform: scale(1.05);
            }
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
