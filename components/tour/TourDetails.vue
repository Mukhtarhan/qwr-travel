<template>
  <div class="card w-full py-7">
    <UiBreadCrumbs :links="links" />
    <h2 class="text-4xl my-7 font-bold">{{ tour.name }}</h2>
    <div class="flex mt-6">
      <div class="">
        <div class="flex text-gray-500 gap-6 w-full text-lg">
          <div class="flex items-center">
            <IconsStar
              v-for="item in tour.star"
              :key="item"
              width="24"
              class="mr-2"
            />
            <span class="ml-4">|</span>
          </div>

          <div class="flex items-center font-medium gap-2">
            <IconsLocation width="25" class="" />
            <span class="">{{ tour.country }},</span>
            <span>{{ tour.city }}</span>
          </div>
        </div>
        <TourGallery class="mt-4" />
      </div>
      <div class="">
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
