import useApi from './useApi';

let cachedOptions = null;

const getOptions = async () => {
  const { options } = useApi();

  if (cachedOptions) return cachedOptions;

  try {
    const response = await options('/');
    cachedOptions = response.meta.resources;
    return cachedOptions;
  } catch (error) {
    console.error('Error fetching options:', error);
    throw error;
  }
};

export const fetchResources = async (resource, params = {}) => {
  const { get } = useApi();
  const options = await getOptions();

  const resourceUrl = options[resource] || `/${resource}`;

  try {
    const response = await get(resourceUrl, params);
    return response.data;
  } catch (error) {
    console.error('fetchResources error:', error);
    throw error;
  }
};

export default fetchResources;
