import { ref } from 'vue';

// Хук для использования сервиса
export const useService = (fetchResources) => {
  // Переменные состояния для данных, ошибки и загрузки
  const data = ref([]); // Состояние, которое хранит загруженные данные
  const error = ref(null); // Состояние для возможной ошибки при запросе
  const loading = ref(false); // Состояние для индикации загрузки данных

  // Функция для получения ресурса
  const fetchResource = async (resource, params) => {
    loading.value = true; // Устанавливаем флаг загрузки в true
    error.value = null; // Сбрасываем ошибку перед новым запросом

    try {
      // Запрос к функции fetchResources (которая передается при вызове хука)
      data.value = await fetchResources(resource, params); // Получаем данные и сохраняем их в state
    } catch (err) {
      // Если возникла ошибка, записываем её
      error.value = `Ошибка при загрузке данных: ${err.message}`;
    } finally {
      // По завершению запроса (успешного или с ошибкой) убираем флаг загрузки
      loading.value = false;
    }
  };

  // Возвращаем объект с данными, ошибкой, состоянием загрузки и функцией для загрузки ресурсов
  return { data, error, loading, fetchResource };
};

export default useService;
