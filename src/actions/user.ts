// Types
import { IUserAction, IUserDispatch } from './types';

// Auth the user
export const authUser = (username: string, password: string): IUserAction => (
  dispatch: IUserDispatch
) => {
  // Simulate connection on the api
  setTimeout(() => {
    dispatch({
      type: 'SET_USER',
      payload: {
        username,
        first_name: 'Jean',
        last_name: 'Delacour',
        token: 'anYtoken1213456789'
      }
    });
  }, 1000);
};

export const disconnectUser = (): IUserAction => (dispatch: IUserDispatch) =>
  dispatch({
    type: 'SET_USER',
    payload: {
      username: '',
      first_name: '',
      last_name: '',
      token: ''
    }
  });
