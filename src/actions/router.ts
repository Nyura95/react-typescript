// Action reducer module
import { push, goBack } from 'react-router-redux';

import logger from '../logger';
import { IRouterAction } from '../reducers/router';

const source = 'Router action';

/**
 * Switch the current url with {to}
 * @param {string} to
 * @version 1.0.0
 * @returns {void}
 */
export const RouterPush = (to: string): IRouterAction => dispatch => {
  logger.info(`push new location: ${to}`, source);
  // tslint:disable-next-line
  dispatch(push(to) as any); // react-router-redux don't respect the type
};

/**
 * Return in back
 * @version 1.0.0
 * @returns {void}
 */
export const RouterGoBack = (): IRouterAction => dispatch => {
  logger.info(`go back`, source);
  // tslint:disable-next-line
  dispatch(goBack() as any);
};
