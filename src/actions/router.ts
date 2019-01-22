// Action reducer module
import { push, goBack } from 'connected-react-router';

import { IRouterAction, IRouterDispatch } from './types';
import logger from '../logger';

const source = 'Router action';

/**
 * Switch the current url with {to}
 * @param to string
 * @returns IRouterAction
 */
export const RouterPush = (to: string): IRouterAction => (dispatch: IRouterDispatch) => {
  logger.info(`push new location: ${to}`, source);
  return dispatch(push(to) as any);
};

/**
 * Return in back
 * @returns IRouterAction
 */
export const RouterGoBack = (): IRouterAction => (dispatch: IRouterDispatch) => {
  logger.info(`go back`, source);
  return dispatch(goBack() as any);
};
