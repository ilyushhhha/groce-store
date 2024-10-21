// useProducts.js
import { ref } from 'vue';
import axios from 'axios';

export function useBagistoService() {
  const products = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchProducts = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios.get('http://130.193.54.234/api/products');
      products.value = response.data.data; // Предполагается, что данные находятся в response.data.data
    } catch (err) {
      error.value = err.message || 'Не удалось загрузить данные.';
    } finally {
      loading.value = false;
    }
  };

  // Запускаем загрузку данных при инициализации
  fetchProducts();

  return { products, loading, error };
}
export default useBagistoService