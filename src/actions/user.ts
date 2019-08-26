// Types
import logger from '../logger';
import { UserAction, IUserState } from '../reducers/user';

const source = 'User action';

export const userAuthenticate = (username: string, password: string): UserAction => {
  return { type: 'AUTHENTICATE_USER', payload: {}, saga: { password, username } };
};

export const userSet = (user: IUserState): UserAction => {
  return { type: 'SET_USER', payload: { ...user } };
};

/**
 * Disconnect the user and reset the counter
 * @version 1.0.0
 * @return {IUserAction}
 */
export const userDisconnect = (): UserAction => {
  logger.info(`disconnect the user and reset the counter`, source);
  return { type: 'RESET_USER', payload: {} };
};
