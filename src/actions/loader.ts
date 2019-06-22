// Action reducer module
import { showLoading, hideLoading, resetLoading } from 'react-redux-loading-bar';

import logger from '../logger';
import { ILoaderAction } from '../reducers/loadingBar';

const source = 'Loader action';

/**
 * Start the loader
 * @version 1.0.0
 * @returns {void}
 */
export const loaderShow = (): ILoaderAction => {
  logger.info(`Show loader`, source);
  return showLoading() as ILoaderAction;
};

/**
 * Hide the loader
 * @version 1.0.0
 * @returns {void}
 */
export const loaderHide = (): ILoaderAction => {
  logger.info(`Hide loader`, source);
  return hideLoading() as ILoaderAction;
};

/**
 * Reset the loader
 * @version 1.0.0
 * @returns {void}
 */
export const loaderReset = (): ILoaderAction => {
  logger.info(`Reset loader`, source);
  return resetLoading() as ILoaderAction;
};
