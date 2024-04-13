<template>
  <div class="container">
    <div>
      <UiBreadCrumbs :links="links" class="py-7" />
      <div class="flex gap-[200px] mt-[50px]">
        <TourFilter />
        <div>
          <div class="flex justify-between items-center">
            <p class="text-m text-gray-400 font-medium">
              Нашли {{ tours.length }} туров
            </p>
            <div class="comments-sort">
              <button
                @click="isOpened = !isOpened"
                class="flex items-center text-m font-semibold gap-2 p-2 rounded-xl border-[1px] bg-gray-100"
              >
                <span>{{ sortValue }}</span>
                <IconsArrow
                  class="flex items-center justify-between font-medium text-sm cursor-pointer"
                  :class="{ 'rotate-180': !isOpened }"
                />
              </button>
              <UiCollapse
                :is-collapsed="isOpened"
                class="mt-2 bg-gray-100 rounded fixed"
              >
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
            <TourCardTour
              :tour="tour"
              v-for="tour in sortedTours"
              :key="tour"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import getHotels from '@/composable/api';

const fltr = ['Сначала дешёвые', 'Сначала дорогие', 'По рейтингу'];
const isOpened = ref(false);
const sortValue = ref('По рейтингу');

const links = [
  {
    name: 'Главный',
    url: '/',
  },
  {
    name: 'Туры',
    url: '/tour',
  },
];

const { hotels, load } = getHotels();

load();

const tours = hotels.value;
console.log(hotels);

const changeSortValue = temp => {
  sortValue.value = temp;
  isOpened.value = false;
};

const sortedTours = computed(() => {
  let tempComment = [...tours];

  if (sortValue.value === 'Сначала дорогие') {
    tempComment = tempComment.sort((a, b) => b.price - a.price);
  } else if (sortValue.value === 'Сначала дешёвые') {
    tempComment = tempComment.sort((a, b) => a.price - b.price);
  } else {
    tempComment = tempComment.sort(
      (a, b) => b.comments.rating - a.comments.rating
    );
  }

  return tempComment;
});
</script>

<style scoped></style>
