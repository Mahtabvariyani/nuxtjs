<template>
    <div>
        <button @click="decrement">decrement</button>

      <p>Count: {{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  const count = ref(0);
  
  function increment() {
    count.value++;
  }
  function decrement() {
    count.value--;
  }
  </script>
  