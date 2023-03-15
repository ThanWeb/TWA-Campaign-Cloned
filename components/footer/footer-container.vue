<template>
    <footer class="bg-black text-white">
        <div class="flex flex-col items-center py-12 max-width-desktop px-6 custom-width mx-auto">
            <nav class="mb-4">
                <ul class="lg:flex gap-x-4">
                    <li class="mb-6 text-center font-semibold text-sm">
                        <a 
                            rel="external noopener" 
                            href="https://www.10travlr.com.au/pages/privacy-policy-1"
                        >
                            Privacy Policy
                        </a>
                    </li>
                    <li class="hidden lg:block">
                        .
                    </li>
                    <li class="mb-6 text-center font-semibold text-sm">
                        <a 
                            rel="external noopener" 
                            href="https://www.10travlr.com.au/pages/term-of-service-3"
                        >
                            Terms
                        </a>
                    </li>
                    <li class="hidden lg:block">
                        .
                    </li>
                    <li class="mb-6 text-center font-semibold text-sm">
                        <a 
                            rel="external noopener" 
                            href="https://www.10travlr.com.au/pages/refund-policy-5"
                        >
                            Refund Policy
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="lg:flex justify-between lg:w-full">
                <div class="mb-8 lg:flex items-center lg:mb-0 gap-x-6">        
                    <img 
                        src="/images/logo/AFTA-ATAS.svg"
                        alt="AFTA ATAS"
                        class="mb-4 h-16 mx-auto"
                    >
                    <span class="date mb-8 lg:mb-0">
                        © 2023 10travlr. All rights reserved.
                    </span>
                </div>
                <button
                    type="button"
                    class="text-sm flex items-center mx-auto lg:mx-0" 
                    @click="scrollToTop"
                >
                    <span>
                        Back to top 
                    </span>
                    <img 
                        src="/images/icons/icon-up.svg"
                        alt="Back to top"
                        class="w-5 ml-2"
                    >
                </button>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
export default {
    methods: {
        scrollToTop () {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    }
}
</script>
