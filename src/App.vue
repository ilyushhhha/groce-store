<template>
  <div class="app-container">
    <h1>Список ресурсов</h1>

    <!-- Блок загрузки -->
    <div v-if="loading" class="loading">
      Загрузка данных...
    </div>

    <!-- Блок ошибок -->
    <div v-if="error" class="error">
      {{ error }}
    </div>

    <!-- Отображение данных -->
    <ul v-if="data && data.length">
      <li v-for="(item, index) in data" :key="index">
        {{ item.name }}
      </li>
    </ul>

    <!-- Кнопка для загрузки ресурса -->
    <button @click="loadResource('products')">Загрузить Продукты</button>
    <button @click="loadResource('categories')">Загрузить Категории</button>
  </div>
</template>

<script>
import useCustomService from './hooks/useCustomService'; // Импортируем кастомный хук

export default {
  setup() {
    const { data, error, loading, fetchResource } = useCustomService(); // Используем кастомный хук

    // Функция для загрузки ресурса
    const loadResource = (resource) => {
      const params = {}; // Параметры запроса
      fetchResource(resource, params); // Вызываем функцию для загрузки данных
    };

    return {
      data,
      error,
      loading,
      loadResource,
    };
  },
};
</script>

<style scoped>
.app-container {
  padding: 20px;
}

.loading {
  color: blue;
  font-size: 18px;
}

.error {
  color: red;
  font-size: 18px;
}
</style>
