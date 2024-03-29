<template>
    <header 
        class="bg-transparent absolute w-full z-20 overflow-hidden text-gray-darkest"
        :class="{'h-screen inset-0 flex flex-col' : isMainNavShowed}"
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
                        <a 
                            href="#overview"
                            class="hover:underline"
                        >
                            overview
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#destinations"
                            class="hover:underline"
                        >
                            destinations
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#watch"
                            class="hover:underline"
                        >
                            watch
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#choose-your-adventure"
                            class="hover:underline"
                        >
                            experience
                        </a>
                    </li>
                </ul>
                <img 
                    :src="isMainNavShowed ? '/images/logo/plane.svg' : '/images/logo/plane-inverted.svg'"
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

                &:hover {
                    color: $primary-color;
                    background-color: $white;
                }
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

                &:hover {
                    border-color: $primary-color;
                    background-color: $primary-color;
                    color: $white;
                }
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

    .western-australia-logo {
        border-left: 1px solid $white;

        &.active {
            border-left: 1px solid $gray-lighter;
        }
    }
</style>
