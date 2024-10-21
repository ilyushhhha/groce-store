<template>
  <transition name="popup" enter-active-class="transition transform duration-300 ease-out"
    enter-from-class="translate-y-10 opacity-0" enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition transform duration-300 ease-in" leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-10 opacity-0">
    <div v-if="popupVisible" class="fixed inset-x-0 bottom-0 z-50 flex justify-center items-end">
      <div class="bg-white h-1/2 w-full rounded-t-2xl p-10 relative shadow-2xl">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold text-gray-900">Подробности продукта</h3>
          <button @click="closePopup" class="text-gray-700 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex flex-col md:flex-row items-center mb-6">
          <img :src="selectedProduct.imageUrl" alt="Изображение продукта"
            class="w-40 h-40 object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ selectedProduct.name }}</h3>
            <p class="text-gray-700 mb-4">{{ selectedProduct.brand }} | {{ selectedProduct.size }}</p>
            <p class="text-xl font-semibold text-gray-900">{{ selectedProduct.price }} руб.</p>
            <p class="text-gray-600 mb-2">{{ selectedProduct.description }}</p>

            <div class="flex flex-col mb-4">
              <p class="text-gray-600">Концентрация: {{ selectedProduct.concentration }}</p>
              <p class="text-gray-600">Пол: {{ selectedProduct.gender }}</p>
              <p class="text-gray-600">Ноты: {{ selectedProduct.fragranceNotes.top }} (верхние), {{
                selectedProduct.fragranceNotes.middle }} (средние), {{ selectedProduct.fragranceNotes.base }} (базовые)
              </p>
            </div>

            <div class="flex items-center">
              <span class="text-yellow-500">
                <template v-for="star in 5" :key="star">
                  <svg v-if="star <= selectedProduct.rating" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline"
                    fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927a.75.75 0 011.902 0l1.817 3.876 4.29.372a.75.75 0 01.426 1.351l-3.17 2.81 1.025 4.235a.75.75 0 01-1.136.789L10 13.347l-3.203 2.013a.75.75 0 01-1.136-.789l1.025-4.235-3.17-2.81a.75.75 0 01.426-1.351l4.29-.372L9.049 2.927z" />
                  </svg>
                </template>
              </span>
              <span class="ml-2 text-sm text-gray-500">({{ selectedProduct.reviewsCount }})</span>
            </div>
          </div>
        </div>

        <button @click="addToCart(selectedProduct)"
          class="w-full bg-gray-900 text-white py-3 rounded-lg text-xl hover:bg-gray-700 focus:bg-red-500 transition duration-300 ease-in-out">
          Добавить в корзину
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { inject } from 'vue';
export default {
  props: {
    popupVisible: Boolean,
    selectedProduct: Object,
    closePopup: Function,


    // addToCartWithAnimation: Function,
  },
  setup() {
    inject('cartItems');

    const addToCart = inject('addToCart');
 
    return {
      addToCart // возвращаем обработчик
    };
  }
};
</script>