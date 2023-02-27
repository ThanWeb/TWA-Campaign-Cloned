<template>
    <NuxtLayout>
        <main>
            <NuxtPage />
        </main>
    </NuxtLayout>
</template>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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
