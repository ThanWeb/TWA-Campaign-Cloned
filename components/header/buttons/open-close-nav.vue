<template>
    <button type="button">
        <img 
            :src="isMainNavShowed ? '/images/icons/close.svg' : '/images/icons/hamburger.svg'"
            alt="Main Menu"
            :class="isMainNavShowed ? 'close-nav' : 'open-nav'"
        >
    </button>
</template>

<script lang="ts">
export default {
    props: {
        isMainNavShowed: {
            type: Boolean,
            default: false
        }
    }
}
</script>
