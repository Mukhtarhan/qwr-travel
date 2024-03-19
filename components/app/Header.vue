<template>
  <header class="bg-gray-800 text-black">
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
      <nav class="flex items-center space-x-10 text-white text-xl">
        <NuxtLink
          :to="item.url"
          class="hover:text-light-blue"
          v-for="item in MENU_DATA"
          :key="item.name"
          >{{ item.name }}</NuxtLink
        >
      </nav>

      <div class="flex items-center space-x-2">
        <div>
          <select
            class="rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-800"
          >
            <option value="EN">EN</option>
            <option value="RU">RU</option>
            <option value="KZ">KZ</option>
          </select>
        </div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
          Вход
        </button>
      </div>
    </div>
  </header>
</template>
    
<script lang="ts" setup>
import { MENU_DATA } from './menu.data';
</script>
    
    <style lang="postcss" scoped>
</style>
    