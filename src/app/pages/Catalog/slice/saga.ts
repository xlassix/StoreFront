import { takeLatest, call, put, delay, all } from 'redux-saga/effects';
import { apiCall } from 'utils/axios';
import { catalogActions } from '.';
import { basketActions } from './basketSlice';

function* fetchCatalog() {
  yield delay(500);
  try {
    const res = yield call(apiCall, 'GET', '/Inventory/GetAllProducts');
    yield put(catalogActions.catalogLoaded(res));
  } catch (error) {
    //yield put(catalogActions.updateErrorStat(error));
    console.log('Error');
  }
}

function* removeItem() {
  yield delay(500);
  console.log('remove');
}

function* setBasket() {
  yield delay(500);
  console.log('setBasket');
}

export function* catalogSagas() {
  yield all([takeLatest(catalogActions.fetchCatalogs, fetchCatalog)]);
}

export function* basketSagas() {
  yield all([takeLatest(basketActions.setBasket, setBasket)]);
}
