<template>
  <div>
    <nav class="m-4 flex flex-row">
      <div v-for="navItem in navItems" :key="navItem.to">
        <NuxtLink
          :to="navItem.to"
          class="p-2 m-2 text-pink-500 rounded-xl border-black"
          :class="navItem.bgClass"
          >{{ navItem.label }}</NuxtLink
        >
      </div>
      <SlideOver />

      <!-- <Darkmode /> -->
    </nav>
  </div>
</template>
<script setup>
import { navItems } from "~/constant";
</script>
