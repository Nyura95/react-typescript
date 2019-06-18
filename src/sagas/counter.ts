import { takeEvery } from 'redux-saga/effects';
import { counterSet } from '../actions/counter';

export function* watchIncrementCounter() {
  yield takeEvery('INCREMENT', counterSet);
}
