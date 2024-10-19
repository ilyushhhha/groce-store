<template>
  <div>
    <ErrorComponent v-if="error" :message="error" />
    <LoaderComponent v-else-if="loading" />
    <ContentCard v-else :products="products" />
  </div>
</template>

<script>
import ContentCard from './ContentCard.vue';
import LoaderComponent from './commons/LoaderComponent.vue';
import ErrorComponent from './commons/ErrorComponent.vue';

import { useProductService } from '@/hooks/useProductService';
import { onMounted } from 'vue';

export default {
  name: 'ContentProduct',
  components: {
    ContentCard,
    LoaderComponent,
    ErrorComponent,
  },
  setup() {
    // Используем хук для получения продуктов и состояния загрузки/ошибки
    const { products, loading, error, fetchProducts } = useProductService();

    // Используем onMounted для загрузки данных при монтировании компонента
    onMounted(fetchProducts); // Ждем, пока данные загрузятся

  
    // console.log("products", products.value)
    return { products, loading, error };
  },
};
</script>

<style scoped></style>
