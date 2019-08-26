import logger from '../logger';
import { LoadScreenAction } from '..//reducers/loadscreen';

const source = 'Loadscreen action';

/**
 * Show the load screen with a text
 * @version 1.0.0
 * @returns {void}
 */
export const loadScreenShow = (text: string): LoadScreenAction => {
  logger.info(`Show loadscreen`, source);
  return { type: 'SHOW_LOADSCREEN', payload: { text } };
};

/**
 * Hide the load screen
 * @version 1.0.0
 * @returns {void}
 */
export const loadScreenHide = (): LoadScreenAction => {
  logger.info(`Hide loadscreen`, source);
  return { type: 'HIDE_LOADSCREEN', payload: {} };
};
