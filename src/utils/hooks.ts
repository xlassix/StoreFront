import useSWR from 'swr';
import { useHistory } from 'react-router-dom';
import { apiCall } from './axios';

export const useStoreData = () => {
  const router = useHistory();
  const { data, error } = useSWR(
    '/Staff',
    url => {
      console.log(url);
      return apiCall('GET', url, null, null, true);
    },
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
  if (error?.message === 'UnAuthorized') {
    router.push('/auth/SignIn');
  }
  return {
    stores: error ? null : data?.Stores,
    isLoading: !data && !error,
    error,
  };
};
