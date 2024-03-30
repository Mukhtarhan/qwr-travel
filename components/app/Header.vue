<template>
  <header class="text-black font-semibold">
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
      <nav class="flex items-center space-x-16 text-lg">
        <NuxtLink
          :to="item.url"
          class="hover:underline"
          v-for="item in MENU_DATA"
          :key="item.name"
          >{{ item.name }}</NuxtLink
        >
      </nav>

      <div class="flex items-center space-x-2 gap-2">
        <span class="text-xl mr-3">+7708 288 57 95</span>
        <div>
          <select
            class="focus:outline-none text-m font-semibold p-1 rounded-xl border-[1px] bg-inherit hover:opacity-95"
          >
            <option value="EN" class="text-black">EN</option>
            <option value="RU" class="text-black">RU</option>
            <option value="KZ" class="text-black">KZ</option>
          </select>
        </div>

        <NuxtLink v-if="userStore.isAuth" to="/profile">
          <IconsProfile class="text-black text-[34px] cursor-pointer" />
        </NuxtLink>

        <NuxtLink to="/auth" v-else>
          <button
            class="text-m py-1 px-1 rounded-xl border-[1px] hover:opacity-90"
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
