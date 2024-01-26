<template>
  <div >
    <div class="flex">
        <div v-for="iphone in iphones" :key="iphone.name" 
    class="w-[30vh] border border-red-200 m-3 "
    
    >
      <img :src="iphone.src" alt="iphone" />
      <NuxtLink :to="iphone.to" class="flex flex-col items-center m-4">
        <button class="border border-rose-400 rounded-md w-full bg-rose-100 hover:bg-rose-400 ease-in duration-300 ">
          {{ iphone.label }}
        </button>
        <div>
          {{ iphone.name }}
        </div>
      </NuxtLink>
    </div>
    </div>
  
  </div>
</template>
<script setup>
const iphones = [
  { to: "/", label: "Detail", name: "Iphone-Black", src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-max-graphite-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072989055" },
  { to: "/", label: "Detail", name: "Iphone-White", src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-white-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202752000" },
  { to: "/", label: "Detail", name: "Iphone-Purple", src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-purple-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202738000" },
  { to: "/", label: "Detail", name: "Iphone-Red", src: "https://i.ebayimg.com/images/g/qmgAAOSwi9hky70v/s-l400.jpg" },
  { to: "/", label: "Detail", name: "Iphone-Blue", src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-12-mini-blue-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1635202802000" },
  { to: "/", label: "Detail", name: "Iphone-Gold", src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-13-pro-gold-2023?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1679072986854" },
];
</script>
