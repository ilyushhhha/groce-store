<template>
    <div class="grid grid-cols-2 gap-4 p-4">
      <div
        v-for="product in products"
        :key="product.id"  
        class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 cursor-pointer" 
        @click="openPopup(product.name)"
      >
        <img 
          :src="product.image"
          alt="Изображение товара" 
          class="w-full h-32 object-cover rounded-t-lg mb-4"
        />
        <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
        <p class="text-gray-600 text-sm mb-4">{{ product.description }}</p>
        <div class="flex items-center">
          <span class="text-yellow-500">
            <template v-for="star in 5" :key="star">
              <svg v-if="star <= product.rating" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.25l-6.188 3.247 1.188-6.912-5.047-4.455 6.965-.56L12 2l2.082 6.57 6.965 .56-5.047 4.455 1.188 6.912L12 17.25z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.25l-6.188 3.247 1.188-6.912-5.047-4.455 6.965-.56L12 2l2.082 6.57 6.965 .56-5.047 4.455 1.188 6.912L12 17.25z" />
              </svg>
            </template>
          </span>
          <span class="ml-2 text-gray-500 text-sm">({{ product.ratingCount }})</span>
        </div>
      </div>
  
  
      <ContentCardPopup :visible="popupVisible" :productName="selectedProduct" @close="popupVisible = false" />
  
    </div>
  
  </template>
  
  <script>
  import ContentCardPopup from './ContentCardPopup.vue';
//   import { inject } from 'vue'
  export default {
    name: 'ContentCard',
    components: {
      ContentCardPopup
    },
    props: {
        products: Array
},
data() {
return {
  popupVisible: false,
  selectedProduct: ''
};
},
    methods: {
      openPopup(productName) {
        this.selectedProduct = productName;
        this.popupVisible = true;
      }
    }
}
  </script>
  
  <style scoped>
  /* Дополнительные стили (если нужны) */
  </style>
  