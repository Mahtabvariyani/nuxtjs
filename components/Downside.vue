<template>
  <div class="">
    <Separator class="mb-5 mt-10 bg-pink-500" />

    <div class="flex">
      <Badge
        v-for="item in footerItems"
        :key="item.name"
        class="p-2 border-2 border-pink-700 text-thin hover:bg-pink-300 hover:bg-opacity-55 hover:text-white rounded-md ml-5 mb-5 text-pink-500 bg-transparent"
      >
        <NuxtLink :to="item.to" class="flex font-thin">
          <Icon :icon="item.icon" width="26" height="26" class="" />
          <p class="pt-1 pl-2">

              {{ item.name }}
          </p>
        </NuxtLink>
      </Badge>
      <p class="text-pink-400 pl-3 font-thin pt-2">
        <span class="text-white"></span> @Mah
      </p>

      <p class="text-pink-700 pl-3 font-thin pt-2">Copyright © 2024</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { footerItems } from "@/constant/index";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
</script>
