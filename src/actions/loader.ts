// Action reducer module
import { showLoading, hideLoading, resetLoading } from 'react-redux-loading-bar';

import logger from '../logger';
import { LoaderAction } from '../reducers/loadingBar';

const source = 'Loader action';

/**
 * Start the loader
 * @version 1.0.0
 * @returns {void}
 */
export const loaderShow = (): LoaderAction => {
  logger.info(`Show loader`, source);
  return showLoading() as LoaderAction;
};

/**
 * Hide the loader
 * @version 1.0.0
 * @returns {void}
 */
export const loaderHide = (): LoaderAction => {
  logger.info(`Hide loader`, source);
  return hideLoading() as LoaderAction;
};

/**
 * Reset the loader
 * @version 1.0.0
 * @returns {void}
 */
export const loaderReset = (): LoaderAction => {
  logger.info(`Reset loader`, source);
  return resetLoading() as LoaderAction;
};
