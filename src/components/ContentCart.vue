<template>
    <button 
        @click="closeCart"
        :class="['fixed right-[300px] top-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg', {'hidden':isOpen}]"
        id="toggle-button">X</button>

    <div :class="['fixed right-0 top-0 h-full w-60 bg-white rounded-l-lg shadow-lg transition-transform transform overflow-y-auto', { 'translate-x-full': isOpen, 'translate-x-0': !isOpen }]"
        id="offscreen-container">
        <ul class="list-none p-4">
            <li class="border-t border-b py-2">
                <img src="https://via.placeholder.com/150" alt="Продукт" class="w-full rounded-md mb-2">
                <h4 class="font-semibold">Название товара</h4>
                <p class="text-gray-600">Описание товара</p>
                <p class="text-lg font-bold">Цена: 1000₽</p>
            </li>
            <li class="border-t border-b py-2">
                <img src="https://via.placeholder.com/150" alt="Продукт" class="w-full rounded-md mb-2">
                <h4 class="font-semibold">Название товара</h4>
                <p class="text-gray-600">Описание товара</p>
                <p class="text-lg font-bold">Цена: 1000₽</p>
            </li>
            <!-- Добавьте больше элементов списка по необходимости -->
        </ul>
    </div>
</template>


<script>
import { inject } from 'vue'

export default {
    name: 'ContentCart',
    setup() {
        const { closeCart, isOpen } = inject('cart')
        return {
            closeCart,
            isOpen
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
