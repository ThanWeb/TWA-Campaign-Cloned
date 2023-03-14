<template>
    <header 
        class="article-header-layout bg-white w-full"
        :class="{'h-screen w-screen inset-0 flex flex-col' : isMainNavShowed}"
    >
        <div 
            class="main-header w-screen flex px-4 py-6 gap-x-4 justify-start items-center"
            :class="isMainNavShowed ? 'showed z-10' : 'custom-border'"
        >
            <button 
                type="button" 
                @click="toggleMainNav"
            >
                <img 
                    :src="isMainNavShowed ? '/images/icons/close.svg' : '/images/icons/hamburger.svg'"
                    alt="Main Menu"
                    :class="isMainNavShowed ? 'close-nav' : 'open-nav'"
                >
            </button>
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
                src="/images/logo/10travlr-default.svg"
                alt="10Travlr"
                class="travlr-logo logo"
            >
            <img 
                src="/images/logo/wa-default.svg"
                alt="Western Australia"
                class="western-australia-logo logo pl-4"
                :class="{'active' : isMainNavShowed}"
            >
            <a 
                v-if="!isMainNavShowed"
                href="#book-now-section"
                class="book-now-header hidden lg:block rounded-3xl book-now-button mx-3 uppercase py-3 font-semibold tracking-widest text-center"
            >
                Book Now
            </a>
        </div>
        <nav
            class="main-nav justify-center"
            :class="{'bg-white active h-full' : isMainNavShowed}"
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
            justify-content: space-between;

            & .logo { 
                display: none;
            }
    
            & .book-now-header {
                flex-basis: 40%;
                display: block;
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
    
        .main-header {
            height: 88px;
        }
    
        .main-nav {
            display: flex;
            position: fixed;
            width: 100%;
            top: -100vh;
            transition: 0.4s;
            opacity: 0;
            transition-timing-function: cubic-bezier(.4,0,.2,1);
            transition-delay: 0s;
            z-index: -5;
    
            &.active {
                z-index: 2;
                top: 0;
                opacity: 1;
            }
        }
    
        .travlr-logo {
            width: 100px;
            height: 40px;
        }
    
        .western-australia-logo {
            width: 140px;
            height: 40px;
            border-left: 1px solid $gray-lighter;
        }
    
        .invert-dark {
            filter: invert(1);
        }
    
        .book-now-button {
            font-size: 15px;
            color: $secondary-color;
            border: 1px solid $secondary-color;
        }

        @media screen and (min-width: 640px) {
            .book-now-header {
                flex-basis: 25% !important;
            }
        }
    }
</style>
