import { IAction } from '../actions';
import { IReactNotificationsComponent } from '../types';

export type IType = 'SET_NOTIFICATION';

export type IState = IReactNotificationsComponent | {
  addNotification: null
};

const initialState: IState = {
  addNotification: null
};

/**
 * Store the object from the notification module
 * @param state IState
 * @param action IAction<IState, IType>
 * @version 1.0.0
 * @returns {IState}
 */
export function Notification(state: IState = initialState, action: IAction<IState, IType>): IState {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.payload;
    default:
      return state;
  }
}
