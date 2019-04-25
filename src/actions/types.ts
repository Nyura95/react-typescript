import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { IReduxState } from '../reducers';

import { IState as ICounterState, IType as ICounterType } from '../reducers/counter';
import { IState as IUserState, IType as IUserType } from '../reducers/user';

import { I18nState } from 'react-redux-i18n';
import { RouterState } from 'connected-react-router';

// my interface Action
export interface IAction<S, T> {
  type: T;
  payload: S;
}

// export here your dispatch/action
// thunk (async dispatch/action)
export type ICustomDispatch<S, T> = ThunkDispatch<IReduxState, null, IAction<S, T>>;
export type ICustomAction<S, T> = ThunkAction<void, IReduxState, null, IAction<S, T>>;

// i18n reducer
export type I18nDispatch<S = I18nState, T = string> = ICustomDispatch<S, T>;
export type I18nAction<S = I18nState, T = string> = ICustomAction<S, T>;

// router reducer
export type IRouterDispatch<S = RouterState, T = string> = ICustomDispatch<S, T>;
export type IRouterAction<S = RouterState, T = string> = ICustomAction<S, T>;

// user reducer
export type IUserDispatch<S = IUserState, T = IUserType> = ICustomDispatch<S, T>;
export type IUserAction<S = IUserState, T = IUserType> = ICustomAction<S, T>;

// counter reducer
export type ICounterDispatch<S = ICounterState, T = ICounterType> = ICustomDispatch<S, T>;
export type ICounterAction<S = ICounterState, T = ICounterType> = ICustomAction<S, T>;
