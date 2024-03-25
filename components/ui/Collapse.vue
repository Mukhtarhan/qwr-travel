<template>
  <div class="collapse-wrapper" :class="{ open: isCollapsed }">
    <div class="collapse-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isCollapsed: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="postcss" scoped>
.collapse {
  &-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 0.3s ease;

    &.open {
      grid-template-rows: 1fr;
    }
  }
  &-content {
    min-height: 0;
  }
}
</style>
