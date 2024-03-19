<template>
  <footer class="bg-gray-200 text-black py-8 px-4 text-lg">
    <div class="container">
      <div class="flex mb-8 justify-between">
        <div class="flex flex-col">
          <img
            src="../../assets/images/logo.jpg"
            alt="logo"
            width="49"
            height="48"
            class="mb-4"
          />
          <NuxtLink
            :to="item.url"
            class="hover:text-light-blue"
            v-for="item in MENU_DATA"
            :key="item.name"
            >{{ item.name }}</NuxtLink
          >
        </div>

        <div></div>

        <form class="flex flex-col gap-4" @submit.prevent="">
          <input
            type="email"
            placeholder="mukhtarhan@gmail.com"
            required
            class="rounded-lg px-4 py-2 bg-white"
          />
          <button class="bg-purple-700 text-white rounded-lg px-4 py-2">
            Подписаться
          </button>
        </form>
      </div>

      <!-- Footer Info -->
      <div class="flex gap-6">
        <div class="w-1/2">
          <h3 class="font-semibold">Тур ногами отель</h3>
          <p class="text-lg mt-4">
            Дизайнерский отель «Турногами» построен в 2015 году в первой
            береговой линии поселка Кучугуры. Комплекс отеля выполнен в стиле
            французского модерна и окружает вас ненавязчивым шармом Парижа, Сан
            Суси и творческого Монмартра и запахом лаванды, которая цветет
            вокруг. Это современное 3-х этажное здание с 12 номерами и открытым
            солярием на крыше с уникальным видом на море и песчаным пляжем в 30
            метрах. Оснащение, дизайн и комплектация номеров соответствуют
            категории 4 звезды.
          </p>
        </div>
        <div class="w-1/2">
          <img src="" alt="" width="12" class="mb-4" />
          <p class="text-lg">
            Все права защищены
            <br /><br />
            Сайт использует файлы cookie для удобства пользователей. Вы можете
            запретить их сохранение в настройках вашего браузера. Если вы
            продолжаете использовать сайт, вы соглашаетесь на использование
            файлов cookie.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
    
  <script setup lang="ts">
import { MENU_DATA } from './menu.data';
</script>
    