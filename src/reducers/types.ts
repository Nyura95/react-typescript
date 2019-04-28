// Modules
import { I18nState } from 'react-redux-i18n';
import { RouterState } from 'connected-react-router';

// Types
import { IState as ICounterState } from './counter';
import { IState as IUserState } from './user';
import { IState as INotificationState } from './notification';

// Interface redux app
export interface IReduxState {
  Counter: ICounterState;
  User: IUserState;
  Notification: INotificationState;
  i18n: I18nState;
  Route: RouterState;
}

// reducer router
export type IRouterState = RouterState;
export type IRouterType = string;

// reducer I18n
export type I18nState = I18nState;
export type I18nType = string;
