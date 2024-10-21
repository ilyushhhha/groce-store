<template>
  <div class="flex flex-wrap justify-center p-6">
    <ProductCard 
    v-for="product in products" 
    :key="product.id" 
    :product="product" 
    />
    <ProductPopup 
    v-if="popupVisible" 
    :popupVisible="popupVisible" 
    :selectedProduct="selectedProduct"
    :closePopup="closePopup" 
    :addToCartWithAnimation="addToCartWithAnimation" 
    />
    <ProductList />
    <!-- <div v-if="popupVisible" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div> -->
  </div>

  <!-- Отображение карточек продуктов -->
  <!-- <ContentCard v-for="product in products" @add-to-cart="handleAddToCart" /> -->
</template>

<script>

import ProductCard from './ProductCard.vue';
import ProductList from './ProductList.vue';
import ProductPopup from './ProductPopup.vue';



export default {
  name: 'ProductContent',
  components: {
    ProductCard,
    ProductList,
    ProductPopup,
  },
  setup() {

  },
  props: {
    products: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean
    },
    error: {
      type: String
    }
  },
  data(){
    return {
      // products: [], // Ваши данные
      popupVisible: false,
      selectedProduct: null,
    };
  },
  emits: ['add-to-cart'],
  methods: {
    // Метод обработки события добавления товара в корзину
    handleAddToCart({ rect }) {
      this.$emit('add-to-cart', { rect });
    },
    openPopup(product) {
      this.selectedProduct = product;
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    },
}}
</script>

<style scoped></style>
