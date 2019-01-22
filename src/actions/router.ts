// Action reducer module
import { push, goBack } from 'connected-react-router';

import { IRouterAction, IRouterDispatch } from './types';

/**
 * Switch the current url with {to}
 * @param to string
 * @returns IRouterAction
 */
export const RouterPush = (to: string): IRouterAction => (dispatch: IRouterDispatch) => dispatch(push(to) as any);

/**
 * Return in back
 * @returns IRouterAction
 */
export const RouterGoBack = (): IRouterAction => (dispatch: IRouterDispatch) => dispatch(goBack() as any);
