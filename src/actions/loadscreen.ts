import { ILoadScreenAction, ILoadScreenDispatch } from './types';
import logger from '../logger';

const source = 'Loadscreen action';

/**
 * Show the load screen with a text
 * @version 1.0.0
 * @returns {void}
 */
export const loadScreenShow = (text: string): ILoadScreenAction => (dispatch: ILoadScreenDispatch): void => {
  logger.info(`Show loadscreen`, source);
  dispatch({ type: 'SHOW_LOADSCREEN', payload: { text } });
};

/**
 * Hide the load screen
 * @version 1.0.0
 * @returns {void}
 */
export const loadScreenHide = (): ILoadScreenAction => (dispatch: ILoadScreenDispatch): void => {
  logger.info(`Hide loadscreen`, source);
  dispatch({ type: 'HIDE_LOADSCREEN', payload: {} });
};