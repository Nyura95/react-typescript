// Modules
import { I18nState } from 'react-redux-i18n';
import { RouterState } from 'connected-react-router';
import { LoadingBar } from 'react-redux-loading-bar'

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
  loadingBar: LoadingBar
}
