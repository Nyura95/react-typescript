// Modules
import { I18nState } from 'react-redux-i18n';
import { LoadingBar } from 'react-redux-loading-bar';
import { RouterState } from 'react-router-redux';

// Types
import { IState as ICounterState } from './counter';
import { IState as IUserState } from './user';
import { IState as INotificationState } from './notification';
import { IState as ILoaderscreen } from './loadscreen';

// Interface redux app
export interface IReduxState {
  counter: ICounterState;
  user: IUserState;
  notification: INotificationState;
  loadscreen: ILoaderscreen;
  i18n: I18nState;
  loadingBar: LoadingBar;
  routing: RouterState;
}
