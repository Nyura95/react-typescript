// Action reducer module
import { push, goBack } from 'connected-react-router';

import { IRouterAction, IRouterDispatch } from './types';
import logger from '../logger';

const source = 'Router action';

/**
 * Switch the current url with {to}
 * @param {string} to
 * @version 1.0.0
 * @returns {IRouterAction}
 */
export const RouterPush = (to: string): IRouterAction => (dispatch: IRouterDispatch) => {
  logger.info(`push new location: ${to}`, source);
  // tslint:disable-next-line
  return dispatch(push(to) as any); // connected-react-router don't respect the type
};

/**
 * Return in back
 * @version 1.0.0
 * @returns IRouterAction
 */
export const RouterGoBack = (): IRouterAction => (dispatch: IRouterDispatch) => {
  logger.info(`go back`, source);
  // tslint:disable-next-line
  return dispatch(goBack() as any);
};
