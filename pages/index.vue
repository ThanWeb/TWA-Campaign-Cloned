<template>
    <div>
        <div class="hero-section">
            <figure 
                id="video-background"
                class="w-screen absolute inset-0 -z-20"
            >
                <video 
                    autoplay 
                    muted
                    loop
                    class="w-full h-screen object-cover object-center"
                >
                    <source 
                        src="/videos/module-welcome.mp4" 
                        type="video/mp4"
                    >
                </video>
            </figure>
            <div 
                class="pt-52 flex flex-col justify-between"
                :style="`height: ${videoBackgroundHeight}px`"
            >
                <div>
                    <img 
                        src="/images/wander-out-yonder.svg"
                        alt="Wander Out Yonder"
                        class="px-16 pt-8 mx-auto mb-0"
                    >
                    <p class="text-white text-center uppercase mt-8 font-semibold small-text">
                        It’s time for your next adventure
                    </p>
                </div>
                <div>
                    <p class="mt-4 text-white text-center uppercase mt-8 font-semibold small-text">
                        More Details
                    </p>
                    <img 
                        src="/images/icons/more-detail.svg"
                        alt="More Detail"
                        class="mx-auto mt-2 mb-0 h-14"
                    >
                </div>
            </div>
        </div>
        <div class="overview section mt-6 mb-12 mx-6">
            <header>
                <h1 class="header-border py-6">
                    Otherworldly, wild, magnificent – this is Western Australia
                </h1>
            </header>
            <div>
                <p class="mb-6 text-base">
                    The westernmost part of Australia is a place of unimaginable
                    beauty, where stark outback plains are interrupted by otherworldly
                    freshwater lakes, majestic orange cliffs, and undulating ‘beehive’
                    domes millions of years in the making. A place where a
                    progressive, exciting city thrives just an hour away from an
                    off-grid island paradise, home to arguably the most beloved animal
                    on earth, the quokka. Unspoiled and spectacular, WA’s vast
                    landscapes may not always feel real, but they are.
                </p>
                <p class="mb-6 text-base">
                    Cityside or outback, adventure in WA always rules. Thrilling
                    ziplines, decadent food and wine trips, soaring flights over World
                    Heritage-listed Purnululu National Park, gorge dips under
                    mesmerising waterfalls, glamping in the wilderness and rambles
                    through towering caverns and enthralling cave systems are all up
                    for grabs. The question is: what will you do first?
                </p>
                <p class="text-base">
                    You saw Joel Creasey wander out yonder – now it's your turn.
                </p>
            </div>
        </div>
        <div class="policies-section px-6 pt-10 pb-12 flex flex-col gap-y-10">
            <div class="flex items-start gap-x-4">
                <img 
                    src="/images/icons/icon-headset.svg" 
                    alt="Need Help With Your Booking?"
                    class="ml-1 mt-1"
                >
                <div>
                    <p class="text-base font-semibold mb-1">
                        Need Help With Your Booking?
                    </p>
                    <p class="text-sm">
                        Contact our friendly customer service team or <span class="font-semibold">read our FAQ</span>
                    </p>
                </div>
            </div>
            <div class="flex items-start gap-x-4">
                <img 
                    src="/images/icons/icon-calendar.svg" 
                    alt="Flexible Bookings"
                    class="ml-1 mt-1"
                >
                <div>
                    <p class="text-base font-semibold mb-1">
                        Flexible Bookings
                    </p>
                    <p class="text-sm">
                        Plan ahead with peace of mind
                    </p>
                </div>
            </div>
            <div class="flex items-start gap-x-4">
                <img
                    src="/images/icons/icon-covid.svg" 
                    alt="COVID-19 Refund Guarantee"
                    class="ml-1 mt-1"
                >
                <div>
                    <p class="text-base font-semibold mb-1">
                        COVID-19 Refund Guarantee
                    </p>
                    <p class="text-sm">
                        Experiences offer a 100% refund guarantee if your booking needs to be cancelled due to COVID-19
                    </p>
                </div>
            </div>
            <div class="flex items-start gap-x-4">
                <img 
                    src="/images/icons/icon-browse.svg" 
                    alt="Travel Now, Pay Later"
                    class="ml-1 mt-1"
                >
                <div>
                    <p class="text-base font-semibold mb-1">
                        Travel Now, Pay Later
                    </p>
                    <p class="text-sm">
                        Pay for your trip in fortnightly or monthly installments, interest free. <span class="font-semibold">More here</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="form-section">
            <div class="h-60">
                <img 
                    src="/images/quokka.svg" 
                    alt="Cute Quokka"
                    class="h-full w-full object-cover"
                >
            </div>
            <div class="pt-6 pb-12 px-4">
                <h1 class="uppercase text-2xl leading-6 mb-4 tracking-widest">
                    WIN 1 of 10 $100 travel vouchers!
                </h1>
                <p class="mb-6 text-base font-normal">
                    Your chance to put an extra $100 towards your next getaway, stay or activity. Sign up with us to make it happen.
                </p>
                <form action="">
                    <div class="flex flex-col mb-3">
                        <label 
                            for="name"
                            class="mb-1 text-base"
                        >
                            Name
                        </label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="Enter your name"
                            class="h-14 p-4 text-base rounded-lg input-form"
                        >
                    </div>
                    <div class="flex flex-col mb-6">
                        <label 
                            for="email"
                            class="mb-1 text-base"
                        >
                            Email
                        </label>
                        <input 
                            id="email" 
                            type="email" 
                            placeholder="Enter your email address"
                            class="h-14 p-4 text-base rounded-lg input-form"
                        >
                    </div>
                    <div class="mb-6 flex items-center">
                        <input 
                            id="terms-and-conditions"
                            type="checkbox" 
                            name="terms-and-conditions" 
                            class="w-5 mr-1"
                        >
                        <label 
                            class="text-sm"
                            for="terms-and-conditions"
                        >
                            I’ve read and agree to the 
                            <a 
                                href="#" 
                                target="_blank"
                                class="underline font-bold"
                            >
                                terms & conditions
                            </a>
                        </label>
                    </div>
                    <div class="flex">
                        <button 
                            type="button"
                            class="h-12 w-full text-base text-white submit-form rounded-lg"
                            disabled
                        >
                            ENTER NOW
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
interface PropsData {
    videoBackgroundHeight: string
}

export default {
    name: 'LandingPage',
    data (): PropsData {
        return {
            videoBackgroundHeight: '0'
        }
    },
    mounted() {
        this.getVideoBackgroundHeight()
    },
    methods: {
        getVideoBackgroundHeight() {
            const videoBgHeight = document.querySelector('#video-background')?.clientHeight
            this.videoBackgroundHeight = `${videoBgHeight}`
        }
    }
}
</script>

<style lang="scss">
    .scrolled .main-header {
        background-color: white;
        position: fixed;
        justify-content: space-between;
        top: 0;
        z-index: 10;
    }
 
    .scrolled .book-now-header {
        flex-basis: 40%;
        display: block;
    }

    .scrolled .logo {
        display: none;
    }

    .scrolled .open-nav {
        filter: invert(1);
    }

    .small-text {
        font-size: 10px;
        letter-spacing: 3px;
    }

    .policies-section {
        &:before {
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            background: #E5E7EB;
        }
    }

    .form-section {
        background-color: $gray-lightest;

        .input-form {
            border: 1px solid #D1D5DB;
        }

        .submit-form {
            background-color: #D1D5DB;
        }
    }
</style>
