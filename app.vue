<template>
    <div
        class="overflow-hidden" 
        :class="{'scrolled' : scrollY > 0}"
    >
        <NuxtLayout>
            <main class="main-container">
                <NuxtPage />
            </main>
            <DesktopShare />
        </NuxtLayout>
    </div>
</template>

<script lang="ts">
import 'vue3-carousel/dist/carousel.css'

export default {
    data () {
        return {
            scrollY: 0
        }
    },
    created () {
        if (process.client) { 
            window.addEventListener('scroll', this.handleScroll)
        }
    },
    unmounted () {
        if (process.client) { 
            window.removeEventListener('scroll', this.handleScroll)
        }
    },
    methods: {
        handleScroll () {

            if (process.client) {
                this.scrollY = window.scrollY
            }
        }
    }
}
</script>

<style lang="scss" src="./app.scss"></style>
