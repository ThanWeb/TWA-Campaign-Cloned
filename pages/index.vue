<template>
    <div>
        <div class="hero-section overflow-hidden relative height-viewport">
            <figure class="w-screen absolute -z-20">
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
            <div class="absolute my-auto inset-y-1/4 w-full">
                <img 
                    src="/images/logo/wander-out-yonder.svg"
                    alt="Wander Out Yonder"
                    class="w-80 mb-0 mx-auto"
                >
                <p class="text-white text-center uppercase mt-8 font-semibold small-text">
                    It’s time for your next adventure
                </p>
            </div>
            <div class="absolute bottom-0 w-full">
                <p class="mt-4 mx-auto text-white text-center uppercase mt-8 font-semibold small-text">
                    More Details
                </p>
                <img 
                    src="/images/icons/more-detail.svg"
                    alt="More Detail"
                    class="mx-auto mt-2 mb-0 h-14"
                >
            </div>
        </div>
        <div 
            id="overview" 
            class="overview-section mt-6 mb-12 lg:mb-16 text-gray-darkest"
        >
            <div class="lg:flex lg:my-20 items-center custom-width mx-auto">
                <header class="mx-6 lg:w-2/5">
                    <h1 class="header-border py-6 lg:py-0">
                        Otherworldly, wild, magnificent – this is Western Australia
                    </h1>
                </header>
                <article class="mx-6 lg:w-3/5">
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
                </article>
            </div>

            <div class="mt-12">
                <div 
                    class="hidden lg:flex"
                    :style="`transform: translateX(-${verticalScroll - 600}px);`"
                >
                    <img
                        v-for="index in galeryImages.length * 2"
                        :key="index"
                        :src="`/images/overview/${galeryImages[((index - 1)% galeryImages.length)]}`"
                        :alt="`Image-${index}`"
                        :class="{'lg:h-80 lg:w-80' : index % 5 === 2, 'more-higher' : index % 5 === 3, 'more-wider' : index % 5 !== 2 && index % 5 !== 3}"
                    >
                </div>
                <div class="lg:hidden">
                    <carousel 
                        ref="galleryImage"
                        v-model="currentImageInGalleryImage"
                        :items-to-show="1" 
                        :wrap-around="true"
                        @slide-end="updatePaginationButton()"
                    >
                        <slide
                            v-for="(image, index) in galeryImages"
                            :key="index" 
                        >
                            <img 
                                :src="`/images/overview/${image}`"
                                :alt="`Image-${index + 1}`"
                                class="md:h-64 w-full object-cover"
                            >
                        </slide>
                    </carousel>
                    <div class="flex gap-x-1.5 mt-3 justify-center items-center">
                        <button
                            v-for="(image, index) in galeryImages"
                            :key="index"
                            class="gallery-image-button rounded-full"
                            :class="{'active' : index === 0, 'near' : index === 1, 'far' : index === 2}"
                            @click="slideGalleryImage(index)"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div    
            id="destinations" 
            class="articles-section px-6 pb-12 custom-width mx-auto text-gray-darkest"
        >
            <header class="uppercase mb-6">
                <h1 class="header-border mb-2 tracking-widest">
                    Plan your trip
                </h1>
                <p class="text-sm tracking-widest">
                    Go-to guides for your next wander out yonder
                </p>
            </header>
            <div class="flex flex-col lg:flex-row lg:gap-x-6 gap-y-6 text-gray-darkest">
                <LandingArticleCard 
                    v-for="(article, index) in articles"
                    v-bind="article"
                    :key="index"
                />
            </div>
        </div>
        <div
            id="watch" 
            class="creaseys-videos-section pb-12 px-6 custom-width mx-auto lg:grid"
        >
            <div class="flex flex-col gap-y-4 lg:gap-6 lg:grid lg:grid-cols-9">
                <LandingVideoCard 
                    v-for="(video, index) in creaseysVideos"
                    v-bind="video"
                    :key="index"
                    :index="index"
                />
            </div>
        </div>
        <div 
            id="choose-your-adventure"
            class="choose-deals-section px-6 py-12"
        >
            <header class="uppercase text-white mb-6 custom-width mx-auto">
                <h1 class="header-border mb-2 tracking-widest">
                    Choose Your Adventure
                </h1>
                <p class="text-sm tracking-widest">
                    Follow in the footsteps of wa's ‘best’ tour guide joel creasey with these unforgettable trips, as seen on network 10
                </p>
            </header>
            <div class="flex flex-col gap-y-6 custom-width mx-auto lg:flex-row lg:gap-x-2 items-stretch">
                <LandingDealsCarousel 
                    v-for="(deals, index) in mainDeals"
                    v-bind="deals"
                    :key="index"
                    :carousel-index="index"
                    :active-carousel="selectedCarousel"
                    @click="changeSelectedCarousel(index)"
                />
            </div>
        </div>
        <div class="you-may-also-like-section px-6 lg:px-0 mt-12 custom-width mx-auto"> 
            <header class="uppercase text-gray-darkest custom-width">
                <h1 class="header-border mb-2 tracking-widest">
                    You May Also Like
                </h1>
                <p class="text-sm tracking-widest">
                    spectacular WA trips Joel didn’t get to take (but you can)
                </p>
            </header>
            <div class="lg:flex lg:gap-x-4 lg:justify-center lg:px-2 lg:items-center lg:relative">
                <button
                    v-if="currentSecondaryDeals !== 0"
                    type="button"
                    class="prev-secondary-deal-button hidden lg:flex w-12 h-12 swipe-button items-center justify-center rounded-full cursor-pointer absolute right-full mr-4"
                    @click="prevSecondaryDeals"
                >
                    <img 
                        src="/images/icons/icon-left.svg" 
                        alt="Swipe left"
                        class="swipe-deals"
                    >
                </button>
                <div class="scroll-height-0 text-gray-darker custom-width mx-auto">
                    <div class="hidden lg:block">
                        <carousel 
                            ref="secondaryDealsCarousel"
                            v-model="currentSecondaryDeals"
                            :settings="carouselSettings" 
                            :breakpoints="carouselBreakpoints"
                        >
                            <slide
                                v-for="(deals, index) in secondaryDeals"
                                :key="index" 
                            >
                                <LandingDealsCard v-bind="deals" />
                            </slide>
                        </carousel>
                    </div>
                    <div class="py-6 overflow-auto scroll-height-0 lg:hidden">
                        <table class="min-w-full">
                            <tbody>
                                <tr class="flex items-start gap-x-4">
                                    <td
                                        v-for="(deals, index) in secondaryDeals"
                                        :key="index"
                                        class="w-72"
                                    >
                                        <LandingDealsCard v-bind="deals" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <button
                    v-if="currentSecondaryDeals !== 3"
                    type="button"
                    class="next-secondary-deal-button hidden lg:flex w-12 h-12 swipe-button items-center justify-center rounded-full cursor-pointer absolute left-full ml-4"
                    @click="nextSecondaryDeals"
                >
                    <img 
                        src="/images/icons/icon-right.svg" 
                        alt="Swipe right"
                        class="swipe-deals"
                    >
                </button>
            </div>
            <div class="flex flex-col lg:flex-row lg:mt-9 lg:gap-x-6 text-gray-med custom-width mx-auto">
                <LandingCategoryCard 
                    v-for="(item, index) in categoryItem"
                    v-bind="item" 
                    :key="index"
                />
            </div>
        </div>
        <div class="policies-section px-6 lg:px-0 custom-width mx-auto text-gray-darker">
            <div class="top-border flex flex-col mt-8 mb-12 gap-y-10 pt-10 lg:flex-row lg:gap-x-6 lg:my-16">
                <div class="flex items-start gap-x-4 lg:w-1/4 lg:flex-col lg">
                    <img 
                        src="/images/icons/icon-headset.svg" 
                        alt="Need Help With Your Booking?"
                        class="ml-1 mt-1 lg:ml-0 lg:mt-0 lg:mb-4"
                    >
                    <div>
                        <p class="text-base font-semibold mb-1 text-gray-darkest">
                            Need Help With Your Booking?
                        </p>
                        <p class="text-sm">
                            Contact our friendly customer service team or 
                            <a 
                                class="font-semibold"
                                href="https://10travlr.zendesk.com/hc/en-us"    
                                target="_blank"
                            >read our FAQ</a>
                        </p>
                    </div>
                </div>
                <div class="flex items-start gap-x-4 lg:w-1/4 lg:flex-col lg">
                    <img 
                        src="/images/icons/icon-calendar.svg" 
                        alt="Flexible Bookings"
                        class="ml-1 mt-1 lg:ml-0 lg:mt-0 lg:mb-4"
                    >
                    <div>
                        <p class="text-base font-semibold mb-1 text-gray-darkest">
                            Flexible Bookings
                        </p>
                        <p class="text-sm">
                            Plan ahead with peace of mind
                        </p>
                    </div>
                </div>
                <div class="flex items-start gap-x-4 lg:w-1/4 lg:flex-col lg">
                    <img
                        src="/images/icons/icon-covid.svg" 
                        alt="COVID-19 Refund Guarantee"
                        class="ml-1 mt-1 lg:ml-0 lg:mt-0 lg:mb-4"
                    >
                    <div>
                        <p class="text-base font-semibold mb-1 text-gray-darkest">
                            COVID-19 Refund Guarantee
                        </p>
                        <p class="text-sm">
                            Experiences offer a 100% refund guarantee if your booking needs to be cancelled due to COVID-19
                        </p>
                    </div>
                </div>
                <div class="flex items-start gap-x-4 lg:w-1/4 lg:flex-col lg">
                    <img 
                        src="/images/icons/icon-browse.svg" 
                        alt="Travel Now, Pay Later"
                        class="ml-1 mt-1 lg:ml-0 lg:mt-0 lg:mb-4"
                    >
                    <div>
                        <p class="text-base font-semibold mb-1 text-gray-darkest">
                            Travel Now, Pay Later
                        </p>
                        <p class="text-sm">
                            Pay for your trip in fortnightly or monthly installments, interest free.<br>
                            <a 
                                class="font-semibold"
                                href="https://www.10travlr.com.au/humm"    
                                target="_blank"
                            >More here</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-section lg:flex">
            <div class="h-60 lg:h-full lg:w-2/4">
                <img 
                    src="/images/newsletter/quokka.png" 
                    alt="Cute Quokka"
                    class="h-full w-full object-cover"
                >
            </div>
            <div class="pb-12 p-6 lg:w-2/4 lg:px-20 lg:py-16 lg:flex flex-col xl:py-20 xl:px-32 2xl:max-w-3xl">
                <h1 class="uppercase text-2xl lg:text-3xl leading-6 lg:leading-8 mb-4 tracking-widest text-gray-darkest">
                    <span class="font-semibold">SIGN UP</span> TO OUR NEWSLETTER
                </h1>
                <p class="mb-6 text-base font-normal text-gray-darker">
                    While our <a class="font-semibold underline text-black">travel voucher competition</a> has now ended, you can still sign up to receive one of a kind itineraries, exclusive deals, awe-inspiring experiences and travel tips delivered straight to your inbox.
                </p>
                <form 
                    action="" 
                    class="text-gray-darker lg:mt-auto"
                >
                    <div class="flex flex-col mb-3">
                        <label 
                            for="name"
                            class="mb-1 text-base"
                        >
                            Name
                        </label>
                        <input 
                            id="name" 
                            v-model="nameInput"
                            type="text"
                            placeholder="Enter your name"
                            class="h-14 p-4 text-base rounded-lg input-form"
                        >
                        <span 
                            v-if="nameInput.length <= 0"
                            class="text-sm text-red-600 mt-2"
                        >
                            This field is required.
                        </span>
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
                            v-model="emailInput"
                            type="email" 
                            placeholder="Enter your email address"
                            class="h-14 p-4 text-base rounded-lg input-form"
                        >
                        <span 
                            v-if="emailInput.length <= 0 || !checkEmailIsValid()"
                            class="text-sm text-red-600 mt-2"
                        >
                            {{ emailInput.length <= 0 ? 'This field is required' : 'Please enter a valid email address.' }}
                        </span>
                    </div>
                    <div class="flex">
                        <button 
                            type="button"
                            class="h-12 w-full text-base text-white submit-form rounded-lg font-semibold tracking-widest"
                            :disabled="checkEmailIsValid() && nameInput.length > 0 ? false : true"
                        >
                            SIGN UP
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { Carousel, Slide } from 'vue3-carousel'

