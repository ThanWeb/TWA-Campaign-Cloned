<template>
    <div 
        class="video-card h-80 lg:h-64 rounded-lg overflow-hidden cursor-pointer"
        :class="index === 0 ? 'main-video' : `secondary-video video-${index}`"
    >
        <div 
            :style="`background-image:url('/images/thumbnails/${thumbnail}');`"
            class="h-full video-background bg-cover bg-center md:bg-top lg:bg-center flex flex-col justify-center items-center text-white text-center md:px-8 lg:px-4"
            @click="toggleModal"
        >
            <h3 
                class="font-normal tracking-widest"
                :class="index === 0 ? 'main-video-heading font-light mb-2 px-4 lg:px-32' : 'text-xl mb-1 px-10 lg:px-0'"
            >
                {{ heading }}
            </h3>
            <p 
                class="px-10 md:px-16 lg:px-6 text-sm"
                :class="index === 0 ? 'mb-6 uppercase tracking-widest lg:px-32' : 'mb-4'"
            >
                {{ description }}
            </p>
            <button 
                class="play-button uppercase text-sm leading-6 tracking-widest flex items-center gap-x-3 py-2 px-6 rounded-3xl overflow-hidden"
                type="button"
            >
                {{ index === 0 ? 'Watch Video' : 'Watch' }}
                <img 
                    src="/images/icons/icon-play.svg" 
                    :alt="`Play ${heading}`"
                >
            </button>
        </div>
        <div 
            v-if="isModalShowed"
            class="fixed z-50 inset-0 bg-black/[.8] py-6 flex flex-col"
            @click="toggleModal"
        >
            <button 
                class="flex items-center justify-end mx-6"
                type="button"
            >
                <img 
                    src="/images/icons/close.svg" 
                    alt="`Close Modal`"
                >
            </button>
            <div 
                class="h-full w-full flex justify-center"
            >
                <iframe 
                    allowfullscreen="true"
                    allow="autoplay, fullscreen"
                    :src="`${videoURL}?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1`"
                    scrolling="no"
                    class="my-auto mx-6 md:mx-12 lg:mx-0 w-full lg:w-7/12 aspect-video"
                />
            </div>
        </div>
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
        thumbnail: {
            type: String,
            default: 'thumbnail-1.jpeg'
        },
        videoURL: {
            type: String,
            default: 'https://www.youtube.com/embed/uWrf2vt-7P8'
        },
        index: {
            type: Number,
            default: 0
        }
    }, 
    data () {
        return {
            isModalShowed: false
        }
    },
    methods: {
        toggleModal() {
            this.isModalShowed = !this.isModalShowed
        } 
    }
}
</script>

<style lang="scss" scoped>
    .video-card {
        .video-background {
            background-size: cover;
            transition: .4s;
        }

        .play-button {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
        }

        &:hover {
            @media screen and (min-width: 1024px) {
                .video-background {
                    background-size: 155%;
                }
            }

            @media screen and (min-width: 1280px) {
                .video-background {
                    background-size: 115%;
                }
            }

            .play-button {
                background: $white;
                color: $black;
                
                img {
                    filter: invert(1);
                }
            }
        }

        @media screen and (min-width: 1024px) {
            .video-background {
                background-size: 150%;
            }
        }

        @media screen and (min-width: 1280px) {
            .video-background {
                background-size: 110%;
            }
        }
    }
    .main-video {
        height: 440px;
        grid-column-start: 1;
        grid-column-end: 10;

        &-heading {
            font-size: 32px;
            line-height: 32px;
        }

        @media screen and (min-width: 768px) {
            &-heading {
                font-size: 40px;
                line-height: 40px;
            }
        }

        @media screen and (min-width: 1024px) {
            & {
                height: 480px;
            }
        }
    }

    .secondary-video {
        grid-row-start: 2;

        &.video-1 {
            grid-column-start: 1;
            grid-column-end: 4;
        }

        &.video-2 {
            grid-column-start: 4;
            grid-column-end: 7;
        }

        &.video-3 {
            grid-column-start: 7;
            grid-column-end: 10;
        }
    }
</style>
