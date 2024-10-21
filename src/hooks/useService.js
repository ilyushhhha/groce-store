import { ref } from 'vue';
import { useApi } from './useApi'; // Импортируем useApi

export const useService = () => {
  const { get } = useApi(); // Получаем функцию get из useApi
  const data = ref([]);
  const error = ref(null);
  const loading = ref(false);

  // Функция для получения ресурсов
  const fetchResources = async (resource, params = {}) => {
    loading.value = true; // Устанавливаем флаг загрузки
    error.value = null; // Сбрасываем ошибку перед новым запросом

    try {
      data.value = await get(`/${resource}`, params); // Используем get из useApi
    } catch (err) {
      error.value = `Ошибка при загрузке данных: ${err.message}`;
    } finally {
      loading.value = false; // Убираем флаг загрузки
    }
  };


  return { data, error, loading, fetchResources };
};

  // // Дополнительные функции для работы с ресурсами
  // const fetchResourceById = async (resource, id) => {
  //   loading.value = true;
  //   error.value = null;

  //   try {
  //     return await get(`/${resource}/${id}`); // Используем get из useApi
  //   } catch (err) {
  //     error.value = `Ошибка при получении ресурса: ${err.message}`;
  //   } finally {
  //     loading.value = false;
  //   }
  // };