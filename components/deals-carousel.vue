<template>
    <div class="deals-carousel">
        <div>
            <img 
                v-for="(image, index) in images"
                :key="index"
                :src="`/images/main-deals/${image}`" 
                :alt="heading"
            >
        </div>
        <div>
            <span>
                {{ location }}
            </span>
            <h3>
                {{ heading }}
            </h3>
            <p>
                {{ description }}
            </p>
        </div>
        <div>
            <button>
                Inclusions
                <img 
                    src="/images/icons/arrow-up.svg" 
                    alt="Inclusions"
                >
            </button>
            <ul>
                <li 
                    v-for="(detail, index) in details"
                    :key="index"
                >
                    {{ detail }}
                </li>
            </ul>
        </div>
        <div>
            <p>
                Valid for travel until 
                <span>
                    {{ validUntil }}
                </span>
            </p>
            <p>
                <span>
                    {{ days }}
                </span>
                days starts from $
                <span>
                    {{ price }}
                </span>
                per person, twin share
            </p>
            <button>
                See More
            </button>
        </div>
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
        images: {
            type: Array<string>,
            default: ['deal-1-image-01.png']
        },
        details: {
            type: Array<string>,
            default: ['Lorem ipsum dolor amet']
        },
        validUntil: {
            type: String,
            default: '31 March 2023'
        },
        days: {
            type: Number,
            default: 1
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
