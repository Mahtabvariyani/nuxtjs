<template>
    <div class="text-white container">
      <h1>Cart</h1>
  
      <div v-if="isMounted && !hasLoadedCartItems">
        <p>You don't have any items in your cart</p>
      </div>
  
      <div class="cart-page__items">
        <CartItem
          v-for="item in cart"
          :key="item.id"
          :item="item"
          @remove-button-click="() => removeItem(item)"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const isMounted = ref(false);
  const { cart, removeItem } = useCart();
  
  const hasLoadedCartItems = computed(() => cart.value.length > 0);
  
  onMounted(() => {
    isMounted.value = true;
  });
  </script>