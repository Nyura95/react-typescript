// Types
import { IUserAction, IUserDispatch } from './types';
import { IState as IUserState } from '../reducers/user';
import logger from '../logger';
import { counterReset } from './counter';
import { notificationShow } from './notification';
import { I18n } from 'react-redux-i18n';

const source = 'Counter action';

/**
 * Log a user with a timeout for simulate a api
 * @param {string} username
 * @param {string} password
 * @version 1.0.0
 * @returns {void}
 */
export const userAuth = (username: string, password: string): IUserAction => (dispatch: IUserDispatch): void => {
  logger.info(`set a new user ${username}:${password}`, source);
  setTimeout((): void => {
    // connect the customer
    dispatch({
      type: 'SET_USER',
      payload: {
        username,
        first_name: 'Jean',
        last_name: 'Delacour',
        token: 'ranD0mTokEn'
      }
    });
    // notify the customer
    notificationShow({
      title: I18n.t('notifications.connect.title'),
      message: I18n.t('notifications.connect.message')
    });
  }, 1000);
};

/**
 * Disconnect the user and reset the counter
 * @version 1.0.0
 * @return {IUserAction}
 */
export const userDisconnect = (): IUserAction<Partial<IUserState>> => (
  dispatch: IUserDispatch<Partial<IUserState>>
): void => {
  // We need dispatch two Action here
  logger.info(`disconnect the user and reset the counter`, source);
  // For dispatch a another action, call the method corresponding
  // Don't dispatch with another type in this file
  dispatch(counterReset());
  // And dispatch for your action
  dispatch({ type: 'RESET_USER', payload: {} });
};
