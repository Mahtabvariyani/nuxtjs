<template>
  <div class="p-10 flex flex-wrap justify-between">
    <Card
      v-for="product in Products"
      :key="product.id"
      class="p-3 m-2 w-[400px]"
    >
     <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
      <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ad4f76] to-[#474287] opacity-30" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
      <CardHeader>
        <CardTitle>
          <img class="w-[200px]" :src="product.photoURL" alt="" />
        </CardTitle>
        <CardDescription>{{ product.name }}</CardDescription>
      </CardHeader>
      <CardContent> {{ product.Price }} </CardContent>
      <NuxtLink :href="`/store/${product.id}`">
        <Button p-2 border-2 border-pink-200 @click="addToCart(product)">
          View more
        </Button>
      </NuxtLink>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Products } from "@/constant";
import Button from "@/components/ui/button/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


</script>
