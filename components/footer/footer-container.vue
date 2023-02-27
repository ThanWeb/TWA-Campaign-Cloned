<template>
    <footer class="bg-black text-white flex flex-col items-center py-12">
        <nav class="mb-4">
            <ul>
                <li class="mb-6 text-center font-semibold text-sm">
                    <a 
                        rel="external noopener" 
                        href="https://www.10travlr.com.au/pages/privacy-policy-1"
                    >
                        Privacy Policy
                    </a>
                </li>
                <li class="mb-6 text-center font-semibold text-sm">
                    <a 
                        rel="external noopener" 
                        href="https://www.10travlr.com.au/pages/term-of-service-3"
                    >
                        Terms
                    </a>
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
        <img 
            src="/_nuxt/assets/images/logo/AFTA-ATAS.svg"
            alt="AFTA ATAS"
            class="mb-4 h-16"
        >
        <span class="date mb-8">© 2023 10travlr. All rights reserved.</span> 
        <button
            type="button"
            class="text-sm flex items-center" 
            @click="scrollToTop"
        >
            <span>
                Back to top 
            </span>
            <img 
                src="/_nuxt/assets/images/icons/icon-up.svg"
                alt="Back to top"
                class="w-5 ml-2"
            >
        </button>
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
