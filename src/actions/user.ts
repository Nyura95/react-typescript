// Types
import { IUserAction, IUserDispatch } from './types';
import { IUserState } from '../reducers';

/**
 * Log a user with a timeout for simulate a api
 * @param username string
 * @param password string
 * @returns IUserAction
 */
export const authUser = (username: string, password: string): IUserAction => (dispatch: IUserDispatch) => {
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
 * Disconnect the user
 * @return IUserAction
 */
export const disconnectUser = (): IUserAction<Partial<IUserState>> => (dispatch: IUserDispatch<Partial<IUserState>>) =>
  dispatch({
    type: 'RESET_USER',
    payload: {}
  });
