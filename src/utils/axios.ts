import axios from 'axios';

const token = process.env.REACT_APP_AUTH_TOKEN;
const client = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { Authorization: `Bearer ${token}` },
});

const clientTest = axios.create({
  baseURL: 'http://localhost:5500',
  headers: { Authorization: `Bearer ${token}` },
});

export const apiCall = function (
  method,
  route,
  body: any = null,
  token = null,
  test = false,
) {
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

  return test
    ? clientTest({
        method,
        url: route,
        data: body,
      })
        .then(onSuccess)
        .catch(onError)
    : client({
        method,
        url: route,
        data: body,
      })
        .then(onSuccess)
        .catch(onError);
};
