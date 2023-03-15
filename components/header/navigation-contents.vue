<template>
    <div class="nav-content flex flex-col text-center lg:text-left justify-evenly w-full lg-border">
        <ul class="flex flex-col lg:flex-row gap-y-14 lg:gap-x-6 custom-width lg:mx-auto">
            <li class="lg:w-1/4 text-xl font-semibold uppercase tracking-widest lg:flex lg:flex-col lg:gap-y-6">
                <span class="hidden lg:block">Hotels</span>
                <a 
                    href="https://www.10travlr.com.au/accommodation/search?Dest=Western%20Australia&DestFullName=Western%20Australia%2C%20Australia&GeoAreaId=western-australia-11212"
                    target="_blank" 
                    title="WA Hotels"
                    class="lg:text-base lg:font-normal lg:tracking-normal lg:normal-case"
                >
                    WA Hotels
                </a>
                <a 
                    href="https://www.10travlr.com.au/accommodation"
                    target="_blank" 
                    title="View All Hotels"
                    class="hidden lg:block text-base font-normal tracking-normal normal-case"
                >
                    View All Hotels
                </a>
            </li>
            <li class="lg:w-1/4 text-xl font-semibold uppercase tracking-widest lg:flex lg:flex-col lg:gap-y-6">
                <span class="hidden lg:block">Deals</span>
                <a 
                    target="_blank" 
                    title="WA Deals"
                    href="https://www.10travlr.com.au/deals-and-offers/search?keyword=Western%20Australia"
                    class="lg:text-base lg:font-normal lg:tracking-normal lg:normal-case"
                >
                    WA Deals
                </a>
                <a 
                    href="https://www.10travlr.com.au/deals-and-offers"
                    target="_blank" 
                    title="View All Deals"
                    class="hidden lg:block text-base font-normal tracking-normal normal-case"
                >
                    View All Deals
                </a>
            </li>
            <li class="lg:w-1/4 text-xl font-semibold uppercase tracking-widest lg:flex lg:flex-col lg:gap-y-6">
                <span class="hidden lg:block">Activities</span>
                <a 
                    target="_blank" 
                    title="WA Activities" 
                    href="https://www.10travlr.com.au/activities/search?q=western%20australia%2c%20australia&qtype=destination"
                    class="lg:text-base lg:font-normal lg:tracking-normal lg:normal-case"
                >
                    WA Activities
                </a>
                <a 
                    href="https://www.10travlr.com.au/activities"
                    target="_blank" 
                    title="View All Activities"
                    class="hidden lg:block text-base font-normal tracking-normal normal-case"
                >
                    View All Activities
                </a>
            </li>
            <li class="lg:w-1/4 text-xl font-semibold uppercase tracking-widest lg:flex lg:flex-col lg:gap-y-6">
                <span class="hidden lg:block">Flights</span>
                <a 
                    target="_blank" 
                    title="Flights" 
                    href="https://www.10travlr.com.au/flights"
                    class="lg:text-base lg:font-normal lg:tracking-normal lg:normal-case"
                >
                    <span class="hidden lg:inline-block">Search</span>
                    Flights
                </a>
            </li>
        </ul>
        <div class="flex lg:hidden justify-center gap-x-8 items-center">
            <p>Share</p>
            <a 
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.10travlr.com.au/western-australia-holiday-tours"
                target="_blank" 
                rel="external noopener"
            >
                <img 
                    src="/images/icons/icon-fb.svg"
                    alt="Facebook"
                    class="invert-dark"
                >
            </a>
            <a 
                href="https://twitter.com/intent/tweet?text=Western%20Australia%20Holiday%20Packages%3A%20Perth,%20The%20Kimberley%20%26%20More.%0A%0Ahttps%3A//www.10travlr.com.au/western-australia-holiday-tours%0A"
                target="_blank"
            >
                <img 
                    src="/images/icons/icon-tw.svg"
                    alt="Facebook"
                    class="invert-dark"
                >
            </a>
        </div>
        <a 
            href="#book-now-section"
            class="rounded-3xl book-now-button mx-6 uppercase py-3 font-semibold tracking-widest lg:hidden"
        >
            Book Now
        </a>
    </div>
</template>
