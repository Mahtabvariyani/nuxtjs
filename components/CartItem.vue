<template>
  <div class="cart-item m-3 text-white" data-testid="cart-item">
    <div class="cart-item__image-container">
      <img :src="item.photoURL" :alt="item.name" class="cart-item__image" />
      <ShoppingBasket class="text-pink-300 text-2xl" />

      <div class="cart-item__title text-white">{{ item.name }}</div>
    </div>

    <div>
      <button aria-label="Remove item" @click="$emit('remove-button-click')">
        <Trash />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Trash } from "lucide-vue-next";
import { ShoppingBasket } from 'lucide-vue-next';

import { defineProps } from "vue";

// Define props
const props = defineProps<{
  item: {
    photoURL: string;
    name: string;
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
