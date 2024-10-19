<template>
    <div>
      <button 
        @click="closeCart"
        :class="['fixed right-[300px] top-4 bg-gray-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 transform hover:scale-105', {'opacity-0 translate-y-4': !isOpen, 'opacity-100 translate-y-0': isOpen}]"
        id="toggle-button">Закрыть</button>
  
      <div :class="['flex flex-col fixed right-0 top-0 h-full w-72 bg-white rounded-l-lg z-40 shadow-lg transition-transform duration-300 ease-in-out overflow-hidden', { 'translate-x-full': !isOpen, 'translate-x-0': isOpen }]"
        id="offscreen-container">
        <ul class="list-none p-4 overflow-y-auto flex-grow">
          <li v-for="(item, index) in cartItems" :key="index" class="flex items-center justify-between py-3 border-b border-gray-200">
            <img :src="item.image" alt="Продукт" class="w-16 h-16 object-cover rounded-md">
            <div class="flex-grow mx-4">
              <h4 class="font-semibold text-lg">{{ item.name }}</h4>
              <p class="text-gray-600">Цена: {{ item.price }}₽</p>
            </div>
            <button @click="removeFromCart(index)" class="text-red-500 hover:text-red-700 transition duration-200">Удалить</button>
          </li>
        </ul>
        <div class="p-4 bg-gray-100">
          <p class="font-semibold">Общая сумма: <span class="text-xl">{{ totalPrice }}₽</span></p>
          <button @click="checkout" class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">Оформить заказ</button>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import { inject } from 'vue';
  
  export default {
    setup() {
      const cart = inject('cart');
      
      // Деструктурируем методы и состояния из корзины
      const { isOpen, cartItems, totalPrice, closeCart, removeFromCart, checkout } = cart;
  
      return {
        isOpen,
        cartItems,
        totalPrice,
        closeCart,
        removeFromCart,
        checkout
      };
    }
  }
  </script>
  
  <style scoped>
  /* Добавь свои стили здесь */
  </style>
  