<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Button from "~/components/ui/button/Button.vue";
</script>

<template>
  <Sheet>
    <SheetTrigger class="pl-3">
      <Button> Open </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Here are the items in your cart</SheetTitle>
        <SheetDescription> Not yet complete </SheetDescription>
      </SheetHeader>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - {{ item.quantity }}
        </li>
      </ul>
    </SheetContent>
  </Sheet>
</template>
