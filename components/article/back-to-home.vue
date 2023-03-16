<template>
    <NuxtLink 
        to="/"                     
        class="hidden lg:flex mt-12 items-center"
    >
        <img 
            class="back-to-home"
            src="/images/icons/arrow-left.svg"
            alt="Back to Home"
        >
        <span class="lg:ml-3 text-sm uppercase tracking-widest text-gray-darkest font-semibold">Back</span>
    </NuxtLink>
</template>

<style lang="scss">
    .back-to-home {
        filter: invert(.5);
    }
</style>
