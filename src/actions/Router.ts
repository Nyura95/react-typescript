// state reducer
import { Dispatch } from 'redux';
import { Action, RouterAction } from './';

// Constants
import { push, goBack } from 'connected-react-router';

export const RouterPush = (to: string): Action<RouterAction> => (dispatch: Dispatch<RouterAction>) =>
  dispatch(push(to));

export const RouterGoBack = (): Action<RouterAction> => (dispatch: Dispatch<RouterAction>) => dispatch(goBack());
