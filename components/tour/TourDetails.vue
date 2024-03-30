<template>
  <div class="card w-full py-7">
    <UiBreadCrumbs :links="links" />
    <div class="flex mt-6">
      <div class="">
        <TourGallery />
      </div>
      <div class="">
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
const { tour } = defineProps(['tour']);

const links = [
  {
    name: 'Главный',
    url: '/',
  },
  {
    name: 'Туры',
    url: '/tour',
  },
  {
    name: `${tour.name}`,
    url: '/',
  },
];
</script>

<style scoped>
img {
  max-width: 400px;
}
</style>
