// Types
import { IUserState } from './user';
import { NotificationState } from './notification';
import { ILoadScreenState } from './loadscreen';
import { I18nState } from './i18n';
import { RouterState } from './router';
import { LoadingBar } from './loadingBar';

// Interface redux app
export interface IReduxState {
  user: IUserState;
  notification: NotificationState;
  loadscreen: ILoadScreenState;
  i18n: I18nState;
  loadingBar: LoadingBar;
  routing: RouterState;
}
