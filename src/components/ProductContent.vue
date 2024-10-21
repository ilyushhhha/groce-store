<template>
  <div class="flex flex-wrap justify-center p-6">
    <!-- <ProductCard 
    v-for="product in products" 
    :key="product.id" 
    :product="product"
    :openPopup="openPopup" 
    /> -->

    <MockComp v-for="product in products" :key="product.id" :product="product" :openPopup="openPopup" />

    <MockPopup v-if="popupVisible" :popupVisible="popupVisible" :selectedProduct="selectedProduct"
      :closePopup="closePopup" />
    <!-- <ProductList /> -->
    <!-- <div v-if="popupVisible" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div> -->
  </div>
  <div class="flex justify-center mt-4">
    <button class="px-4 py-2 bg-gray-300 rounded-l hover:bg-gray-400" @click="prevPage" :disabled="currentPage === 1">
      Назад
    </button>

    <span class="px-4 py-2">Страница {{ currentPage }} из {{ totalPages }}</span>

    <button class="px-4 py-2 bg-gray-300 rounded-r hover:bg-gray-400" @click="nextPage"
      :disabled="currentPage === totalPages">
      Вперед
    </button>
  </div>

  <!-- Отображение карточек продуктов -->
  <!-- <ContentCard v-for="product in products" @add-to-cart="handleAddToCart" /> -->
</template>

<script>
import MockComp from './МockComp.vue';
import MockPopup from './MockPopup.vue';
// import ProductCard from './ProductCard.vue';
// import ProductList from './ProductList.vue';
// import ProductPopup from './ProductPopup.vue';


export default {
  name: 'ProductContent',
  components: {
    // ProductCard,
    // ProductList,
    // ProductPopup, 
    MockComp,
    MockPopup
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
  setup() {
    

  },
  data() {
    return {
      // products: [], // Ваши данные
      popupVisible: false,
      selectedProduct: '',
      currentPage: 1,
      itemsPerPage: 6
    };
  },
  computed: {
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.products.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
  },
  emits: ['add-to-cart'],
  methods: {
    // Метод обработки события добавления товара в корзину
    // handleAddToCart({ rect }) {
    //   this.$emit('add-to-cart', { rect });
    // },
    openPopup(product) {
      this.selectedProduct = product;
      this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  }
}
</script>

<style scoped></style>
