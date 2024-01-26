<template>
  <p>Iphone {{ $route.params.name }}</p>
</template>
<script setup>
const route = useRoute();
const name = computed(() => {
  return route.params.name.replace("-", " ");
});
</script>
