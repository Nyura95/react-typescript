// Action reducer module
import { push, goBack } from 'react-router-redux';

import logger from '../logger';
import { RouterAction } from '../reducers/router';

const source = 'Router action';

/**
 * Switch the current url with {to}
 * @param {string} to
 * @version 1.0.0
 * @returns {void}
 */
export const RouterPush = (to: string): RouterAction => {
  logger.info(`push new location: ${to}`, source);
  return push(to) as RouterAction;
};

/**
 * Return in back
 * @version 1.0.0
 * @returns {void}
 */
export const RouterGoBack = (): RouterAction => {
  logger.info(`go back`, source);
  return goBack() as RouterAction;
};
