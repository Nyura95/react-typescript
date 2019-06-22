// Types
import logger from '../logger';
import { IUserAction, IUserState } from '../reducers/user';

const source = 'Counter action';

export const userAuthenticate = (username: string, password: string): IUserAction => {
  return { type: 'AUTHENTICATE_USER', payload: {}, saga: { password, username } };
};

export const userSet = (user: IUserState): IUserAction => {
  return { type: 'SET_USER', payload: { ...user } };
};

/**
 * Disconnect the user and reset the counter
 * @version 1.0.0
 * @return {IUserAction}
 */
export const userDisconnect = (): IUserAction => {
  logger.info(`disconnect the user and reset the counter`, source);
  return { type: 'RESET_USER', payload: {} };
};
