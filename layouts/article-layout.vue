<template>
    <div class="article-layout">
        <HeaderArticleHeaderContainer />
        <slot />
        <FooterContainer />
    </div>
</template>

<style lang="scss">
    .article-layout .custom-border {
        border-bottom: 1px solid $gray-lighter;
    }
</style>
