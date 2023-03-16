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
    // General
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

    // Scrolled
    .scrolled .article-layout .main-container {
        padding-top: $header-height;
    }

    .scrolled .main-header {
        background-color: white;
        position: fixed;
        top: 0;
        z-index: 10;

        > div {
            justify-content: space-between;
        }
    }
 
    .scrolled .default-layout .book-now-header {
        flex-basis: 40%;

        @media screen and (min-width: 1024px) {
            display: block;
        }
    }

    .scrolled .default-layout .logo {
        display: none;
    }

    .scrolled .article-layout .main-header {
        > div {
            justify-content: flex-start;
        }
    }

    .scrolled .open-nav {
        filter: invert(1);
    }

    // Header landing and article
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

    .article-layout .header-border {
        &:before {
            margin-bottom: 16px;
            width: 64px;
        }
    }

    .main-header {
        height: $header-height;
    }

    .main-nav {
        position: fixed;
        width: 100%;
        top: 80px;
        opacity: 0;
        transition: 0.4s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-delay: 0s;
        z-index: -100;
    }

    .logo {
        height: 40px;
    }

    .travlr-logo {
        width: 100px;
    }

    .western-australia-logo {
        width: 140px;
    }

    .book-now-button {
        font-size: 15px;
        color: $secondary-color;
        border: 1px solid $secondary-color;
    }

    // Helperss
    .custom-width {
        width: 100%;
    }

    .footer-border {
        &:after {
            content: "";
            display: block;
            width: 24px;
            height: 3px;
            margin-top: 24px;
            background: $gray-lighter;
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

    .invert-dark {
        filter: invert(1);
    }

    .max-width-desktop {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .custom-border {
        box-shadow: 0 1px 3px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.06);
    }

    // Responsive    
    @media screen and (min-width: 640px) {
        .book-now-header {
            flex-basis: 25% !important;
        }
    }

    @media screen and (min-width: 1024px) {
        .custom-width {
            width: 980px;
        }

        .w-article {
            width: 624px;
        }

        .travlr-logo, .western-australia-logo {
            width: auto;
        }

        .travlr-logo {
            height: 48px;
        }

        .western-australia-logo {
            height: 32px;
        }

        .book-now-header {
            flex-basis: 15% !important;
        }

        .lg-border {
            border-top: 1px solid $gray-lighter;
            box-shadow: 0 1px 3px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.06);
        }
    }

    @media screen and (min-width: 1280px) {
        .custom-width {
            width: 1200px;
        }
    }
</style>
