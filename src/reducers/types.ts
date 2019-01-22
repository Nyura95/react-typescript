// Modules
import { I18nState } from 'react-redux-i18n';
import { LocationActionPayload, RouterState } from 'connected-react-router';

// Types
import { IState as ICounterState, IType as ICounterType } from './counter';
import { IState as IUserState, IType as IUserType } from './user';

// Interface redux app
export interface IReduxState {
  Counter: ICounterState;
  User: IUserState;
  i18n: I18nState;
  Route: RouterState;
}

// reducer router
export type IRouterState = RouterState;
export type IRouterType = string;

// reducer I18n
export type I18nState = I18nState;
export type I18nType = string;

// reducer Router
export type RouterState = LocationActionPayload;
export type RouterType = string;

// reducer Counter
export type IUserState = IUserState;
export type IUserType = IUserType;

// reducer User
export type ICounterState = ICounterState;
export type ICounterType = ICounterType;
