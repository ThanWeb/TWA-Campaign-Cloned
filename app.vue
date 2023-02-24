<template>
    <div class="main">
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style lang="scss">
    .main {
        background-color: $color-primary;
    }

    .page-enter-active,
    .page-leave-active {
        transition: all 0.1s;
    }
        
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
    }
</style>
