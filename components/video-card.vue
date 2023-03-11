<template>
    <div 
        class="video-card h-60 rounded-lg overflow-hidden"
        :class="{'main-video': index === 0 }"
    >
        <div 
            :style="`background-image: url('/images/thumbnails/${thumbnail}')`"
            class="h-full bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
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
                @click="toggleModal"
            >
                {{ index === 0 ? 'Watch Video' : 'Watch' }}
                <img 
                    src="/images/icons/icon-play.svg" 
                    :alt="`Play ${heading}`"
                >
            </button>
        </div>
        <div 
            class="fixed z-50 inset-0 bg-black/[.8] p-6 flex flex-col "
            :class="{'hidden' : !isModalShowed}"
        >
            <button 
                class="flex items-center justify-end"
                type="button"
                @click="toggleModal"
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
                    :src="`${videoURL}?frameborder=autoplay=1`" 
                    frameborder="0"
                    class="absolute top-0 left-0 w-full h-full"
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
    .main-video {
        height: 440px;

        &-heading {
            font-size: 32px;
            line-height: 32px;
        }
    }

    .play-button {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
    }
</style>
