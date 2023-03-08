<template>
    <div class="deals-card">
        <img 
            :src="`/images/secondary-deals/${image}`" 
            :alt="heading"
        >
        <span>
            {{ location }}
        </span>
        <h3>
            {{ heading }}
        </h3>
        <p>
            {{ description }}
        </p>
        <p>
            Starts from $
            <span>
                {{ price }}
            </span>
        </p>
        <button>
            View Package
        </button>
    </div>
</template>

<script lang="ts">

export default {
    props: {
        location: {
            type: String,
            default: 'Perth'
        },
        heading: {
            type: String,
            default: 'Lorem ipsum heading'
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolor sit amet text'
        },
        image: {
            type: String,
            default: 'second-deal-image-01.png'
        },
        price: {
            type: String,
            default: '100'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
