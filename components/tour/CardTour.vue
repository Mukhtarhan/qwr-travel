<template>
  <div
    class="bg-white rounded-lg shadow-md flex  max-w-[760px] max-h-[260px]"
  >
    <div class="w-[200px] h-[260px] bg-center rounded-lg" :style="{backgroundImage: 'url(' + tour.image + ')'}">
      
    </div>
    <div class="p-4 w-[560px]">
      <div class=" flex justify-between">
        <div class="flex justify-between items-center">
          <span v-for="n in tour.star" :key="n" class="mr-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Star 1"
                d="M12.6196 1.17082C12.7393 0.802295 13.2607 0.802296 13.3804 1.17082L16.0534 9.39737C16.1069 9.56218 16.2605 9.67376 16.4338 9.67376H25.0837C25.4712 9.67376 25.6323 10.1696 25.3188 10.3974L18.3209 15.4817C18.1807 15.5835 18.1221 15.7641 18.1756 15.9289L20.8486 24.1554C20.9683 24.5239 20.5465 24.8304 20.233 24.6026L13.2351 19.5183C13.0949 19.4165 12.9051 19.4165 12.7649 19.5183L5.76697 24.6026C5.45348 24.8304 5.03169 24.5239 5.15143 24.1554L7.8244 15.9289C7.87795 15.7641 7.81928 15.5835 7.67909 15.4817L0.681167 10.3974C0.367682 10.1696 0.528792 9.67376 0.916282 9.67376H9.56619C9.73948 9.67376 9.89306 9.56218 9.94661 9.39737L12.6196 1.17082Z"
                fill="#FFB801"
                stroke="#FFB801"
              />
            </svg>
          </span>
        </div>
        <div class=" flex gap-2 items-center">
          <span class="text-gray-300 text-[12px]">3467 отзывов</span>
          <span class="text-white p-1 bg-green-500 font-bold rounded-md text-[14px]">{{ tour.comments.rating }}</span>
        </div>
      </div>
      <div class="flex flex-col justify-between">
        <h3 class="text-xl font-bold text-gray-900">{{ tour.name }}</h3>
        <div class="text-gray-500 font-semibold">
          <span>{{ tour.country }}, </span>
          <span>{{ tour.city }}</span>
        </div>
        <div class="text-gray-600 text-[14px] font-semibold flex flex-col">
          <span v-for="service in tour.services" :key="service">{{ service }}</span>
        </div>
      <div class="flex items-center justify-between mt-6">
        <p class="font-bold text-[22px]">от {{ tour.price }} ₸</p>
        <div>
          <div class="text-gray-500 text-sm text-bold flex">
            <span>5 ночей, за 2 взр</span>
          </div>
          <NuxtLink :to="`tour/${tour.id}`">
            <button
        @click="$emit('moreDetails')"
        class="text-white bg-red-800 hover:bg-red-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Посмотреть тур
      </button>
          </NuxtLink>
        </div>
      </div>
      
    </div>
    </div>

    
  </div>
</template>
  
<script setup lang="ts">

defineProps({
 tour: {
  type: Object,
  default: () => {}
 }
})
</script>
  