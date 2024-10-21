<template>
<div class="relative">
  <!-- Корзина с переходами -->
  <transition
    name="cart"
    enter-active-class="transition transform duration-300 ease-in-out"
    enter-from-class="translate-x-full opacity-0"
    enter-to-class="translate-x-0 opacity-100"
    leave-active-class="transition transform duration-300 ease-in-out"
    leave-from-class="translate-x-0 opacity-100"
    leave-to-class="translate-x-full opacity-0"
  >
    <div
      v-if="isOpen"
      class="flex flex-col fixed right-0 top-0 h-full w-72 bg-white rounded-l-lg z-40 shadow-lg overflow-hidden"
    >
      <!-- Кнопка закрытия для больших экранов -->
      <transition name="fade">
        <button
          v-if="isOpen"
          @click="closeCart"
          class="fixed right-80 top-4 bg-gray-800 text-white font-bold py-2 px-4 z-50 rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105"
          id="toggle-button"
        >
          Закрыть
        </button>
      </transition>

      <!-- Кнопка закрытия для маленьких экранов -->
      <button
        @click="closeCart"
        class="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-t-lg shadow-lg lg:hidden"
      >
        Закрыть
      </button>

      <ul class="list-none p-4 overflow-y-auto flex-grow">
        <li
          v-for="(item, index) in cartItems"
          :key="index"
          class="flex items-center justify-between py-3 border-b border-gray-200"
        >
          <img :src="item.image" alt="Продукт" class="w-16 h-16 object-cover rounded-md" />
          <div class="flex-grow mx-4">
            <h4 class="font-semibold text-lg">{{ item.name }}</h4>
            <p class="text-gray-600">Цена: {{ item.price }}₽</p>
          </div>
          <button
            @click="removeFromCart(index)"
            class="text-red-500 hover:text-red-700 transition duration-200"
          >
            Удалить
          </button>
        </li>
      </ul>
      <div class="p-4 bg-gray-100">
        <p class="font-semibold">Общая сумма: <span class="text-xl">{{ totalPrice }}₽</span></p>
        <p class="font-semibold">Количество: <span class="text-xl">{{ itemCount }} шт.</span></p>
        <button
          @click="checkout"
          class="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </transition>
</div>


</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const isOpen = inject('isOpen');
    const closeCart = inject('closeCart');
    const cartItems = inject('cartItems'); // Измените это, чтобы получать cartItems из useCart
    const totalPrice = inject('totalPrice');
    const itemCount = inject('itemCount');
    const removeFromCart = inject('removeFromCart');

    return {
      isOpen,
      closeCart,
      cartItems,
      totalPrice,
      itemCount,
      removeFromCart,
    };
  },
};
</script>

<style scoped>
/* CSS для анимации можно добавлять здесь */
</style>
