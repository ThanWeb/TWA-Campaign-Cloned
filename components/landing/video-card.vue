<template>
    <div 
        class="video-card h-60 rounded-lg overflow-hidden cursor-pointer"
        :class="index === 0 ? 'main-video' : `secondary-video video-${index}`"
    >
        <div 
            :style="`background-image: url('/images/thumbnails/${thumbnail}')`"
            class="h-full video-background bg-cover bg-center md:bg-top lg:bg-center flex flex-col justify-center items-center text-white text-center"
            @click="toggleModal"
        >
            <h3 
                :class="index === 0 ? 'main-video-heading font-light tracking-widest mb-2 px-4' : 'text-xl font-semibold mb-1 px-10'"
            >
                {{ heading }}
            </h3>
            <p 
                class="px-10 text-base"
                :class="index === 0 ? 'mb-6' : 'mb-4'"
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
            class="fixed z-50 inset-0 bg-black/[.8] py-6 px-11 flex flex-col"
            @click="toggleModal"
        >
            <button 
                class="flex items-center justify-end"
                style="margin: 0 -20px;"
                type="button"
            >
                <img 
                    src="/images/icons/close.svg" 
                    alt="`Close Modal`"
                >
            </button>
            <div 
                class="relative h-0 my-auto" 
                style="padding-bottom: 56.25%;"
            >
                <iframe 
                    :src="`${videoURL}?&autoplay=1`" 
                    allow="autoplay, fullscreen"
                    frameborder="0"
                    class="absolute top-0 left-0 w-full h-full lg:h-2/4"
                    allowfullscreen
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
                    background-size: 160%;
                }
            }
    
            @media screen and (min-width: 1280px) {
                .video-background {
                    background-size: 110%;
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
                background-size: 100%;
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
