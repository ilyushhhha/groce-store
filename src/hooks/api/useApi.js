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
  return response.data; // Уберите проверку на ok, так как это не метод Axios
};

export const fetchResource = async (resource, params = {}) => {
  try {
    const options = await getOptions();
    if (!options.meta || !options.meta.resources) {
      throw new Error('No resources available');
    }
    
    const resourceUrl = options.meta.resources[resource] || `/${resource}`;
    
    const response = await apiClient.get(resourceUrl, { params });
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching resource: ${error.message}`);
  }
};

export const useService = (resource) => {
  const fetchResources = async (params) => {
    return await fetchResource(resource, params);
  };

  return { fetchResources };
};
