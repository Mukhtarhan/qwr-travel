<template>
  <div class="ui-filter">
    <div
      class="ui-filter-label flex justify-between font-medium text-lg items-center"
      @click="isExpanded = !isExpanded"
    >
      <p class="text-[16px]">{{ label }}</p>
      <IconsArrow
        class="ui-filter-label__arrow"
        :class="{ 'rotate-180': !isExpanded }"
      />
    </div>
    <UiCollapse :is-collapsed="isExpanded" class="mt-5">
      <slot></slot>
    </UiCollapse>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
});
const isExpanded = ref(true);
</script>

<style scoped lang="postcss">
.ui-filter {
  &-label {
    @apply flex items-center justify-between font-medium text-sm cursor-pointer;

    &__arrow {
      @apply transition-all duration-300;
    }
  }

  &-item {
    transform-origin: top;
  }
}
</style>