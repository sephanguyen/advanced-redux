import { UPDATE_STATUS } from '../actions';
import { currentUserSelector } from '../selectors/currentUserSelector';
import { takeLatest, call, select } from 'redux-saga/effects';

function* putUserStatus({ status }) {
  const currentUser = yield select(currentUserSelector);
  const id = currentUser.get(`id`);
  console.log('Put user status');
  yield call(() => fetch(`/status/${id}/${status}`));
}

export function* currentUserStatusSaga() {
  yield takeLatest(UPDATE_STATUS, putUserStatus);
}
