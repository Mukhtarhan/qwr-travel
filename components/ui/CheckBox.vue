<template>
  <div class="checkbox-price-input flex items-center gap-4">
    <input type="checkbox" v-model="isChecked" @input="toggle"/>
    <label>
      {{ label }}
    </label>
  </div>
</template>
  
<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Smth',
  },

});

function toggle() {
  emit('update:isChecked', isChecked.value , props.label)
}

const emit = defineEmits(['update:isChecked'])

const isChecked = ref(false)

const price = ref(10.99); // Replace with your price value

const formattedPrice = ref(() => {
  // Implement your formatting logic here
  // Example: Add currency symbol and two decimal places
  return `$${price.value.toFixed(2)}`;
});
</script>

<style scoped>
.checkbox-price-input input {
  /* Adjust size */
  width: 18px;
  height: 18px;

  /* Remove default browser styles */
  appearance: none;
  margin: 0;
  padding: 0;
  border: 2px solid #ccc;
  border-radius: 4px;
}

.checkbox-price-input input:checked {
  /* Change background color on check */
  background-color: #0b0153;
}
</style>