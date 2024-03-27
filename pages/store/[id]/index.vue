<template>
    <div class="container text-white" v-if="product">
      <h1>{{ product.name }}</h1>
      <p>Description: {{ product.description }}</p>
      <p>Price: {{ product.Price }}</p>
      <img :src="product.photoURL" alt="">
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue'
import { Products } from '@/constant'
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = ref(null)
const product = ref(null)

onMounted(() => {
  productId.value = parseInt(route.params.id)
  product.value = Products.find(product => product.id === productId.value)
})

  </script>
  