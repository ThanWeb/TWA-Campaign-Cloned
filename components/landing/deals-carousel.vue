<template>
    <div 
        class="deals-carousel rounded-lg overflow-hidden text-gray-darker"
        :class="carouselIndex === activeCarousel ? 'active' : 'inactive'" 
    >
        <div
            v-if="carouselIndex === activeCarousel || !isViewportDesktop()"
            class="bg-white rounded-lg main-content"
        >
            <div>
                <div class="relative">
                    <div 
                        class="absolute flex justify-between px-4 w-full z-10"
                        style="margin-top: 25%; margin-bottom: 25%;"
                    >
                        <button 
                            type="button"
                            class="flex swipe-button w-12 h-12 swipe-button items-center justify-center rounded-full cursor-pointer"
                            @click="prevImage"
                        >
                            <img 
                                src="/images/icons/icon-left.svg" 
                                alt="Swipe left"
                            >
                        </button>
                        <button 
                            type="button"
                            class="flex swipe-button w-12 h-12 swipe-button items-center justify-center rounded-full cursor-pointer"
                            @click="nextImage"
                        >
                            <img 
                                src="/images/icons/icon-right.svg" 
                                alt="Swipe right"
                            >
                        </button>
                    </div>
                </div>
                <div class="top-0 overflow-hidden image-height">
                    <carousel 
                        :ref="`imageCarousel-${carouselIndex}`"
                        :settings="carouselSettings"
                        :wrap-around="true"
                    >
                        <slide
                            v-for="(image, index) in images"
                            :key="index" 
                        >
                            <img
                                :src="`/images/main-deals/${image}`" 
                                :alt="heading"
                                class="carousel-cell"
                            >
                        </slide>
                    </carousel>
                </div>
            </div>
            <div class="lg:flex flex-wrap lg:px-6 lg:py-4 gap-x-0 items-center">
                <div class="px-4 pt-4 lg:p-0 lg:pr-8 lg:order-1 lg:w-1/2">
                    <span clas="uppercase text-xs leading-5">
                        {{ location }}
                    </span>
                    <h3 class="text-xl font-semibold mb-1 overflow-hidden text-ellipsis box-orient-vertical line-clamp-2 text-gray-darkest">
                        {{ heading }}
                    </h3>
                    <p class="text-base mb-4 overflow-hidden text-ellipsis box-orient-vertical line-clamp-2">
                        {{ description }}
                    </p>
                </div>
                <div class="px-4 lg:px-0 lg:order-3 lg:w-full">
                    <button 
                        class="inclusions-button relative font-semibold flex gap-x-2 w-full"
                        :class="{'active' : isInclusionsShowed}"
                        @click="toggleInclusions"
                    >
                        <span class="flex gap-x-2 py-1 px-3 rounded-full ">
                            <span class="text-gray-darkest">Inclusions</span>
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
                <div class="px-4 pb-4 lg:px-0 lg:order-2 lg:w-1/2 lg:flex items-center lg:h-full lg:p-0 justify-between">
                    <div class="lg:flex flex-col gap-y-1">
                        <p class="mt-4 lg:m-0 text-xs">
                            Valid for travel until 
                            <span class="font-semibold">
                                {{ validUntil }}
                            </span>
                        </p>
                        <p class="mt-4 lg:m-0 text-xs">
                            <span>
                                {{ days }}
                            </span>
                            days starts from
                            <span class="block my-1 lg:m-0 lg-m:-0 text-xl font-semibold text-gray-darkest">
                                ${{ price }}
                            </span>
                            per person, twin share
                        </p>
                    </div>
                    <div class="lg:w-1/2">
                        <NuxtLink 
                            :to="url"
                            target="_blank"
                            class="block w-full md:py-2 md:mt-3 lg:w-full lg:px-0 lg:mt-0 leading-6 rounded-3xl see-more-button uppercase mt-4 py-3 font-semibold tracking-widest text-center"
                        >
                            See More
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="cover-content items-center justify-center text-ellipsis whitespace-nowrap overflow-hidden h-full relative cursor-pointer bg-cover"
            :style="`background-image:url('/images/main-deals/${images[0]}');`"
        >
            <h2 class="text-white text-2xl leading-6 font-semibold tracking-widest uppercase truncate absolute top-full left-full inset-x-auto py-6">
                {{ heading }} 
            </h2>
        </div>
    </div>
</template>

<script lang="ts">
import { Carousel, Slide } from 'vue3-carousel'

export default {
    components: {
        'carousel': Carousel,
        'slide': Slide
    },
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
        },
        carouselIndex: {
            type: Number,
            default: 0
        },
        activeCarousel: {
            type: Number,
            default: 0
        },
        url: {
            type: String,
            default: 'https://www.10travlr.com.au/'
        }
    },
    data () {
        return {
            isInclusionsShowed: false,
            carouselSettings: {
                itemsToShow: 1,
                snapAlign: 'start'
            }
        }
    },
    methods: {
        toggleInclusions() {
            this.isInclusionsShowed = !this.isInclusionsShowed
        },
        prevImage() {
            (this.$refs[`imageCarousel-${this.carouselIndex}`] as any).prev()
        },
        nextImage() {
            (this.$refs[`imageCarousel-${this.carouselIndex}`] as any).next()
        },
        isViewportDesktop() {
            if (process.client) { 
                return screen.width > 1024
            }
            return false
        }
    }
}
</script>

<style lang="scss" scoped>
    .deals-carousel {
        &.active {
            height: fit-content;
        }

        .cover-content {
            display: none;

            h2 {
                height: 100%;
                writing-mode: vertical-rl;
                transform: rotate(180deg);
                transform-origin: (0 0);
                line-height: 80px;
            }
        }

        @media screen and (min-width: 1024px) { 
            min-width: 80px;
            .image-height {
                height: 460px;
            }

            &.inactive {
                .cover-content {
                    display: block;
                }    
            }

            &.active {
                .cover-content {
                    display: none;
                }
            }


        }
    }
    .swipe-button {
        background: rgba(0, 0, 0, 0.4);

        &:hover {
            background: $primary-color;
        }
    }

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

        &:hover {
            span {
                background-color: $primary-color;
                color: $white;
            }

            img {
                filter: none;
            }
        }
    }

    .see-more-button {
        font-size: 15px;
        color: $primary-color;
        border: 1px solid $primary-color;

        &:hover {
            background-color: $primary-color;
            color: $white;
        }
    }
</style>
