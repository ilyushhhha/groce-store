<template>
    <nav class="w-full bg-white shadow-lg flex items-center justify-between p-4 fixed z-40">
      <div class="flex items-center">
        <img src="your-logo.png" alt="Logo" class="h-10 mr-auto">
      </div>
      <button @click="openCart" class="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg flex items-center" id="test">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18l-3 9H6L3 3z"/>
        </svg>
        Корзина
        <!-- Счетчик товаров в корзине -->
        <span v-if="itemCount > 0" class="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center z-100">
          {{ itemCount }}
        </span>
      </button>
    </nav>
  </template>
  
  <script>
//   import { useCart } from '@/hooks/useCart'
  // import { inject } from 'vue';
  export default {
    // setup() {
    //   const cart = inject('cart')
    //   const {openCart, itemCount } = cart
    //   const emitAddToCart = () => {
    //   const buttonRect = document.getElementById('cartButton').getBoundingClientRect(); // Получаем координаты кнопки корзины
    //   this.$emit('add-to-cart', { rect: buttonRect }); // Эмитируем событие с координатами
    // };
    //   return {
    //     openCart, itemCount, emitAddToCart
    //   }
    // }
  }
  </script>
  