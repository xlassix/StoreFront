import axios from 'axios';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
export const apiCall = function (method, route, body = null, token = null) {
  const onSuccess = function (response) {
    return response.data;
  };

  const onError = function (error) {
    if (error.response) {
      console.log('Status', error.response.status);
      console.log('Status', error.response.status);
      console.log('Status', error.response.status);
    } else {
      console.log('Error Message', error.message);
    }
    return Promise.reject(error.response || error.message);
  };

  return client({
    method,
    url: route,
    data: body,
  })
    .then(onSuccess)
    .catch(onError);
};
