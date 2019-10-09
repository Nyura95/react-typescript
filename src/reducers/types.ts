// Types
import { ICounterState } from './counter';
import { IUserState } from './user';
import { NotificationState } from './notification';
import { ILoadScreenState } from './loadscreen';
import { I18nState } from './i18n';
import { RouterState } from './router';
import { LoadingBar } from './loadingBar';
import { Reducer } from 'react';
import { AnyAction } from 'redux';

// Interface redux app
export interface IReduxState {
  counter: ICounterState;
  user: IUserState;
  notification: NotificationState;
  loadscreen: ILoadScreenState;
  i18n: Reducer<I18nState, AnyAction>;
  loadingBar: LoadingBar;
  router: RouterState;
}
