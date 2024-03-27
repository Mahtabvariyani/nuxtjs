<template>
  <div class="p-10 flex flex-wrap justify-between">
    <Card
      v-for="product in Products"
      :key="product.id"
      class="p-3 m-2 w-[400px]"
    >
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
