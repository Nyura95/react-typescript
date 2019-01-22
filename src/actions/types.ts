import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { IReduxState, I18nType, I18nState, IUserType, IUserState, ICounterType, ICounterState, IRouterType, IRouterState } from '../reducers';

// All interface Action
export interface IAction<T, S> {
  type: T;
  payload: S;
}

// Thunk (async dispatch/action)
export type ICustomDispatch<T, S> = ThunkDispatch<IReduxState, null, IAction<T, S>>;
export type ICustomAction<T, S> = ThunkAction<void, IReduxState, null, IAction<T, S>>;


// export here your dispatch/action
export type I18nDispatch<T = I18nType, S = I18nState> = ICustomDispatch<T, S>;
export type I18nAction<T = I18nType, S = I18nState> = ICustomAction<T, S>;

export type IUserDispatch<T = IUserType, S = IUserState> = ICustomDispatch<T, S>;
export type IUserAction<T = I18nType, S = I18nState> = ICustomAction<T, S>;

export type ICounterDispatch<T = ICounterType, S = ICounterState> = ICustomDispatch<T, S>;
export type ICounterAction<T = ICounterType, S = ICounterState> = ICustomAction<T, S>;

export type IRouterDispatch<T = IRouterType, S = IRouterState> = ICustomDispatch<T, S>;
export type IRouterAction<T = ICounterType, S = ICounterState> = ICustomAction<T, S>;
