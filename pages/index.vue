<template>
    <div class="vh-90">
        <figure class="w-screen h-90 absolute inset-0 -z-20">
            <video 
                autoplay="" 
                muted="" 
                loop=""
                class="w-full h-full object-cover object-center"
            >
                <source 
                    src="/_nuxt/assets/videos/module-welcome.mp4" 
                    type="video/mp4"
                >
            </video>
        </figure>
        <div class="h-full pt-52 flex flex-col justify-between">
            <div>
                <img 
                    src="/_nuxt/assets/images/wander-out-yonder.svg"
                    alt="Wander Out Yonder"
                    class="px-16 pt-8 mx-auto mb-0"
                >
                <p class="text-white text-center uppercase mt-8 font-semibold small-text">
                    It’s time for your next adventure
                </p>
            </div>
            <div>
                <p class="mt-4 text-white text-center uppercase mt-8 font-semibold small-text">
                    More Details
                </p>
                <img 
                    src="/_nuxt/assets/images/icons/more-detail.svg"
                    alt="More Detail"
                    class="mx-auto mt-2 mb-0 h-14"
                >
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
export default {
    name: 'LandingPage'
}
</script>

<style lang="scss">
    .small-text {
        font-size: 10px;
        letter-spacing: 3px;
    }

    .vh-90 {
        height: 90vh; 
    }

    .h-90 {
        height: 90%;
    }
</style>
