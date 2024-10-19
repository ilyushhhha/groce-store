// src/hooks/useProductService.js
import { ref } from 'vue';
import { useService } from "./api/useApi";

export const useProductService = () => {
  const { fetchResources } = useService('product/');

  const products = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchProducts = async () => {
    const params = {
      include: 'media,supplier,price,product'
    };

    loading.value = true;
    error.value = null;

    try {
      const getData = await fetchResources(params);

      const findIncludedData = (included, relationshipData, type) => {
        return relationshipData.map(relItem => {
          const includedItem = included.find(item => item.id === relItem.id && item.type === type);
          return includedItem ? includedItem.attributes : null;
        }).filter(item => item !== null);
      };

      console.log('Fetched data:', getData.data);

      const extractAttributes = (product, images, supplierName, price) => {
        return {
          id: product.id,
          name: product.attributes['product.label'],
          description: product.attributes['product.description'],
          price: parseFloat(price) || 0, // Обработка цены
          rating: product.attributes['product.rating'],
          ratingCount: product.attributes['product.ratingCount'],
          inStock: product.attributes['product.instock'],
          images: images, // Список изображений
          supplierName: supplierName || 'Неизвестный поставщик', // Имя поставщика
        };
      };

      products.value = getData.data.map(product => {
        // Извлекаем данные о медиа
        const mediaData = product.relationships.media?.data || [];
        const mediaAttributes = findIncludedData(getData.included, mediaData, 'media');
        const images = mediaAttributes.map(media => media['media.url']); // Преобразуем атрибуты медиа в URL-изображения

        // Извлекаем данные о поставщике
        const supplierData = product.relationships.supplier?.data || [];
        const supplierAttributes = findIncludedData(getData.included, supplierData, 'supplier');
        const supplierName = supplierAttributes.length > 0 ? supplierAttributes[0]['supplier.label'] : null;

        // Извлекаем данные о цене
        const priceData = product.relationships.price?.data || [];
        const priceAttributes = findIncludedData(getData.included, priceData, 'price');
        const price = priceAttributes.length > 0 ? priceAttributes[0]['price.value'] : null;

        return extractAttributes(product, images, supplierName, price);
      });

      console.log('Updated products:', products.value);
    } catch (err) {
      error.value = err.message;
      console.error('Error fetching products:', error.value);
    } finally {
      loading.value = false;
    }
  };

  return { products, loading, error, fetchProducts };
};

// // src/hooks/useProductService.js
// import { ref } from 'vue';
// import { useService } from "./api/useApi";

// export const useProductService = () => {
//   const { fetchResources } = useService('product/');

//   const products = ref([]);
//   const loading = ref(false);
//   const error = ref(null);

//   const fetchProducts = async () => {
//     const params = {
//       include: 'media,supplier,price,product'
//     };

//     loading.value = true;
//     error.value = null;

//     try {
//       const getData = await fetchResources(params);

//       const findIncludedData = (included, relationshipData, type) => {
//         return relationshipData.map(relItem => {
//           const includedItem = included.find(item => item.id === relItem.id && item.type === type);
//           return includedItem ? includedItem.attributes : null;
//         }).filter(item => item !== null);
//       };

//       console.log('Fetched data:', getData.data);

//       products.value = getData.data.map(product => {
//         // Извлекаем данные из attributes
//         const id = product.id;
//         const name = product.attributes['product.label'];
//         const description = product.attributes['product.description'];
//         const rating = product.attributes['product.rating'];
//         const ratingCount = product.attributes['product.ratingCount'];
//         const inStock = product.attributes['product.instock'];

//         // Извлекаем данные о медиа
//         const mediaData = product.relationships.media?.data || [];
//         const mediaAttributes = findIncludedData(getData.included, mediaData, 'media');
//         const images = mediaAttributes.map(media => media['media.url']);

//         // Извлекаем данные о поставщике
//         const supplierData = product.relationships.supplier?.data || [];
//         const supplierAttributes = findIncludedData(getData.included, supplierData, 'supplier');
//         const supplierName = supplierAttributes.length > 0 ? supplierAttributes[0]['supplier.label'] : 'Неизвестный поставщик';

//         // Извлекаем данные о цене
//         const priceData = product.relationships.price?.data || [];
//         const priceAttributes = findIncludedData(getData.included, priceData, 'price');
//         const price = priceAttributes.length > 0 ? priceAttributes[0]['price.value'] : 'Цена не указана';

//         // Возвращаем объект с единообразными свойствами
//         return {
//           id,
//           name,
//           description,
//           price, // Устанавливаем цену продукта
//           rating,
//           ratingCount,
//           inStock,
//           images, // Список изображений
//           supplierName // Имя поставщика
//         };
//       });
//       console.log('Updated products:', products.value);
//     } catch (err) {
//       error.value = err.message || 'Ошибка при загрузке продуктов';
//       console.error('Error fetching products:', error.value);
//     } finally {
//       loading.value = false;
//     }
//   };

//   return { products, loading, error, fetchProducts };
// };
