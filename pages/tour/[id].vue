<template>
  <div class="container">
    <TourDetails :tour="tour" />
  </div>
</template>

<script setup>
import { getHotel } from '~/services/api';
const { id } = useRoute().params;
const tour = await getHotel(id);
</script>
