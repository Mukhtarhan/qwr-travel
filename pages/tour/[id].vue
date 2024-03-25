<template>
  <div>
    <TourDetails :tour="tour" />
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;

const tour = {
  id: 7,
  name: 'Gureli Hotel',
  image:
    'https://kaztour.kz/_next/image?url=https%3A%2F%2Fkaztour.kz%2Fstorage%2Fresize%2Fimages%2Fhotels%2F9808992d-c7ab-4d36-80d1-7de8e49ff7a4%2F200_260_90_bylthtsp.jpg&w=1920&q=90',
  price: 652139,
  star: 4,
  city: 'Тбилиси',
  country: 'Грузия',
  services: ['Крытый бассейн', 'Ресторан'],
  comments: {
    rating: 5,
  },
};
</script>
