// Action reducer module
import { push, goBack } from 'connected-react-router';

// Constants type
import { Action, Dispatch, RouterType, RouterState } from './Constants';

export const RouterPush = (to: string): Action<RouterType, RouterState> => (
  dispatch: Dispatch<RouterType, RouterState>
) => dispatch(push(to));

export const RouterGoBack = (): Action<RouterType, RouterState> => (dispatch: Dispatch<RouterType, RouterState>) =>
  dispatch(goBack());
