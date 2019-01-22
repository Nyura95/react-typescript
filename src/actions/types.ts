import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  IReduxState,
  I18nType,
  I18nState,
  IUserType,
  IUserState,
  ICounterType,
  ICounterState,
  IRouterType,
  IRouterState
} from '../reducers';

// all interface Action
export interface IAction<S, T> {
  type: T;
  payload: S;
}

// export here your dispatch/action
// thunk (async dispatch/action)
export type ICustomDispatch<S, T> = ThunkDispatch<IReduxState, null, IAction<S, T>>;
export type ICustomAction<S, T> = ThunkAction<void, IReduxState, null, IAction<S, T>>;

// i18n reducer
export type I18nDispatch<S = I18nState, T = I18nType> = ICustomDispatch<S, T>;
export type I18nAction<S = I18nState, T = I18nType> = ICustomAction<S, T>;

// router reducer
export type IRouterDispatch<S = IRouterState, T = IRouterType> = ICustomDispatch<S, T>;
export type IRouterAction<S = ICounterState, T = ICounterType> = ICustomAction<S, T>;

// user reducer
export type IUserDispatch<S = IUserState, T = IUserType> = ICustomDispatch<S, T>;
export type IUserAction<S = I18nState, T = I18nType> = ICustomAction<S, T>;

// counter reducer
export type ICounterDispatch<S = ICounterState, T = ICounterType> = ICustomDispatch<S, T>;
export type ICounterAction<S = ICounterState, T = ICounterType> = ICustomAction<S, T>;
