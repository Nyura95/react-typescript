import { takeEvery, delay, put } from 'redux-saga/effects';

import { CounterAction } from '../reducers';
import { SagaIterator } from 'redux-saga';

export type CounterTypeSaga = 'ASYNC_COUNTER_INCREMENT';

const asyncIncrement = function*(action: CounterAction): SagaIterator {
  yield delay(500);
  yield put<CounterAction>({ type: 'ADD_COUNTER', payload: { counter: action.payload ? action.payload.counter : 0 } });
};

export default [takeEvery<CounterAction>('ASYNC_COUNTER_INCREMENT', asyncIncrement)];
