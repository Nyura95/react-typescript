// state reducer
import { Action, Dispatch } from './';

// Constants
import { push, goBack } from 'connected-react-router';

export const RouterPush = (to: string): Action<any, any> => (dispatch: Dispatch<any, any>) => dispatch(push(to));

export const RouterGoBack = (): Action<any, any> => (dispatch: Dispatch<any, any>) => dispatch(goBack());
