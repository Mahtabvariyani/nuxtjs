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
      <NuxtLink to="/checkout">
        <Button class="text-pink-500 border-pink-700 border bg-transparent hover:bg-slate-400 hover:opacity-40 ">Cart</Button>
      </NuxtLink>
      <!-- <SlideOver /> -->

      <!-- <Darkmode /> -->
    </nav>
  </div>
</template>
<script setup>
import Button from '@/components/ui/button/Button'
import { navItems } from "~/constant";
</script>
