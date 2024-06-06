<template>
  <div class="app bg">
    <AppHeader class="text-black bg-white" />

    <NuxtPage class="" />

    <AppFooter />
  </div>
</template>

<script setup lang="ts"></script>

<style>
.container {
  max-width: 1580px;
  margin: auto;
}
.bg {
  background: radial-gradient(
    circle,
    rgba(255, 254, 254, 1) 0%,
    rgba(181, 215, 213, 1) 100%
  );
}
</style>
