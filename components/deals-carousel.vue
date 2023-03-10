<template>
    <div class="deals-carousel rounded-lg overflow-hidden bg-white">
        <div>
            <div class="relative">
                <div 
                    class="absolute flex justify-between px-4 w-full"
                    style="margin-top: 25%; margin-bottom: 25%;"
                >
                    <button 
                        type="button"
                    >
                        <img 
                            src="images/icons/carousel-arrow-left.svg" 
                            alt="Swipe left"
                        >
                    </button>
                    <button 
                        type="button"
                    >
                        <img 
                            src="images/icons/carousel-arrow-right.svg" 
                            alt="Swipe right"
                        >
                    </button>
                </div>
            </div>
            <figure class="flex">
                <img
                    v-for="(image, index) in images"
                    :key="index" 
                    :src="`/images/main-deals/${image}`" 
                    :alt="heading"
                    class="carousel-cell"
                >
            </figure>
        </div>
        <div class="px-4 pt-4">
            <span clas="uppercase text-xs leading-5">
                {{ location }}
            </span>
            <h3 class="text-xl font-semibold mb-1 overflow-hidden text-ellipsis box-orient-vertical line-clamp-2">
                {{ heading }}
            </h3>
            <p class="text-base mb-4 overflow-hidden text-ellipsis box-orient-vertical line-clamp-2">
                {{ description }}
            </p>
        </div>
        <div class="px-4">
            <button 
                class="inclusions-button relative font-semibold flex gap-x-2 w-full"
                :class="{'active' : isInclusionsShowed}"
                @click="toggleInclusions"
            >
                <span class="flex gap-x-2 py-1 px-3 rounded-full ">
                    <span>Inclusions</span>
                    <img 
                        :src="isInclusionsShowed ? '/images/icons/icon-up.svg' : '/images/icons/icon-down.svg'" 
                        alt="Inclusions"
                        class="w-4"
                    >
                </span>
            </button>
            <ul 
                class="mt-4 list-disc text-base pl-5"
                :class="{'hidden' : !isInclusionsShowed}"
            >
                <li 
                    v-for="(detail, index) in details"
                    :key="index"
                >
                    {{ detail }}
                </li>
            </ul>
        </div>
        <div class="px-4 pb-4">
            <p class="mt-4 text-xs">
                Valid for travel until 
                <span class="font-semibold">
                    {{ validUntil }}
                </span>
            </p>
            <p class="mt-4 text-xs">
                <span>
                    {{ days }}
                </span>
                days starts from
                <span class="block my-1 text-xl font-semibold">
                    ${{ price }}
                </span>
                per person, twin share
            </p>
            <button class="w-full leading-6 rounded-3xl see-more-button uppercase mt-4 py-3 font-semibold tracking-widest text-center">
                See More
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
        images: {
            type: Array<string>,
            default: ['deal-1-image-01.png']
        },
        details: {
            type: Array<string>,
            default: ['Lorem ipsum dolor amet']
        },
        validUntil: {
            type: String,
            default: '31 March 2023'
        },
        days: {
            type: Number,
            default: 1
        },
        price: {
            type: String,
            default: '100'
        }
    },
    data () {
        return {
            isInclusionsShowed: false
        }
    },
    methods: {
        toggleInclusions() {
            this.isInclusionsShowed = !this.isInclusionsShowed
        }
    }
}
</script>

<style lang="scss" scoped>
    .inclusions-button {
        > span {
            background-color: $gray-lightest;
            color: $gray-darker;
            z-index: 2;
        }

        img {
            filter: invert(1);
        }

        &.active {
            &:before {
                content: "";
                display: block;
                position: absolute;
                left: 0;
                right: 0;
                top: 50%;
                height: 1px;
                background: $gray-lighter;
                z-index: 1;
            }
        }
    }

    .see-more-button {
        font-size: 15px;
        color: $gray-darker;
        border: 1px solid $gray-darker;
    }
</style>
