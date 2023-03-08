<template>
    <div class="video-card">
        <div :style="`background-image: url('/images/thumbnails/${thumbnail}')`">
            <h3>
                {{ heading }}
            </h3>
            <p>
                {{ description }}
            </p>
            <button>
                Watch
            </button>
        </div>
        <div>
            <iframe :src="videoURL" />
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
