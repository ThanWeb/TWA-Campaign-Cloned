<template>
    <div class="deals-card rounded-lg overflow-hidden">
        <img 
            :src="`/images/secondary-deals/${image}`" 
            :alt="heading"
        >
        <div class="p-4">
            <span class="uppercase text-xs leading-5">  
                {{ location }}
            </span>
            <h3 class="text-xl font-semibold mb-2 overflow-hidden text-ellipsis box-orient-vertical line-clamp-2">
                {{ heading }}
            </h3>
            <p class="text-base mb-3 overflow-hidden text-ellipsis box-orient-vertical line-clamp-1">
                {{ description }}
            </p>
            <p class="text-xs mb-2">
                Starts from<br>
                <span class="text-xl font-semibold">
                    ${{ price }}
                </span>
            </p>
            <button class="w-full leading-6 rounded-3xl view-package-button uppercase py-3 font-semibold tracking-widest text-center">
                View Package
            </button>
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
        }
    }
}
</script>

<style lang="scss" scoped>
    .deals-card {
        box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.04), 0px 10px 10px -5px rgba(0, 0, 0, 0.02);
    }

    .view-package-button {
        font-size: 15px;
        color: $gray-darker;
        border: 1px solid $gray-darker;
    }
</style>
