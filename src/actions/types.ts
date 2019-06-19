import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { IReduxState } from '../reducers';

// my interface Action
export interface IAction<S, T> {
  type: T;
  payload: Partial<S>;
}

// thunk (async dispatch/action)
export type ICustomDispatch<S, T> = ThunkDispatch<IReduxState, null, IAction<S, T>>;
export type ICustomAction<S, T> = ThunkAction<void, IReduxState, null, IAction<S, T>>;
