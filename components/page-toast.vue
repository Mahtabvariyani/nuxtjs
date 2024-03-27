<template>
    <output class="flex align-middle items-center justify-between bg-green-400 text-green-700 p-5 border-lg border-2 border-green-700">
      <slot />
  
      <button v-if="isClosable" @click="$emit('close')" class="flex">
        <span class="pr-1">Close</span>
        <X class="text-red-700 pt-1" />
      </button>
    </output>
  </template>
  
  <script setup lang="ts">
  import { X } from "lucide-vue-next";
  
  type ToastProps = {
    isClosable?: boolean;
  };
  
  defineProps<ToastProps>();
  </script>
