<template>
  <div class="container">
    <div class="flex gap-[200px] mt-[100px]">
      <TourFilter />
      <div>
        <div class="flex justify-between items-center">
          <p class="text-m text-gray-400 font-medium">Нашли {{ hotels.length }} туров</p>
        <div class="comments-sort">
           <button @click="isOpened = !isOpened" class=" flex items-center text-m font-semibold gap-2 p-2 rounded-xl border-[1px] bg-gray-100">     
             <span>{{ sortValue }}</span>
             <IconsArrow
             class="flex items-center justify-between font-medium text-sm cursor-pointer"
             :class="{ 'rotate-180': !isOpened }"
           />
          </button>
    <UiCollapse :is-collapsed="isOpened" class="mt-2 bg-gray-100 rounded fixed">
      <div
          v-for="value in fltr"
          :key="value"
          @click="changeSortValue(value)"
          class="p-2 cursor-pointer hover:bg-slate-200"
        >
          {{ value }}
        </div>
    </UiCollapse>
    </div>
        </div>
        <div class="flex flex-col gap-6">
        <TourCardTour :hotel="hotel" v-for="hotel in hotels" :key="hotel"/>
      </div>
      </div>
      
      </div>
  </div>
</template>
  
  <script setup lang="ts"> 
import { hotels } from '~/server/data';

const fltr = ['Сначала дешёвые', 'Сначала дорогие', 'По рейтингу']
const isOpened = ref(false);
const sortValue = ref('сначала высокие оценки');


const changeSortValue = (temp: string) => {
  sortValue.value = temp;
  isOpened.value = false;
};


</script>

  
<style scoped>
</style>