import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ReduxState } from '../reducers';
import { Type as CounterType, State as CounterState } from '../reducers/Counter';
import { I18nState } from 'react-redux-i18n';
import { LocationActionPayload } from 'connected-react-router';
// all interface Action
export interface IAction<T, P> {
  type: T;
  payload: P;
}

// Thunk
export type Dispatch<T, P> = ThunkDispatch<ReduxState, null, IAction<T, P>>;
export type Action<T, P> = ThunkAction<void, ReduxState, null, IAction<T, P>>;

// I18n
export type I18nType = string;
export type I18nState = I18nState;

/// Router
export type RouterType = string;
export type RouterState = LocationActionPayload;

// Counter
export type CounterType = CounterType;
export type CounterState = CounterState;
