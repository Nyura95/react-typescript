import { takeEvery, delay, put } from 'redux-saga/effects';
import { ICounterAction } from '../reducers';

export type ICounterTypeSaga = 'ASYNC_COUNTER_INCREMENT';

/**
 * Increment the counter with the variable {counter} in asynchronous
 * @param {number} counter
 * @version 1.0.0
 * @returns {void}
 */
const asyncIncrement = function*(action: ICounterAction) {
  yield delay(500);
  yield put<ICounterAction>({ type: 'ADD_COUNTER', payload: { counter: action.payload ? action.payload.counter : 0 } });
};

export function* watchIncrementCounter() {
  yield takeEvery('ASYNC_COUNTER_INCREMENT', asyncIncrement);
}
