<template>
    <h2
        class="px-4 sm:px-6 lg:px-0 font-semibold text-xl"    
        :class="additionalClasses"
    >
        {{ content }}
    </h2>
</template>

<script lang="ts">
export default {
    props: {
        content: {
            type: String,
            default: 'Lorem ipsum dolor sit'
        },
        additionalClasses: {
            type: String,
            default: ''
        }
    }
}
</script>
