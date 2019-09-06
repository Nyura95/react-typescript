import { takeEvery, delay, put } from 'redux-saga/effects';

import { CounterAction } from '../reducers';
import { SagaIterator } from 'redux-saga';

export type CounterTypeSaga = 'ASYNC_COUNTER_INCREMENT';

export interface ICounterStateSaga {
  counter: number;
}

const asyncIncrement = function*(action: CounterAction): SagaIterator {
  if (action.saga) {
    yield delay(500);
    yield put<CounterAction>({ type: 'ADD_COUNTER', payload: { counter: action.saga.counter } });
  }
};

export default [takeEvery<CounterAction>('ASYNC_COUNTER_INCREMENT', asyncIncrement)];
