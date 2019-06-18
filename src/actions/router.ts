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
export const RouterPush = (to: string) => {
  logger.info(`push new location: ${to}`, source);
  return push(to);
};

/**
 * Return in back
 * @version 1.0.0
 * @returns {void}
 */
export const RouterGoBack = () => {
  logger.info(`go back`, source);
  // tslint:disable-next-line
  return goBack();
};
