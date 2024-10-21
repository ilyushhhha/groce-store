<template>
    <div
        class="flex items-center border border-navyBlue gap-x-4 rounded-xl px-7 py-4 max-md:py-3 max-sm:gap-x-5 max-sm:rounded-lg max-sm:px-4 max-sm:py-1.5">
        <span class="icon-minus cursor-pointer text-2xl" role="button" tabindex="0" aria-label="Уменьшить Количество"
            @click="decreaseQuantity">-</span>
        <p class="w-2.5 select-none text-center max-sm:text-sm">{{ quantity }}</p>
        <span class="icon-plus cursor-pointer text-2xl" role="button" tabindex="0" aria-label="Увеличить Количество"
            @click="increaseQuantity">+</span>
        <input type="hidden" name="quantity" :value="quantity">
    </div>
</template>
<script>
export default {
    name: 'QuantityButton',
    data(){
        return{
            quantity: 1
        }
    },
    methods:{
        decreaseQuantity(){
            this.quantity = this.quantity > 1 ? this.quantity - 1 : 1;
        },
        increaseQuantity(){
            this.quantity++;
        }
    }
}

</script>