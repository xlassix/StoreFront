import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDbGllbnRTZWNyZXQiOiJkOTRlY2ZkYy0wMWY5LTRlNDItOTgyMi0wYjM1M2E5Y2YwMzAiLCJzdWIiOiJTaW1wbGVNYXJrZXRTZXJ2aWNlQWNjZXNzVG9rZW4iLCJVc2VySWQiOiIyNjgiLCJqdGkiOiJhZmE3NjU2MS1lNGY3LTQ4YjMtOTM5ZS1iMGNhNjBiZTQyZDQiLCJpYXQiOiI1LzEyLzIwMjEgNjoyNTo1MiBQTSIsIkNsaWVudE5hbWUiOiJTaW1wbGVNYXJrZXQgSW50ZXJuYWwgQXBwIiwiQ2xpZW50SWQiOiJkYzhlYzY3Ny02MjI0LTRhOTItOTU5MC03NWEwNGM0ZThiYzQiLCJleHAiOjE2MjA4NDQxMzIsImlzcyI6IlNpbXBsZU1hcmtldEF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiU2ltcGxlTWFya2V0U2VydmljZUNsaWVudCJ9.e-HSnfUvJV6JfrAmn5at-SAsGWP2LZoh-lnu0lUOlUU';

const client = axios.create({
  baseURL: ' https://test.sfrontapi.simplemarket.app/api/v1',
  headers: { Authorization: `Bearer ${token}` },
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
