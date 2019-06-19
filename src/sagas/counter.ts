import { takeEvery, delay, put } from 'redux-saga/effects';

import { ICounterAction } from '../reducers';
import { SagaIterator } from 'redux-saga';

export type ICounterTypeSaga = 'ASYNC_COUNTER_INCREMENT';

const asyncIncrement = function*(action: ICounterAction): SagaIterator {
  yield delay(500);
  yield put<ICounterAction>({ type: 'ADD_COUNTER', payload: { counter: action.payload ? action.payload.counter : 0 } });
};

export default [takeEvery<ICounterAction>('ASYNC_COUNTER_INCREMENT', asyncIncrement)];
