// Action reducer module
import { push, goBack } from 'connected-react-router';

// Types
import { IRouterAction, IRouterDispatch } from './types';

export const RouterPush = (to: string): IRouterAction => (
  dispatch: IRouterDispatch
) => dispatch(push(to) as any);

export const RouterGoBack = (): IRouterAction => (dispatch: IRouterDispatch) =>
  dispatch(goBack() as any);
