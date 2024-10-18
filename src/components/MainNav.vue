<template>
<!-- Navigation Menu -->
<nav class="w-full bg-white shadow-lg flex items-center justify-end p-4">
    <button
    @click="openCart"
     class="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg">Кнопка</button>
</nav>

</template>


<script>
import {inject} from 'vue';

export default {
    name: 'MainNavbar',
    setup(){
        const {openCart, cartState} = inject('cart')
        return{
            openCart, cartState
        }
    }
};
</script>