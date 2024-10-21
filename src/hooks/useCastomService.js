import { useService } from './useService';
import { fetchResources } from './resourceService';

const useCustomService = () => {
  return useService(fetchResources);
};

export default useCustomService;
