<template>
  <div class="ui-bread-crumbs">
    <router-link
      class="breadcumb text-xl"
      :class="{ 'pointer-events-none': index + 1 === links.length }"
      v-for="(link, index) in links"
      :key="index"
      :to="link.url"
    >
      <p
        class="breadcumb__name"
        :class="{ 'font-semibold': index + 1 === links.length }"
      >
        {{ link.name }}
      </p>
      <p v-if="index + 1 !== links.length" class="breadcumb__slash">/</p>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  links: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="postcss">
.ui-bread-crumbs {
  @apply flex items-center;
}
.breadcumb {
  @apply flex items-center;

  &__name {
    @apply hover:underline;
  }

  &__slash {
    @apply mx-2 font-semibold;
  }

  &.lg {
    @apply text-xl md:text-2xl font-medium;

    .breadcumb {
      &__slash {
        @apply font-semibold;
      }
    }
  }

  &.md {
    @apply text-sm md:text-base font-semibold;
  }
}
</style>
