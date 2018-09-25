import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ReduxState } from '../reducers';
import { Type as CounterType, State as CounterState } from '../reducers/Counter';

// all interface Action
export interface IAction<T, P> {
  type: T;
  payload: P;
}

// Thunk
export type Dispatch<T, P> = ThunkDispatch<ReduxState, null, IAction<T, P>>;
export type Action<T, P> = ThunkAction<void, ReduxState, null, IAction<T, P>>;

// I18n
export type I18nType = any;
export type I18nState = any;

/// Counter
export type RouterType = any;
export type RouterState = any;

// Counter
export type CounterType = CounterType;
export type CounterState = CounterState;

// Counter constants
export const ADD_COUNTER = 'ADD_COUNTER';
export const SET_COUNTER = 'SET_COUNTER';
