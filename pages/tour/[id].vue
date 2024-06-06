<template>
  <div class="container">
    <TourDetails :tour="tour" v-on:open-modal="openModal" />
    <div v-if="isModal" class="modal-overlay">
      <div class="modal">
        <h3>Modal Window</h3>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getHotel } from '~/services/api';
const { id } = useRoute().params;
const tour = await getHotel(id);
const isModal = ref(false);
function openModal() {
  isModal.value = true;
}
function closeModal() {
  isModal.value = false;
}
</script>
<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
