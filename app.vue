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

    .scrolled .main-header {
        background-color: white;
        position: fixed;
        justify-content: space-between;
        top: 0;
        z-index: 10;
        
        &.custom-border {
            border-bottom: 1px solid $gray-lighter;
        }
    }

    .scrolled .article-layout .main-header {
        justify-content: flex-start;
    }
 
    .scrolled .default-layout .book-now-header {
        flex-basis: 40%;
        display: block;
    }

    .scrolled .default-layout .logo {
        display: none;
    }

    .scrolled .open-nav {
        filter: invert(1);
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

    .small-text {
        font-size: 10px;
        letter-spacing: 3px;
    }

    .scroll-height-0 {
        &::-webkit-scrollbar {
            height: 0;
        }
    }

    .box-orient-vertical {
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }

    .line-clamp-1 {
        -webkit-line-clamp: 1;
        line-clamp: 1; 
    }
    
    .line-clamp-2 {
        -webkit-line-clamp: 2;
        line-clamp: 2; 
    }

    .choose-deals-section {
        background-color: $gray-darkest;
    }
</style>
