<template>
    <div class="text-white container">
      <h1>Cart</h1>
  
      <div v-if="isMounted && !hasLoadedCartItems">
        <p>You don't have any items in your cart</p>
      </div>
      <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
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