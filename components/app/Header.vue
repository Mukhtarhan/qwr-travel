<template>
  <header class="bg-gray-800 text-black font-semibold">
    <!-- Logo -->
    <div class="container py-4 flex items-center justify-between">
      <div>
        <img
          src="../../assets/images/logo.jpg"
          alt="logo"
          class="w-16 h-auto cursor-pointer"
        />
      </div>

      <!-- Menu -->
      <nav class="flex items-center space-x-16 text-white text-lg">
        <NuxtLink
          :to="item.url"
          class="hover:underline"
          v-for="item in MENU_DATA"
          :key="item.name"
          >{{ item.name }}</NuxtLink
        >
      </nav>

      <div class="flex items-center space-x-2 gap-2">
        <span class="text-white text-xl mr-3">+7708 288 57 95</span>
        <div>
          <select
            class="focus:outline-none text-m font-semibold py-2 px-3 rounded-xl border-[1px] bg-gray-100 hover:opacity-95"
          >
            <option value="EN">EN</option>
            <option value="RU">RU</option>
            <option value="KZ">KZ</option>
          </select>
        </div>

        <button
          class="text-m py-2 px-4 rounded-xl border-[1px] bg-gray-100 hover:opacity-95"
          @click="userStore.logOut"
          v-if="userStore.isAuth"
        >
          Выйти
        </button>

        <NuxtLink to="/auth" v-else>
          <button
            class="text-m py-2 px-4 rounded-xl border-[1px] bg-gray-100 hover:opacity-95"
          >
            Войти
          </button>
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { MENU_DATA } from './menu.data';
import { useUserStore } from '@/stores/UserStore';

const userStore = useUserStore();
</script>

<style lang="postcss" scoped></style>
