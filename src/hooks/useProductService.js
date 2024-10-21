// import { ref } from 'vue';
// import { useCastomService } from './useCastomService';

// export const useProductService = () => {
//   const { data, error, loading, fetchResource } = useCastomService();
//   const products = ref([]);

//   const fetchProducts = async () => {
//     const params = { include: 'media,supplier,price' };

//     // Обработка ошибок
//     try {
//       // Вызываем fetchResource для загрузки данных
//       await fetchResource('product', params); // Это вызовет запрос к API

//       // Проверяем, есть ли данные и обрабатываем их
//       if (data.attributes) {
//         products.value = data.value.map(product => extractProductData(product.value, data.attributes));
//       } else {
//         products.value = []; // Если нет данных, устанавливаем пустой массив
//       }
//     } catch (err) {
//       console.error('Error fetching products:', err);
//       // Можно установить error.value для отображения в компоненте
//       // error.value = err; // Если нужно передать ошибку в компонент
//     }
//   };

//   return { products, loading, error, fetchProducts };
// };

// const extractProductData = (product, included) => {
//   console.log(product)
//   console.log(included)

//   const attributes = product.attributes;
//   const images = findIncludedData(included, product.relationships.media.data, 'media');
//   const suppliers = findIncludedData(included, product.relationships.supplier.data, 'supplier');

//   return {
//     id: product.id,
//     name: attributes['product.label'],
//     description: attributes['product.description'],
//     price: parseFloat(attributes['product.price']) || 0,
//     rating: attributes['product.rating'],
//     ratingCount: attributes['product.ratingCount'],
//     inStock: attributes['product.instock'],
//     images,
//     supplierName: suppliers.length ? suppliers[0].name : 'Неизвестный поставщик',
//   };
// };

// const findIncludedData = (included, relationshipData, type) => {
//   return relationshipData.map(relItem => {
//     const includedItem = included.find(item => item.id === relItem.id && item.type === type);
//     return includedItem ? includedItem.attributes : null;
//   }).filter(item => item !== null);
// };
