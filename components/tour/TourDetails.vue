<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="`${tour.image}`" class="mx-auto my-7" width="500" height="650"/>
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ tour.name }}</h2>
                <p class="text-xl my-7">Price - ${{ tour.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
                <p class="mb-7">{{ tour.services }}</p>
                <button class="btn flex">
                    <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['tour'])
</script>

<style scoped>
img {
    max-width: 400px;
}
</style>