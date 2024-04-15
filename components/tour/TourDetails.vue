<template>
  <div class="card w-full py-7">
    <UiBreadCrumbs :links="links" />
    <h2 class="text-4xl my-7 font-bold">{{ tour.name }}</h2>
    <div class="flex mt-6 justify-between">
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
      <div class="flex flex-col relative w-[750px]">
        <span
          class="absolute top-2 right-0 flex justify-center items-center text-gray-500"
        >
          <svg
            class="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="#A9A9A9"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <span class="font-semibold"> В избранное</span>
        </span>
        <div class="mt-12 rounded-lg shadow-lg w-full">
          <p class="text-xl my-7">Price - ${{ tour.price }}</p>
          <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
          <p class="mb-7">{{ tour.services }}</p>
          <button class="btn flex">
            <i class="material-icons mr-2">add_shopping_cart</i>
            <span>Add to cart</span>
          </button>
        </div>
        <div class="mt-12 rounded-lg shadow-lg w-full">
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
