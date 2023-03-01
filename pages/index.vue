<template>
    <div>
        <div>
            <figure 
                id="video-background"
                class="w-screeny absolute inset-0 -z-20"
            >
                <video 
                    autoplay 
                    muted
                    loop
                    class="w-full h-full object-cover object-center"
                >
                    <source 
                        src="/videos/module-welcome.mp4" 
                        type="video/mp4"
                    >
                </video>
            </figure>
            <div 
                class="pt-52 flex flex-col justify-between"
                :style="`height: ${videoBackgroundHeight}px`"
            >
                <div>
                    <img 
                        src="/images/wander-out-yonder.svg"
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
                        src="/images/icons/more-detail.svg"
                        alt="More Detail"
                        class="mx-auto mt-2 mb-0 h-14"
                    >
                </div>
            </div>
        </div>
        <OverviewSection />
        <PoliciesSection />
        <FormSection />
    </div>
</template>

<script lang='ts'>
interface PropsData {
    videoBackgroundHeight: string
}

export default {
    name: 'LandingPage',
    data (): PropsData {
        return {
            videoBackgroundHeight: '0'
        }
    },
    mounted() {
        this.getVideoBackgroundHeight()
    },
    methods: {
        getVideoBackgroundHeight() {
            const videoBgHeight = document.querySelector('#video-background')?.clientHeight
            this.videoBackgroundHeight = `${videoBgHeight}`
        }
    }
}
</script>

<style lang="scss">
    .scrolled .main-header {
        position: fixed;
    }
</style>
