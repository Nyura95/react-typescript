import { IAction, ICustomDispatch, ICustomAction } from '../actions';
import { IReactNotificationsComponent } from '../types';

export type INotificationType = 'SET_NOTIFICATION';

export type INotificationState =
  | IReactNotificationsComponent
  | {
      addNotification: null;
    };

// notification reducer
export type INotificationDispatch<S = INotificationState, T = INotificationType> = ICustomDispatch<S, T>;
export type INotificationAction<S = INotificationState, T = INotificationType> = ICustomAction<S, T>;

const initialState: INotificationState = {
  addNotification: null
};

/**
 * Store the object from the notification module
 * @param state INotificationState
 * @param action IAction<INotificationState, IType>
 * @version 1.0.0
 * @returns {INotificationState}
 */
export function notification(
  state = initialState,
  action: IAction<INotificationState, INotificationType>
): INotificationState {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.payload;
    default:
      return state;
  }
}
