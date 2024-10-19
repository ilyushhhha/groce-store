// src/hooks/useProductService.js
import { ref } from 'vue';
import { useService } from "./api/useApi";

export const useProductService = () => {
  const { fetchResources } = useService('product/');
  
  const products = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchProducts = async () => {
    const params = ''//{ 'page[offset]': pageOffset, 'page[limit]': pageSize };
    // console.log('Fetching products with params:', params);

    loading.value = true;
    error.value = null;

    try {
      const getData = await fetchResources(params);
       console.log('Fetched data:', getData.data); 
      products.value = getData.data.map(product => ({
        id: product.attributes['id'],
        url: product.attributes['product.url'],
        label: product.attributes['product.label'],
        rating: product.attributes['product.rating'],
        inStock: product.attributes['product.instock'],
      }));
      console.log('Updated products:', products.value);
    } catch (err) {
      error.value = err.message //err.message || 'Ошибка при загрузке продуктов';
      console.error('Error fetching products:', error.value);
    } finally {
      loading.value = false;
    }
  };

  return { products, loading, error, fetchProducts };
};