<template>
  <div class="text-lg">
    <nav class="m-4 flex flex-row">
      <div v-for="navItem in navItems" :key="navItem.to">
        <NuxtLink
          :to="navItem.to"
          class="p-2 m-2 rounded-md border-black"
          :class="navItem.bgClass"
          >{{ navItem.label }}</NuxtLink
        >
      </div>
    </nav>

    <NuxtPage />
  </div>
</template>
<script setup>
const navItems = [
  { to: "/", label: "Home", bgClass: "bg-red-100" },
  { to: "/about", label: "About", bgClass: "bg-red-200" },
  { to: "/profile", label: "Profile", bgClass: "bg-red-300" },
  { to: "/iphone", label: "Iphone", bgClass: "bg-red-400" },
];
</script>
