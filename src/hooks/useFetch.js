import { ref, onMounted } from 'vue';

export function useFetchData(url) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(true);

  const fetchData = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      data.value = await response.json();
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchData);

  return { data, error, loading };
}
