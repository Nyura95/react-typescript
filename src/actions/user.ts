// Types
import { IUserAction, IUserDispatch } from './types';
import { IUserState } from '../reducers';
import logger from '../logger';
import { resetCounter } from './counter';

const source = 'Counter action';

/**
 * Log a user with a timeout for simulate a api
 * @param {string} username
 * @param {string} password
 * @version 1.0.0
 * @returns {IUserAction}
 */
export const authUser = (username: string, password: string): IUserAction => (dispatch: IUserDispatch) => {
  logger.info(`set a new user ${username}:${password}`, source);
  setTimeout(() => {
    dispatch({
      type: 'SET_USER',
      payload: {
        username,
        first_name: 'Jean',
        last_name: 'Delacour',
        token: 'ranD0mTokEn'
      }
    });
  }, 1000);
};

/**
 * Disconnect the user and reset the counter
 * @version 1.0.0
 * @return {IUserAction}
 */
export const disconnectUser = (): IUserAction<Partial<IUserState>> => (
  dispatch: IUserDispatch<Partial<IUserState>>
) => {
  // We need dispatch two Action here
  logger.info(`disconnect the user and reset the counter`, source);
  // For dispatch a another action, call the method corresponding
  // Don't dispatch with another type in this file
  dispatch(resetCounter());
  // And dispatch for your action
  return dispatch({ type: 'RESET_USER', payload: {} });
};
