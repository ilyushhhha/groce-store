// src/hooks/api/useApi.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/vnd.api+json',
  },
  withCredentials: true,
});

apiClient.interceptors.request.use(request => {
  return request;
});

apiClient.interceptors.response.use(response => {
  return response;
});

const getOptions = async () => {
  const response = await apiClient.options('/');
  return response.data; 
};

// export const fetchResource = async (resource, params = {}) => {
//   try {
//     const options = await getOptions();
//     if (!options.meta || !options.meta.resources) {
//       throw new Error('No resources available');
//     }
    
//     const resourceUrl = options.meta.resources[resource] || `/${resource}`;
    
//     const response = await apiClient.get(resourceUrl, { params });
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error fetching resource: ${error.message}`);
//   }
// };

export const useService = (resources) => {
  const fetchResources = async (params) => {

      const options = await getOptions(); // Получаем опции
      if (!options.meta || !options.meta.resources) {
          throw new Error('No resources available');
      }
      const promises = resources.map(resource =>{
        const resourceUrl = options.meta.resources[resource] || `/${resource}`;
      
        return apiClient.get(resourceUrl, {params})
          .then(response => response.data)
          .catch(error => {
            console.error(`error fetching ${resource}:`, error);
            return []
          })
      })
    const results = await Promise.allSettled(promises);
    return results.flatMap(result => result.status === 'fulfilled' ? result.value : []);
};

  return {fetchResources};
};

