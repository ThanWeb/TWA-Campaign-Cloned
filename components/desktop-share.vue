<template>
    <div 
        class="h-36 fixed right-0 top-1/2 z-0 flex"
        style="margin-top: -72px;"
    >
        <div class="share-box hidden lg:flex flex-col bg-white h-full gap-y-4 p-3 items-center justify-between">
            <p>Share:</p>
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
    </div>
</template>

<style lang="scss" scoped>
    .share-box {
        box-shadow: 0 1px 5px rgb(0 0 0 / 6%);
    }

    p { 
        writing-mode: tb-rl; 
    }
</style>
