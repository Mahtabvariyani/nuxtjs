<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { profiles } from "~/constant";
</script>

<template>
  <div class="p-10 flex flex-wrap justify-between">
    <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#af0b50] to-[#160e7f] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <Card
      class="border-2 mb-5 border-pink-800 block max-w-[18rem] text-surface shadow-secondary-1"
      v-for="profile in profiles"
      :key="profile.to"
    >
      <img
        class="rounded-t-lg h-[250px] w-[300px]"
        :src="profile.picture"
        alt=""
      />
      <CardHeader>
        <CardTitle class="dark:text-pink-100"> {{ profile.name }} {{ profile.lastName }} </CardTitle>
        <CardDescription>
          {{ profile.about }}
        </CardDescription>
      </CardHeader>

    </Card>
    <div class=" left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#c21d62] to-[#181087] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    
  </div>
</template>
