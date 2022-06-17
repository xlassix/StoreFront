import { takeLatest, call, put, delay, all } from 'redux-saga/effects';
import { apiCall } from '../../../../../utils/axios';
import { UserInput } from '../../../../../types/User';
import { userActions } from '.';

function* fetchUser(data: any) {
  console.log('jdjsnfjdjfsdjkfbskd', data);
  yield delay(500);
  try {
    const res = yield call(apiCall, 'GET', '/Inventory/GetAllProducts', data);
    yield put(userActions.userLoaded(res));
  } catch (error) {
    //yield put(catalogActions.updateErrorStat(error));
    console.log('Error');
  }
}

export function* userSagas() {
  yield all([takeLatest(userActions.userAuth, fetchUser)]);
}
