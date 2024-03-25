<template>
  <div class="p-10 flex flex-wrap justify-between">
    <div
      v-for="profile in profiles"
      :key="profile.to"
      class="border-2 mb-5 border-pink-800 block max-w-[18rem] bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white"
    >
      <div class="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          class="rounded-t-lg h-[250px] w-[300px]"
          :src="profile.picture"
          alt=""
        />
      </div>
      <div class="p-4">
        <NuxtLink>
          <button
            class="mb-2 text-xl text-pink-400 font-thin leading-tight text-black"
          >
            {{ profile.name }} {{ profile.lastName }}
          </button>
        </NuxtLink>
        <p class="text-base text-black text-pink-200">
          {{ profile.about }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { profiles } from "~/constant";
</script>
