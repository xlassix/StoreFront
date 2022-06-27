import useSWR from 'swr';
import { useHistory } from 'react-router-dom';
import { apiCall } from './axios';

export const useStoreData = () => {
  const router = useHistory();
  const { data, error } = useSWR(
    '/Customer/SearchTheCustomerStoreData',
    url => {
      console.log(url);
      return apiCall(
        'POST',
        url,
        {
          SearchKey: '905',
          UserId: 91403,
          UserType: 1,
          PageSize: 500,
          PageNo: 0,
        },
        null,
        false,
      );
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
  console.log(data, error);
  return {
    stores: error ? null : data?.Stores,
    isLoading: !data && !error,
    error,
  };
};
