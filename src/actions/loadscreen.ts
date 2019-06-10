
import logger from '../logger';
import { ILoadScreenAction } from '..//reducers/loadscreen';

const source = 'Loadscreen action';

/**
 * Show the load screen with a text
 * @version 1.0.0
 * @returns {void}
 */
export const loadScreenShow = (text: string): ILoadScreenAction => dispatch => {
  logger.info(`Show loadscreen`, source);
  dispatch({ type: 'SHOW_LOADSCREEN', payload: { text } });
};

/**
 * Hide the load screen
 * @version 1.0.0
 * @returns {void}
 */
export const loadScreenHide = (): ILoadScreenAction => dispatch => {
  logger.info(`Hide loadscreen`, source);
  dispatch({ type: 'HIDE_LOADSCREEN', payload: {} });
};