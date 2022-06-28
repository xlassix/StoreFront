import useSWR from 'swr';
import { useHistory } from 'react-router-dom';
import { apiCall } from './axios';
import { useStoreState } from 'easy-peasy';

export const useStoreData = () => {
  const search = useStoreState((state: any) => state.search);
  const user = useStoreState((state: any) => state.user);
  const router = useHistory();
  const { data, error } = useSWR(
    `/Customer/SearchTheCustomerStoreData`,
    url => {
      console.log(url);
      return apiCall(
        'POST',
        url,
        {
          SearchKey: search,
          UserId: user?.UserId,
          UserType: user?.UserType,
          PageSize: 75,
          PageNo: 0,
        },
        null,
        false,
      );
    },
  );
  if (error?.message === 'UnAuthorized') {
    router.push('/auth/SignIn');
  }
  console.log(data, error, user);
  return {
    stores: error ? null : data?.data,
    isLoading: !data && !error,
    error,
  };
};
