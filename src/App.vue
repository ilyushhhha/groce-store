<template>
  <MainNav />
  <ProductContent :products="products" />
  <ProductList />
</template>

<script>
import { computed, onMounted, provide } from 'vue';

import MainNav from './components/MainNav.vue';
import ProductContent from './components/ProductContent.vue';
import ProductList from './components/ProductList.vue';

import { useService } from './hooks/useService'
import { useCart } from './hooks/useCart';

import { generatePerfumeData } from '@/utils/mockGenerator';
export default {
  components: {
    ProductContent,
    MainNav,
    ProductList,
  },
  setup() {


    const { data, error, loading, fetchResources} = useService(); // Используем кастомный хук
    const { isOpen, itemCount,totalPrice, openCart, addToCart, closeCart, removeFromCart, cartItems} = useCart();
    const mockData = generatePerfumeData();

    provide('addToCart', addToCart);
    provide('removeFromCart', removeFromCart);
    provide('openCart', openCart);
    provide('closeCart', closeCart);
    provide('isOpen', isOpen);
    provide('itemCount', itemCount);
    provide('totalPrice', totalPrice);
    provide('cartItems',cartItems )



    const extendedMockData = Array(1)
      .fill(mockData)
      .flat()
      .map((item, index) => ({ ...item, id: index + 1, name: `Парфюм ${index + 1}` }))
    const products = computed(() => {
      // Если данные загружены успешно, используем реальные данные, иначе - мок-данные
      return data.value.length ? data.value : extendedMockData;
    });
    onMounted(() => {
      fetchResources('products'); // Загрузка данных при монтировании
    });
    return {
      products,
      error,
      loading
    };
  },
};
</script>

<style scoped></style>
