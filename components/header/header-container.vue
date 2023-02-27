<template>
    <header 
        class="bg-transparent absolute"
        :class="{'h-screen w-screen inset-0 flex flex-col' : isMainNavShowed}"
    >
        <div 
            class="flex px-4 py-6 gap-x-4 items-center"
            :class="{'bg-white z-10' : isMainNavShowed}"
        >
            <button 
                type="button" 
                @click="toggleMainNav"
            >
                <img 
                    :src="isMainNavShowed ? '/_nuxt/assets/images/icons/close.svg' : '/_nuxt/assets/images/icons/hamburger.svg'"
                    alt="Main Menu"
                    :class="{'close-nav' : isMainNavShowed}"
                >
            </button>
            <img 
                :src="isMainNavShowed ? '/_nuxt/assets/images/logo/10Travlr-Default.svg' : '/_nuxt/assets/images/logo/10Travlr-Inverted.svg'"
                alt="10Travlr"
                class="travlr-logo"
            >
            <img 
                :src="isMainNavShowed ? '/_nuxt/assets/images/logo/WA-Default.svg' : '/_nuxt/assets/images/logo/WA-Inverted.svg'"
                alt="Western Australia"
                class="western-australia-logo pl-4"
                :class="{'active' : isMainNavShowed}"
            >
            <button 
                type="button" 
                class="hidden lg:block"
            >
                Book Now
            </button>
        </div>
        <nav
            class="main-nav flex-col text-center justify-evenly pt-32"
            :class="{'bg-white active h-full' : isMainNavShowed}"
        >
            <ul class="flex flex-col gap-y-14">
                <li class="text-xl font-semibold uppercase tracking-widest">
                    <a 
                        href="https://www.10travlr.com.au/accommodation/search?Dest=Western%20Australia&amp;DestFullName=Western%20Australia%2C%20Australia&amp;GeoAreaId=western-australia-11212"
                        target="_blank" 
                        title="Hotels"
                    >
                        Hotels
                    </a>
                </li>
                <li class="text-xl font-semibold uppercase tracking-widest">
                    <a 
                        target="_blank" 
                        title="Deals"
                        href="https://www.10travlr.com.au/deals-and-offers/search?keyword=Western%20Australia"
                    >
                        Deals
                    </a>
                </li>
                <li class="text-xl font-semibold uppercase tracking-widest">
                    <a 
                        target="_blank" 
                        title="Activities" 
                        href="https://www.10travlr.com.au/activities/search?q=western%20australia%2c%20australia&amp;qtype=destination"
                    >
                        Activities
                    </a>
                </li>
                <li class="text-xl font-semibold uppercase tracking-widest">
                    <a 
                        target="_blank" 
                        title="Flights" 
                        href="https://www.10travlr.com.au/flights"
                    >
                        Flights
                    </a>
                </li>
            </ul>
            <div class="flex justify-center gap-x-8 items-center">
                <p>Share</p>
                <a 
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.10travlr.com.au/western-australia-holiday-tours"
                    target="_blank" 
                    rel="external noopener"
                >
                    <img 
                        src="/_nuxt/assets/images/icons/icon-fb.svg"
                        alt="Facebook"
                        class="invert-dark"
                    >
                </a>
                <a 
                    href="https://twitter.com/intent/tweet?text=Western%20Australia%20Holiday%20Packages%3A%20Perth,%20The%20Kimberley%20%26%20More.%0A%0Ahttps%3A//www.10travlr.com.au/western-australia-holiday-tours%0A"
                    target="_blank"
                >
                    <img 
                        src="/_nuxt/assets/images/icons/icon-tw.svg"
                        alt="Facebook"
                        class="invert-dark"
                    >
                </a>
            </div>
            <a 
                href="#book-now-section"
                class="rounded-3xl book-now-button mx-6 uppercase py-3 font-semibold tracking-widest"
            >
                Book Now
            </a>
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

    .main-nav {
        display: flex;
        position: fixed;
        width: 100%;
        top: -100vh;
        transition: 0.4s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        transition-delay: 0s;

        &.active {
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
            border-left: 1px solid #D1D5DB;
        }
    }

    .invert-dark {
        filter: invert(1);
    }

    .book-now-button {
        font-size: 15px;
        color: $secondary-color;
        border: 1px solid $secondary-color;
    }
</style>
