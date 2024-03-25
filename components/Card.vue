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
  </div>
</template>
