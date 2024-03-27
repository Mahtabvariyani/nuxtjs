<template>
  <div class="cart-item m-3 text-white" data-testid="cart-item">
    <figure class="cart-item__image-container">
      <img :src="item.photoURL" :alt="item.name" class="cart-item__image" />
      <figcaption class="cart-item__title text-white">{{ item.name }}</figcaption>
    </figure>

    <div>
      <button aria-label="Remove item" @click="$emit('remove-button-click')">
        <Trash />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Trash } from "lucide-vue-next";
import { defineProps } from 'vue';

// Define props
const props = defineProps<{
  item: {
    photoURL: string;
    name: string;
    // Add other necessary properties here
  };
}>();
</script>

<style>
.cart-item {
  display: flex;
  border: 1px solid lightgray;
  padding: 1rem;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 0.5rem;
}

.cart-item__image-container {
  display: flex;
  gap: 1rem;
}

.cart-item__image {
  max-width: 100px;
}
</style>
