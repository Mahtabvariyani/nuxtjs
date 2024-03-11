<template>
    <div>
        <nav class="m-4 flex flex-row">
      <div v-for="navItem in navItems" :key="navItem.to">
        <NuxtLink
          :to="navItem.to"
          class="p-2 m-2 rounded-xl border-black"
          :class="navItem.bgClass"
          >{{ navItem.label }}</NuxtLink
        >
       
      </div>
    </nav>
    </div>
</template>
<script setup>
import { navItems } from '~/constant';
</script>