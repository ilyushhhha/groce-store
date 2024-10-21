<template>
  <div class="flex flex-wrap justify-center p-6">
    <div v-for="product in products" :key="product.id"
      class="bg-white rounded-xl shadow-xl transition-transform transform hover:scale-90 cursor-pointer overflow-hidden  m-2 w-1/3 sm:w-1/3 md:w-1/4"
      @click="openPopup(product)">
      <div
        class="bg-white rounded-xl shadow-xl transition-transform transform hover:scale-90 cursor-pointer overflow-hidden  m-2 w-1/3 sm:w-1/3 md:w-1/4">
        <img :src="product.images[0]" alt="Изображение продукта" class="w-full h-48 object-cover rounded-t-xl" />
        <div class="p-4">
          <h3 class="text-xl font-bold text-gray-800 mb-1">{{ product.name }}</h3>
          <div class="flex items-center mb-2">
            <span class="text-yellow-500">
              <template v-for="star in 5" :key="star">
                <svg v-if="star <= product.rating" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline"
                  fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927a.75.75 0 011.902 0l1.817 3.876 4.29.372a.75.75 0 01.426 1.351l-3.17 2.81 1.025 4.235a.75.75 0 01-1.136.789L10 13.347l-3.203 2.013a.75.75 0 01-1.136-.789l1.025-4.235-3.17-2.81a.75.75 0 01.426-1.351l4.29-.372L9.049 2.927z" />
                </svg>
              </template>
            </span>
            <span class="ml-2 text-sm text-gray-500">({{ product.ratingCount }})</span>
          </div>
          <p class="text-lg font-semibold text-gray-900">{{ product.price }} руб.</p>
        </div>
      </div>
    </div>

    <!-- Фон без анимации -->
    <div v-if="popupVisible" class="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

    <!-- Всплывающее окно с анимацией -->
    <transition name="popup" enter-active-class="transition transform duration-300 ease-out"
      enter-from-class="translate-y-10 opacity-0" enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition transform duration-300 ease-in" leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-10 opacity-0">
      <div v-if="popupVisible" class="fixed inset-x-0 bottom-0 z-50 flex justify-center items-end">
        <div class="bg-white h-1/2 w-full rounded-t-2xl p-10 relative shadow-2xl">
          <!-- Верхняя часть с кнопкой закрытия -->
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold text-gray-900">Подробности продукта</h3>
            <button @click="popupVisible = false" class="text-gray-700 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Секция с изображением и описанием -->
        <div class="flex flex-col md:flex-row items-center mb-6">
          <img :src="selectedProduct.images[0]" alt="Изображение продукта"
            class="w-40 h-40 object-cover rounded-lg mb-4 md:mb-0 md:mr-6">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ selectedProduct.name }}</h3>
            <p class="text-gray-700 mb-4">{{ selectedProduct.supplierName }}</p>
            <p class="text-xl font-semibold text-gray-900">{{ selectedProduct.price }} руб.</p>
            <p class="text-gray-600">{{ selectedProduct.description }}</p>
            <div class="flex items-center mt-2">
              <span class="text-yellow-500">
                <template v-for="star in 5" :key="star">
                  <svg v-if="star <= selectedProduct.rating" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline"
                    fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927a.75.75 0 011.902 0l1.817 3.876 4.29.372a.75.75 0 01.426 1.351l-3.17 2.81 1.025 4.235a.75.75 0 01-1.136.789L10 13.347l-3.203 2.013a.75.75 0 01-1.136-.789l1.025-4.235-3.17-2.81a.75.75 0 01.426-1.351l4.29-.372L9.049 2.927z" />
                  </svg>
                </template>
              </span>
              <span class="ml-2 text-sm text-gray-500">({{ selectedProduct.ratingCount }})</span>
            </div>
          </div>
        </div>

        <!-- Кнопка добавления в корзину @click="addToCart(selectedProduct)"-->
        <button id="start" @click="addToCartWithAnimation(selectedProduct, $event)" class="w-full bg-gray-900 text-white py-3 rounded-lg text-xl
             hover:bg-gray-700
             focus:bg-red-500 transition duration-3000 ease-in-out ">
          Добавить в корзину
        </button>
      </div>

  </transition>
  </div>
</template>

<script>
// import { inject } from 'vue';
export default {
  name: 'ContentCard',
  // props: {
  //   products: {
  //     type: Array,
  //     required: true
  //   }
  emits: ['add-to-cart'],
  setup() {
    // const { products, loading, error, fetchProducts } = useProductService();

    // const loadProducts = async () => {
    //   if (!loading.value) { // Проверяем состояние загрузки
    //     try {
    //       await fetchProducts();
    //     } catch (err) {
    //       console.error('Ошибка при загрузке продуктов:', err);
    //     }
    //   }
  },
  data() {
    return {
      isAnimating: false,
      popupVisible: false,
      selectedProduct: '',
    }
  }}
// methods: {
//   openPopup(product) {
//     this.selectedProduct = product;
//     this.popupVisible = true;
//   },
//   addToCartWithAnimation(selectedProduct, event) {
//     // Получаем координаты кнопки
//     const buttonRect = event.target.getBoundingClientRect();
//     // Эмитим событие с координатами
//     this.$emit('add-to-cart', {
//       product: selectedProduct,
//       rect: buttonRect,
//     });
//   }
// }

</script>
<style></style>