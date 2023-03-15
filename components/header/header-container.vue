<template>
    <header 
        class="bg-transparent absolute w-full z-20 overflow-hidden"
        :class="{'h-screen w-screen inset-0 flex flex-col' : isMainNavShowed}"
    >
        <div 
            class="main-header w-screen flex px-4 py-6 gap-x-4 items-center lg:justify-center"
            :class="isMainNavShowed ? 'showed bg-white z-10' : 'custom-border'"
        >
            <div class="custom-width flex gap-x-4 lg:gap-x-6 justify-start items-center">
                <HeaderButtonsOpenCloseNav 
                    :is-main-nav-showed="isMainNavShowed"
                    @click="toggleMainNav"            
                />
                <ul class="nav-desktop uppercase gap-x-10 text-sm tracking-widest font-semibold">
                    <li>
                        <a href="#overview">
                            overview
                        </a>
                    </li>
                    <li>
                        <a href="#destinations">
                            destinations
                        </a>
                    </li>
                    <li>
                        <a href="#watch">
                            watch
                        </a>
                    </li>
                    <li>
                        <a href="#choose-your-adventure">
                            experience
                        </a>
                    </li>
                </ul>
                <img 
                    :src="isMainNavShowed ? '/images/logo/10Travlr-Default.svg' : '/images/logo/10Travlr-Inverted.svg'"
                    alt="10Travlr"
                    class="travlr-logo logo"
                >
                <img 
                    :src="isMainNavShowed ? '/images/logo/WA-Default.svg' : '/images/logo/WA-Inverted.svg'"
                    alt="Western Australia"
                    class="western-australia-logo logo pl-4"
                    :class="{'active' : isMainNavShowed}"
                >
                <HeaderButtonsBookNowButton />
            </div>
        </div>
        <nav
            class="main-nav justify-center"
            :class="{'bg-white active h-full lg:h-56' : isMainNavShowed}"
        >
            <HeaderNavigationContents />
        </nav>
    </header>
</template>

<script lang="ts">
export default {
    data () {
        return {
            isMainNavShowed: false
        }
    },
    methods: {
        toggleMainNav () {
            this.isMainNavShowed = !this.isMainNavShowed
        }
    }
}
</script>

<style lang="scss">
    .default-layout {
        @media screen and (min-width: 1024px) {
            .main-header:not(.showed) .book-now-button {
                color: $white;
                border-color: $white;
            }
        }
    }

    .scrolled .default-layout {
        @media screen and (max-width: 1023px) {
            .main-header:not(.showed) .book-now-button {
                display: block;
            }
        }

        @media screen and (min-width: 1024px) {
            .main-header:not(.showed) .book-now-button {
                color: $secondary-color;
                border-color: $secondary-color;
            }
        }
    }

    .nav-desktop {
        display: none;    
    }

    .scrolled .nav-desktop {
        @media screen and (min-width: 1024px) {
            display: flex;
        }
    }

    .close-nav {
        filter: invert(80%);
    }

    .main-nav {
        &.active {
            display: flex;
            opacity: 1;
            z-index: 5;
            top: 0;
            padding-top: $header-height;

            @media screen and (min-width: 1024px) {
                top: $header-height;
                padding-top: 0;
            }
        }
    }

    .western-australia-logo {
        border-left: 1px solid $white;

        &.active {
            border-left: 1px solid $gray-lighter;
        }
    }
</style>
