<template>
<!-- Navigation Menu -->
<nav class="w-full bg-white shadow-lg flex items-center justify-end p-4">
    <button
    @click="openCart"
     class="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg">Кнопка</button>
</nav>

</template>


<script setup>
import { inject } from 'vue';

const { openCart, cartState } = inject('cart');
</script>
