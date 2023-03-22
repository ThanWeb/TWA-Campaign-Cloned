<template>
    <div class="deals-card rounded-lg overflow-hidden hover-zoom-image lg:my-6">
        <div class="overflow-hidden lg:h-64 object-contain w-full">
            <img 
                :src="`/images/secondary-deals/${image}`" 
                :alt="heading"
                class="w-full lg:rounded-lg"
            >
        </div>
        <div class="p-4 lg:flex flex-row lg:text-left items-center gap-x-8">
            <div class="lg:w-7/12">
                <span class="uppercase text-xs leading-5">  
                    {{ location }}
                </span>
                <h3 class="text-xl font-semibold mb-2 overflow-hidden text-ellipsis box-orient-vertical line-clamp-2 text-gray-darkest lg:h-14">
                    {{ heading }}
                </h3>
                <p class="text-base mb-3 overflow-hidden text-ellipsis box-orient-vertical line-clamp-1">
                    {{ description }}
                </p>
            </div>
            <div class="lg:w-5/12">
                <p class="text-xs mb-2">
                    Starts from<br>
                    <span class="text-xl font-semibold text-gray-darkest">
                        ${{ price }}
                    </span>
                </p>
                <NuxtLink 
                    :to="articleLink"
                    target="_blank"
                    class="w-full block leading-6 rounded-3xl view-package-button uppercase py-3 font-semibold tracking-widest text-center lg:mt-2 lg:py-2"
                >
                    View Package
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        location: {
            type: String,
            default: 'Perth'
        },
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
            default: 'second-deal-image-01.png'
        },
        price: {
            type: String,
            default: '100'
        },
        articleLink: {
            type: String,
            default: '/'
        }
    }
}
</script>

<style lang="scss" scoped>
    .deals-card {
        box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.04), 0px 10px 10px -5px rgba(0, 0, 0, 0.02);

        .view-package-button {
            font-size: 15px;
            color: $gray-darker;
            border: 1px solid $gray-darker;
        }

        &:hover {
            .view-package-button {
                background-color: $primary-color;
                border: 1px solid $primary-color;
                color: white;
            }
        }
    }
</style>
