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
            class="mr-2 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="26"
          >
            <path
              fill="#A9A9A9"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <span class="font-semibold"> В избранное</span>
        </span>
        <div class="mt-12 rounded-lg shadow-lg w-full p-4">
          <p class="text-lg my-4 items-center">
            Тур с перелётом от
            <span class="font-bold text-[22px] ml-1"> {{ tour.price }}₸</span>
          </p>
          <div
            class="text-gray-600 font-semibold text-lg flex justify-between items-center border-b-2 py-6"
          >
            <span class="max-w-[400px]"
              >В стоимость тура входит: отель, авиабилет, трансфер, страховка:
            </span>
            <div class="flex justify-center gap-1">
              <IconsPlane /> + <IconsHotel /> + <IconsSafe /> +
              <IconsTrain />
            </div>
          </div>
          <div class="py-6">
            <h3 class="font-semibold text-lg">Услуги и удобства</h3>
            <div class="text-black">✔ Ресторан</div>
            <span
              class="flex gap-3 cursor-pointer items-center text-lg text-center justify-center"
              id="arrow"
            >
              <span disabled class="text-m">Все услуги</span>
              <svg
                width="28"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="Layer 2" id="Layer_2">
                  <path
                    d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"
                  />
                </g>
              </svg>
            </span>
          </div>
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

#arrow svg {
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

#arrow:hover svg {
  transform: translateX(10px); /* Moves the arrow 5px to the left on hover */
}
#arrow:hover {
  opacity: 0.6;
}
</style>
