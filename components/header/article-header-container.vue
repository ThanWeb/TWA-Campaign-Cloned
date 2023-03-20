<template>
    <header 
        class="article-header-layout w-full text-gray-darkest"
        :class="{'h-auto inset-0 flex flex-col' : isMainNavShowed}"
    >
        <div 
            class="main-header w-screen flex px-4 py-6 lg:py-3 items-center lg:justify-center" 
            :class="isMainNavShowed ? 'showed bg-white z-10' : 'custom-border'"
        >
            <div class="custom-width flex gap-x-4 lg:gap-x-6 justify-start items-center">
                <HeaderButtonsOpenCloseNav 
                    :is-main-nav-showed="isMainNavShowed"
                    @click="toggleMainNav"            
                />
                <NuxtLink 
                    to="/"                     
                    class="back-to-home"
                >
                    <img 
                        src="/images/icons/arrow-left.svg"
                        alt="Back to Home"
                    >
                </NuxtLink>
                <img 
                    src="/images/logo/10Travlr-Default.svg"
                    alt="10Travlr"
                    class="travlr-logo logo"
                >
                <img 
                    src="/images/logo/WA-Default.svg"
                    alt="Western Australia"
                    class="western-australia-logo logo pl-4 lg:pl-6"
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
    .scrolled .article-header-layout {
        .main-header:not(.showed) {
            @media screen and (max-width: 1023px) {
                justify-content: space-between;

                & .logo { 
                    display: none;
                }

                & .book-now-header {
                    flex-basis: 40%;
                    display: block;
                }
            }
    
            & .back-to-home {
                filter: invert(.5);
                display: block;
                margin-left: 16px;
            }

            & button {
                display: none;
            }
        }
    }

    .article-header-layout {
        .open-nav, .close-nav {
            filter: invert(80%);
        }

        .back-to-home {
            display: none;
        }

        .main-nav {
            z-index: 1;
        }
    
        .western-australia-logo {
            border-left: 1px solid $gray-lighter;
        }
    }
</style>