interface Data {
    videoBackgroundHeight: string,
    galeryImages: Array<string>,
    articles: Array<Articles>,
    creaseysVideos: Array<CreaseysVideos>,
    mainDeals: Array<MainDeals>,
    secondaryDeals: Array<SecondaryDeals>,
    categoryItem: Array<CategoryItem>,
    nameInput: string,
    emailInput: string,
    selectedCarousel: number,
    carouselSettings: object,
    carouselBreakpoints: object,
    currentSecondaryDeals: number,
    currentImageInGalleryImage: number
}

interface Articles {
    category: string,
    title: string,
    image: string,
    articleLink: string
}

interface CreaseysVideos {
    heading: string,
    description: string,
    thumbnail: string,
    videoURL: string,
}

interface MainDeals {
    location: string,
    heading: string,
    description: string,
    images: Array<string>,
    details: Array<string>,
    validUntil: string,
    days: number,
    price: string
}

interface SecondaryDeals {
    location: string,
    heading: string,
    description: string,
    image: string,
    price: string,
    articleLink: string
}

interface CategoryItem {
    heading: string,
    description: string,
    image: string,
    url: string
}

export default {
    name: 'LandingPage',
    components: {
        'carousel': Carousel,
        'slide': Slide
    },
    props: {
        verticalScroll: {
            type: Number,
            default: 0
        }
    },
    data (): Data {
        return {
            videoBackgroundHeight: '0',
            galeryImages: [
                'mini-gallery-image-01.png',
                'mini-gallery-image-02.png',
                'mini-gallery-image-03.png',
                'mini-gallery-image-04.png',
                'mini-gallery-image-05.png'
            ],
            articles: [
                {
                    category: 'Beaches & Bars',
                    title: `See Perth Like a Local: Your Best-of Guide to WA's Evocative Capital`,
                    image: 'perth-1@2x.png',
                    articleLink: '/perth-guide-things-to-do'
                },
                {
                    category: 'Outback & Wildlife',
                    title: 'Adventure in the East Kimberley: Your Definitive Guide to Kununurra',
                    image: 'kimberley-1@2x.png',
                    articleLink: '/kimberley-guide-things-to-do'
                }
            ],
            creaseysVideos: [
                {
                    heading: 'JOEL CREASEY’S EAST KIMBERLEY ADVENTURE',
                    description: 'Watch the comedian explore The Bungle Bungle Range, Kununurra/Goonoonoorrang, and more',
                    thumbnail: 'thumbnail-1.jpeg',
                    videoURL: 'https://www.youtube-nocookie.com/embed/uWrf2vt-7P8'
                },
                {
                    heading: 'JOEL CREASEY’S KUNUNURRA ADVENTURE',
                    description: 'Watch Joel take on El Questro and Lake Argyle',
                    thumbnail: 'thumbnail-2.jpeg',
                    videoURL: 'https://www.youtube-nocookie.com/embed/f0UCRFQJO9s'
                },
                {
                    heading: 'JOEL CREASEY’S LONG WEEKEND ADVENTURE',
                    description: 'Watch his wander out yonder in Perth',
                    thumbnail: 'thumbnail-3.jpeg',
                    videoURL: 'https://www.youtube-nocookie.com/embed/cHaKdzbjl9Y'
                },
                {
                    heading: 'JOEL CREASEY’S FOODIE ADVENTURE',
                    description: 'Watch the comedian wander out yonder in Perth and the Swan Valley',
                    thumbnail: 'thumbnail-4.jpeg',
                    videoURL: 'https://www.youtube-nocookie.com/embed/F50pooP7_fA'
                }
            ],
            mainDeals: [
                {
                    location: 'Perth',
                    heading: 'Taste Your Way Around Perth',
                    description: 'Indulge in a glorious food and wine journey',
                    images: [
                        'deal-1-image-01.png', 
                        'deal-1-image-02.png', 
                        'deal-1-image-03.png', 
                        'deal-1-image-04.png', 
                        'deal-1-image-05.png'
                    ],
                    details: [
                        'Taste of the Swan Valley day tour and cruise including lunch and tastings',
                        'Perth Small Bars and Street Art walking tour',
                        'Fremantle Food Lovers walking tour',
                        `4 nights' stay in a Guest Room at Rendezvous Hotel Perth Central, including daily breakfast`
                    ],
                    validUntil: '31 March 2023',
                    days: 5,
                    price: '685'
                },
                {
                    location: 'Perth',
                    heading: 'Wild About Perth: The Perfect Long Weekend Adventure',
                    description: 'Dolphins, ziplines and exciting city rambles',
                    images: [
                        'deal-2-image-01.png', 
                        'deal-2-image-02.png', 
                        'deal-2-image-03.png', 
                        'deal-2-image-04.png', 
                        'deal-2-image-05.png'
                    ],
                    details: [
                        'Swim with wild dolphins with Perth Wildlife Encounters',
                        'Twilight Matagarup Zip+Climb experience',
                        'Perth Experience Rickshaw Tour',
                        `3 nights' stay at Adina Apartment Hotel Perth Barrack Plaza`
                    ],
                    validUntil: '31 March 2023',
                    days: 4,
                    price: '779'
                },
                {
                    location: 'Kununurra',
                    heading: 'Kununurra Marvels: 5-Day Outback Adventure',
                    description: 'A jam-packed wilderness escape',
                    images: [
                        'deal-3-image-01.png', 
                        'deal-3-image-02.png', 
                        'deal-3-image-03.png', 
                        'deal-3-image-04.png', 
                        'deal-3-image-05.png'
                    ],
                    details: [
                        'Ord River Discoverer sunset tour including Lake Argyle',
                        'Scenic flight over the Bungle Bungle Range in World Heritage-listed Purnululu National Park',
                        '5 days 4WD car rental',
                        `2 nights’ stay at the historic El Questro and 2 nights' stay at Discovery Parks – Lake Kununurra`
                    ],
                    validUntil: '31 March 2023',
                    days: 5,
                    price: '1,749'
                },
                {
                    location: 'Kununurra',
                    heading: 'The Ultimate East Kimberley Experience',
                    description: 'Gorges, glamping, rich cultural explorations and far more',
                    images: [
                        'deal-4-image-01.png', 
                        'deal-4-image-02.png', 
                        'deal-4-image-03.png', 
                        'deal-4-image-04.png', 
                        'deal-4-image-05.png'
                    ],
                    details: [
                        '2-day Purnululu National Park Experience including glamping',
                        'Ord River Discoverer with Sunset Tour and Waringarri Arts Cultural Sunset Tour',
                        'Scenic flight over the Bungle Bungle Range in World Heritage-listed Purnululu National Park',
                        `4 nights' stay at Discovery Parks – Lake Kununurra`
                    ],
                    validUntil: '31 March 2023',
                    days: 6,
                    price: '2,499'
                }
            ],
            secondaryDeals: [
                {
                    location: 'Perth',
                    heading: 'Glamping Getaway: Perth and Rottnest Island Adventure',
                    description: '6-Day Perth City Break with Rottnest Island Glamping',
                    image: 'second-deal-image-01.png',
                    price: '849',
                    articleLink: 'https://www.10travlr.com.au/deals-and-offers/details/holiday-to-perth-with-glamping-on-rottnest-island-1041'
                },
                {
                    location: 'Perth to Exmouth',
                    heading: 'Journey Along Australia’s Coral Coast',
                    description: '10-Day Perth to Exmouth Return Adventure',
                    image: 'second-deal-image-02.png',
                    price: '2,299',
                    articleLink: 'https://www.10travlr.com.au/deals-and-offers/details/the-journey-to-australias-north-west-1039'
                },
                {
                    location: 'Southern WA',
                    heading: 'Highlights of the South West',
                    description: '5-Day Margaret River and Albany Adventure',
                    image: 'second-deal-image-03.png',
                    price: '1,895',
                    articleLink: 'https://www.10travlr.com.au/deals-and-offers/details/experience-the-highlights-of-southern-wa-1049'
                },
                {
                    location: 'Ningaloo Reef',
                    heading: 'WA Highlights: A Reef to Outback Adventure',
                    description: '8-Day Ningaloo Reef and Karijini Adventure',
                    image: 'second-deal-image-04.png',
                    price: '4,055',
                    articleLink: 'https://www.10travlr.com.au/deals-and-offers/details/explore-western-australias-best-bits-1048'
                },
                {
                    location: 'The Kimberley',
                    heading: 'Kimberley Wilderness Adventure',
                    description: '9-Day Premium Kimberley and the Bungle Bungle Range',
                    image: 'second-deal-image-05.png',
                    price: '10,285',
                    articleLink: 'https://www.10travlr.com.au/deals-and-offers/details/kimberley-wilderness-adventure-1043'
                }
            ],
            categoryItem: [
                {
                    heading: 'Explore Activities',
                    description: 'Unique things to do for every kind of holiday',
                    image: 'category-01.png',
                    url: 'https://10travlr.com.au/activities'
                },
                {
                    heading: 'Find Places to Stay',
                    description: 'Cosy retreats and city breaks for every budget',
                    image: 'category-02.png',
                    url: 'https://10travlr.com.au/accommodation'
                },
                {
                    heading: 'Search Flights',
                    description: 'Flights to suit your calendar',
                    image: 'category-03.png',
                    url: 'https://10travlr.com.au/flights'
                }
            ],
            nameInput: '',
            emailInput: '',
            selectedCarousel: 0,
            carouselSettings: {
                itemsToShow: 1,
                snapAlign: 'start'
            },
            carouselBreakpoints: {
                640: {
                    itemsToShow: 1,
                    snapAlign: 'start'
                },
                1024: {
                    itemsToShow: 2,
                    snapAlign: 'start'
                }
            },
            currentSecondaryDeals: 0,
            currentImageInGalleryImage: 0
        }
    },
    mounted() {
        this.getVideoBackgroundHeight()
    },
    methods: {
        getVideoBackgroundHeight() {
            const vh = window.innerHeight * 0.01
            document?.documentElement.style.setProperty('--vh', `${vh}px`)
        },
        changeSelectedCarousel (index: number) {
            if (this.selectedCarousel !== index) {
                this.selectedCarousel = index
            }
        },
        checkEmailIsValid () {
            const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi
            return regexExp.test(this.emailInput)
        },
        prevSecondaryDeals() {
            (this.$refs['secondaryDealsCarousel'] as any).prev()
        },
        nextSecondaryDeals() {
            (this.$refs['secondaryDealsCarousel'] as any).next()
        },
        slideGalleryImage(index: number) {
            (this.$refs['galleryImage'] as any).slideTo(index)
        },
        updatePaginationButton() {
            const galleryImagesButtons: NodeListOf<HTMLButtonElement> | null = document.querySelectorAll('.gallery-image-button')

            galleryImagesButtons.forEach(element => {
                element.classList.remove('active', 'near', 'far')
            })
            
            galleryImagesButtons[this.currentImageInGalleryImage].classList.add('active')
            galleryImagesButtons[this.currentImageInGalleryImage + 1]?.classList.add('near')
            galleryImagesButtons[this.currentImageInGalleryImage - 1]?.classList.add('near')
            galleryImagesButtons[this.currentImageInGalleryImage + 2]?.classList.add('far')
            galleryImagesButtons[this.currentImageInGalleryImage - 2]?.classList.add('far')
        }
    }
}
</script>

