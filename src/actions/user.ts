// Types
import { Action, Dispatch, UserType, UserState } from './types';

// Auth the user
export const authUser = (username: string, password: string): Action<UserType, UserState> => (
  dispatch: Dispatch<UserType, UserState>
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

export const disconnectUser = (): Action<UserType, UserState> => (dispatch: Dispatch<UserType, UserState>) =>
  dispatch({
    type: 'SET_USER',
    payload: {
      username: '',
      first_name: '',
      last_name: '',
      token: ''
    }
  });
