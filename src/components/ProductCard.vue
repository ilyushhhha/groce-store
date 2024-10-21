<template>
    <div class="bg-white rounded-xl shadow-xl transition-transform transform hover:scale-90 cursor-pointer overflow-hidden m-2 w-1/3 sm:w-1/3 md:w-1/4"
         @click="openPopup">
      <img :src="product.images[0]" alt="Изображение продукта" class="w-full h-48 object-cover rounded-t-xl" />
      <div class="p-4">
        <h3 class="text-xl font-bold text-gray-800 mb-1">{{ product.name }}</h3>
        <div class="flex items-center mb-2">
          <span class="text-yellow-500">
            <template v-for="star in 5" :key="star">
              <svg v-if="star <= product.rating" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927a.75.75 0 011.902 0l1.817 3.876 4.29.372a.75.75 0 01.426 1.351l-3.17 2.81 1.025 4.235a.75.75 0 01-1.136.789L10 13.347l-3.203 2.013a.75.75 0 01-1.136-.789l1.025-4.235-3.17-2.81a.75.75 0 01.426-1.351l4.29-.372L9.049 2.927z" />
              </svg>
            </template>
          </span>
          <span class="ml-2 text-sm text-gray-500">({{ product.ratingCount }})</span>
        </div>
        <p class="text-lg font-semibold text-gray-900">{{ product.price }} руб.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
      openPopup: Function,
    },
  };
  </script>
  