<style lang="scss" scoped>
    .height-viewport {
        height: 100vh; /* Fallback for browsers that do not support Custom Properties */
        height: calc(var(--vh, 1vh) * 100);
    }
    .overview-section {
        .gallery-image-button {
            transition: 0.4s;
            width: 2px;
            height: 2px;
            background-color: $gray-lighter;
    
            &.far {
                width: 4px;
                height: 4px;
            }
    
            &.near {
                width: 6px;
                height: 6px;
            }
    
            &.active {
                width: 6px;
                height: 6px;
                background-color: $primary-color;
            }
        }

        @media screen and (min-width: 1024px) {
            .more-wider {
                width: 360px;
                height: 240px;
            }

            .more-higher {
                width: 280px;
                height: 360px;
            }
        }
    }

    .you-may-also-like-section {
        .swipe-button {
            border: 1px solid $gray-lighter;

            &:hover {
                border-color: $primary-color;
                background-color: $primary-color;

                .swipe-deals {
                    filter: none;
                }
            }
        }

        .swipe-deals {
            filter: invert(.9);
        }

        .carousel-item {
            width: 100%;
        }

        @media screen and (min-width: 1024px) { 
            .carousel__slide > div {
                padding: 0 24px;
            }

            .carousel__slide--active > div {
                padding-left: 0;
                padding-right: 12px;
            }

            .carousel__slide--next > div {
                padding-left: 12px;
                padding-right: 0;
            }
        }
    }

    .policies-section .top-border{
        border-top: 1px solid #E5E7EB;
    }

    .form-section {
        background-color: $gray-lightest;

        .input-form {
            border: 1px solid $gray-lighter;
        }

        .submit-form {
            background-color: $primary-color;

            &[disabled] {
                background-color: $gray-lighter;
            }
        }

        @media screen and (min-width: 1024px) {
            height: 656px;
        }
    }
</style>
