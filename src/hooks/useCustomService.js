import { useService } from './useService';
import { fetchResources } from './resourceService';

export const useCustomService = () => {
  return useService(fetchResources);
};

// export default useCustomService;
// export const useCustomService = () => {
//   // Вызываем useService с fetchResources и возвращаем объект, содержащий все значения состояния
//   const { data, error, loading, fetchResource } = useService(fetchResources);

//   // Возвращаем объект с этими значениями для последующего использования
//   return { data, error, loading, fetchResource };
// };