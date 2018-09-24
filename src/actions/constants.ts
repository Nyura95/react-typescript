import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ReduxState } from '../reducers';

// all interface Action
export interface IAction<P> {
  type: string;
  payload: P;
}

// module Action
export type I18nAction = any;
export type RouterAction = any;

// Thunk
export type Dispatch<S> = ThunkDispatch<ReduxState, null, IAction<S>>;
export type Action<S> = ThunkAction<void, ReduxState, null, IAction<S>>;

// Counter constants
export const ADD_COUNTER = 'ADD_COUNTER';
export const SET_COUNTER = 'SET_COUNTER';
