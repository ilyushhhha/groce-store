<template>
  <MainNav 
  :openCart="openCart"
  :itemCount="itemCount"
  :isOpen="isOpen"
  />
  <ProductContent :products="data"/>
  <ProductList
  :isOpen="isOpen"/>
</template>

<script>
import MainNav from './components/MainNav.vue';
import ProductContent from './components/ProductContent.vue';
import ProductList from './components/ProductList.vue';
import { useService } from './hooks/useService'
import { onMounted } from 'vue';
import { useCart } from './hooks/useCart';
export default {
  components:{
    ProductContent,
    MainNav,
    ProductList,
  },
  setup() {
    const { data, error, loading, fetchResources } = useService(); // Используем кастомный хук
    const { isOpen, itemCount, openCart } = useCart(); 
    onMounted(() => {
      fetchResources('products'); // Загрузка данных при монтировании
    });
    console.log('isOpen:', isOpen);
console.log('itemCount:', itemCount);
    return {
      data,
      error,
      loading,
      isOpen, itemCount, openCart
      
    };
  },
};
</script>

<style scoped>

</style>
