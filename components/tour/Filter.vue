<template>
  <div class="flex flex-col max-w-[350px]">
    <TourFliterItem label="Бюджет">
      <UiRange />
    </TourFliterItem>
    <TourFliterItem label="Страны">
      <UiCheckBox
        v-for="item in COUNTRIES"
        :key="item"
        :label="item"
        :is-checked="true"
      />
    </TourFliterItem>
    <TourFliterItem label="Категория отеля">
      <UiCheckBox
        v-for="item in RATE_HOTELS"
        :key="item"
        :label="item.name"
        :is-checked="true"
      />
    </TourFliterItem>
    <TourFliterItem label="Формат питания">
      <UiCheckBox
        v-for="item in FF"
        :key="item"
        :label="item"
        :is-checked="true"
      />
    </TourFliterItem>
  </div>
</template>
  
  <script setup lang="ts">
import { FF, RATE_HOTELS, COUNTRIES } from './tour.data';
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