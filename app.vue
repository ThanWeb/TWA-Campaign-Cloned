<template>
    <div :class="{'scrolled' : scrollY > 0}">
        <NuxtLayout>
            <main>
                <NuxtPage />
            </main>
        </NuxtLayout>
    </div>
</template>

<script lang="ts">
export default {
    data () {
        return {
            scrollY: 0
        }
    },
    created () {
        // eslint-disable-next-line no-undef
        if (process.client) { 
            window.addEventListener('scroll', this.handleScroll)
        }
    },
    unmounted () {
        // eslint-disable-next-line no-undef
        if (process.client) { 
            window.removeEventListener('scroll', this.handleScroll)
        }
    },
    methods: {
        handleScroll () {
            // eslint-disable-next-line no-undef
            if (process.client) {
                this.scrollY = window.scrollY
            }
        }
    }
}
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .page-enter-active,
    .page-leave-active {
        transition: all 0.1s;
    }
        
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
    }

    .header-border {
        font-size: 32px;
        line-height: 44px;
        font-weight: 300;
        
        &:before {
            content: "";
            display: block;
            width: 48px;
            height: 3px;
            margin-bottom: 24px;
            background: $primary-color;
        }
    }
</style>
