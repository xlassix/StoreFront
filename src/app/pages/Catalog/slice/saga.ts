import { takeLatest, call, put, delay, all } from 'redux-saga/effects';
import { apiCall } from 'utils/axios';
import { catalogActions } from '.';

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

export function* catalogSagas() {
  yield all([takeLatest(catalogActions.fetchCatalogs, fetchCatalog)]);
}
