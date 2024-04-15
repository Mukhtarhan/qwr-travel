<template>
  <div class="bg-temp">
    <div class="container flex justify-center items-center">
      <h1 class="text-[64px] font-bold text-white text-center mt-10">
        Влюбляйтесь в <br />
        путешествия вместе с<br />
        нами!
      </h1>
    </div>
  </div>

  <div class="container p-6">
    <h2 class="text-[42px] font-bold mb-8">Горящие туры из г. Алматы</h2>
    <div></div>
  </div>

  <!-- <div class="h-[700px] container p-6">
    
    <swiper
      :slides-per-view="4"
      :space-between="30"
      class="overflow-hidden"
      virtual
    >
      <swiper-slide v-for="promotion in promotions" :key="promotion">
        <nuxt-img
          :src="promotion.image"
          alt=""
          width="350"
          class="cursor-pointer"
        />
      </swiper-slide>

      ...
    </swiper>
  </div> -->
</template>

<script setup>
// import { Swiper, SwiperSlide } from 'swiper/vue';

// import 'swiper/css';

const promotions = [
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJW-kWcR3dCVvkvfPMq9-F82go-kcOPcfebJbjikoRQUxzt1nRl19gdRvGM82c5IltITU&usqp=CAU',
    url: '',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUS-MTNwgp_dcvUqr6P3m6zL8K01k15z98Esvy_DEnG42mOY3Vr8THH2_SuqPSLwgI8ok&usqp=CAU',
    url: '',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaOe_uqfiwXvbZkxM2JZsaFevAkK0_kR8nXD0ww1SebcDeBnDQ9eNFdIlKZGemCLVsMY&usqp=CAU',
    url: '',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYPw3wNk29j_FAohJniU33Hhoe65ISQLKZfKzx_wif-2w4Lo1D3rwJd9Mze7lMTUs47k&usqp=CAU',
    url: '',
  },
];
</script>

<style scoped>
.bg-temp {
  background: url('https://images.iptv.rt.ru/images/cb2mfebir4ssllu4lm2g.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 450px;
}
img {
  transition: transform 0.2s ease-in-out;
}
img:hover {
  transform: scale(1.2);
}
</style>
