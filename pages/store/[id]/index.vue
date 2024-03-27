<template>
  <div class="container text-white" v-if="product">
    <h1>{{ product.name }}</h1>
    <p>Description: {{ product.description }}</p>
    <p>Price: {{ product.Price }}</p>
    <img :src="product.photoURL" alt="" />

    <Button class="m-2 p-2" @click="handleAddToCart">Add to Cart</Button>

    <div v-if="toastShouldShow">
      <page-toast is-closable @close="() => showToast(false)">
        <div>
          <span class="product-page__success-message"
            >Product successfully added!</span
          >
          <NuxtLink
            to="/checkout"
            class="product-page__go-to-cart-link text-red-400 text-ellipsis underline underline-offset-2 pl-2"
            >Go to cart</NuxtLink
          >
        </div>
      </page-toast>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Products } from "@/constant";
import { useRoute } from "vue-router";
import  Button  from "@/components/ui/button/Button";
const route = useRoute();
const productId = ref(null);
const product = ref(null);
const toastShouldShow = ref(false); // Define the toastShouldShow variable

onMounted(() => {
  productId.value = parseInt(route.params.id);
  product.value = Products.find((product) => product.id === productId.value);
});

const { addItem } = useCart();
const handleAddToCart = () => {
  // TODO: in a real world there would be some error handling here
  addItem(product);
  showToast(true); // Update the toastShouldShow variable
};

const showToast = (value) => {
  toastShouldShow.value = value;
};
</script>
