<template>
  <div class="flex flex-col justify-center">
    <div class="flex justify-evenly mt-4">
      <span class="p-[10px] text-[14px] bg-gray-100 rounded-2xl"
        >от {{ min_price }} ₸</span
      >
      <span class="p-[10px] text-[14px] bg-gray-100 rounded-2xl"
        >до {{ max_price }} ₸</span
      >
    </div>

    <div class="flex mt-4">
      <input
        type="range"
        step="100"
        v-model="min_price"
        min="0"
        max="2000000"
        class="slider w-full h-2 rounded-lg focus:outline-none"
      />
      <input
        type="range"
        step="100"
        v-model="max_price"
        min="0"
        max="4000000"
        class="slider w-full h-2 rounded-lg focus:outline-none"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const max_price = ref(4000000);
const min_price = ref(0);
</script>

<style scoped lang="postcss">
input[type='range'] {
  -webkit-appearance: none;
  margin-right: 15px;
  width: 150px;
  height: 7px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  background-image: linear-gradient(#e9e8e8, #d2d2d2);
  background-size: 100%;
  background-repeat: no-repeat;
}

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;

  background: #0b0153;
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background 0.3s ease-in-out;
}

input[type='range']::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}
</style>