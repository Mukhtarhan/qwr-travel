<template>
  <div class="">
    <div class="relative overflow-hidden">
      <img
        :src="album[0]"
        alt=""
        width="789"
        height="412"
        class="object-cover rounded-lg"
      />
      <button
        type="button"
        @click="toLeft"
        class="absolute top-1/2 -translate-y-1/2 left-4 focus:outline-none rounded-full bg-gray-800/50 hover:bg-gray-800/70 text-white p-2"
      >
        <svg
          class="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 5l-5 5l5 5"
          />
        </svg>
      </button>
      <button
        type="button"
        @click="toRight"
        class="absolute top-1/2 -translate-y-1/2 right-4 focus:outline-none rounded-full bg-gray-800/50 hover:bg-gray-800/70 text-white p-2"
      >
        <svg
          class="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l5 5l-5 5"
          />
        </svg>
      </button>
    </div>
    <div class="flex gap-6 mt-6">
      <img
        v-for="index in (1, 4)"
        :key="index"
        :src="album[index]"
        alt="room"
        width="178"
        height="72"
        class="rounded-lg cursor-pointer hover:opacity-80"
        @click="pickUpImage(index)"
      />
    </div>
  </div>
</template>

<script setup>
const album = ref([
  'https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=',
  'https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg',
  'https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg',
  'https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg',
  'https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg',
]);
const sign = '<';

const toRight = () => {
  const img_1 = album.value[0];
  for (let i = 0; i < album.value.length - 1; i++) {
    album.value[i] = album.value[i + 1];
  }
  album.value[4] = img_1;
};

const toLeft = () => {
  const img_1 = album.value[album.value.length - 1];
  for (let i = album.value.length - 1; i > 0; i--) {
    album.value[i] = album.value[i - 1];
  }
  album.value[0] = img_1;
};
const pickUpImage = ind => {
  const temp = album.value[ind];
  album.value[ind] = album.value[0];
  album.value[0] = temp;
};
</script>
