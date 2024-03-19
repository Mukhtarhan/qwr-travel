<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden flex max-w-[500px]">
    <div class="w-full">
      <img :src="hotel.image" alt="Hotel Image" class="h-full object-cover" />
    </div>
    <div class="p-4 flex flex-col justify-between">
      <h3 class="text-lg font-medium text-gray-900">{{ hotel.name }}</h3>
      <div class="flex items-center justify-between mb-2">
        <p class="text-gray-700">Price: {{ hotel.price }} per night</p>
        <div class="flex items-center">
          <span v-for="n in 5" :key="n" class="mr-1">
            <svg
              v-if="n <= hotel.rating"
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M9.707 1.05l-5.667 4.125C4.014 5.173 3.5 5.867 3.5 6.692v9.375c0 1.326.514 2.25 1.51 2.762L9.707 18.95l4.125-3.125c.996-.712 1.51-1.866 1.51-2.762V6.692c0-.825-.515-1.519-1.51-2.642z"
              />
            </svg>
            <svg
              v-else
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="gray-300"
              class="text-gray-300"
            >
              <path
                d="M9.707 1.05l-5.667 4.125C4.014 5.173 3.5 5.867 3.5 6.692v9.375c0 1.326.514 2.25 1.51 2.762L9.707 18.95l4.125-3.125c.996-.712 1.51-1.866 1.51-2.762V6.692c0-.825-.515-1.519-1.51-2.642z"
              />
            </svg>
          </span>
          <span class="text-gray-500 text-sm">
            {{ hotel.rating }} star rating
          </span>
        </div>
      </div>
      <button
        @click="$emit('moreDetails')"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        More
      </button>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { hotel } from './tour.data';
</script>
  