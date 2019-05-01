// Action reducer module
import { showLoading, hideLoading, resetLoading } from 'react-redux-loading-bar'


import { ILoaderDispatch, ILoaderAction } from './types';
import logger from '../logger';

const source = 'Loader action';

/**
 * Start the loader
 * @version 1.0.0
 * @returns {void}
 */
export const loaderShow = (): ILoaderAction => (dispatch: ILoaderDispatch): void => {
  logger.info(`Show loader`, source);
  // tslint:disable-next-line
  dispatch(showLoading() as any); // react-redux-loading-bar don't respect the type
};

/**
 * Hide the loader
 * @version 1.0.0
 * @returns {void}
 */
export const loaderHide = (): ILoaderAction => (dispatch: ILoaderDispatch): void => {
  logger.info(`Hide loader`, source);
  // tslint:disable-next-line
  dispatch(hideLoading() as any); // react-redux-loading-bar don't respect the type
};

/**
 * Reset the loader
 * @version 1.0.0
 * @returns {void}
 */
export const loaderReset = (): ILoaderAction => (dispatch: ILoaderDispatch): void => {
  logger.info(`Reset loader`, source);
  // tslint:disable-next-line
  dispatch(resetLoading() as any); // react-redux-loading-bar don't respect the type
};