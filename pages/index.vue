<template>
    <div class="bg-red-200 text-lg">
      <a href="#" @click="view('home')" class="bg-blue-300 mr-4">Home</a>
      <a href="#" @click="view('counter')" class="bg-orange-300 mr-5">Counter</a>
  
  
      <LazyHomeWelcome v-if="page === 'home'" class="bg-blue-300 mr-4" />
      <LazyCounter v-if="page === 'counter'" class="bg-orange-300 mr-5" />
    </div>
  </template>
  
  <script setup>
  const page = ref("home");
  
  function view(name) {
    page.value = name;
  }
  </script>
  