<template>
    <header 
        class="bg-transparent absolute w-full z-20"
        :class="{'h-screen w-screen inset-0 flex flex-col' : isMainNavShowed}"
    >
        <div 
            class="main-header w-screen flex px-4 py-6 gap-x-4 items-center"
            :class="isMainNavShowed ? 'bg-white z-10' : 'custom-border'"
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
    .close-nav {
        filter: invert(80%);
    }

    .main-header {
        height: $header-height;
    }

    .main-nav {
        display: flex;
        position: fixed;
        width: 100%;
        top: -100vh;
        visibility: hidden;
        transition: 0.4s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-delay: 0s;
        z-index: -5;

        &.active {
            visibility: visible;
            z-index: 5;
            top: 0;
        }
    }

    .travlr-logo {
        width: 100px;
        height: 40px;
    }

    .western-australia-logo {
        width: 140px;
        height: 40px;
        border-left: 1px solid $white;

        &.active {
            border-left: 1px solid $gray-lighter;
        }
    }

    .book-now-button {
        font-size: 15px;
        color: $secondary-color;
        border: 1px solid $secondary-color;
    }
</style>
