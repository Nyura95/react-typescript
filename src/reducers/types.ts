// Modules
import { I18nState } from 'react-redux-i18n';
import { RouterState } from 'connected-react-router';

// Types
import { IState as ICounterState } from './counter';
import { IState as IUserState } from './user';
import { IState as INotificationState } from './notification';

// Interface redux app
export interface IReduxState {
  counter: ICounterState;
  user: IUserState;
  notification: INotificationState;
  i18n: I18nState;
  route: RouterState;
}

// reducer router
export type IRouterState = RouterState;
export type IRouterType = string;

// reducer I18n
export type I18nState = I18nState;
export type I18nType = string;
