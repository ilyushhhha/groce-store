<template>
    <nav class="w-full bg-white shadow-lg flex items-center justify-between p-4">
      <div class="flex items-center">
        <img src="your-logo.png" alt="Logo" class="h-10 mr-auto">
      </div>
      <button @click="openCart" class="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18l-3 9H6L3 3z"/>
        </svg>
        Корзина
      </button>
    </nav>
  </template>
  
  <script>
//   import { useCart } from '@/hooks/useCart'
  import { inject } from 'vue';
  export default {
    setup() {
      const cart = inject('cart')
      const {openCart } = cart
      return {
        openCart
      }
    }
  }
  </script>
  