import { IAction } from '../actions';
import { IReactNotificationsComponent } from '../types';
import { Dispatch } from 'redux';

export type NotificationType = 'SET_NOTIFICATION';

export type NotificationState =
  | IReactNotificationsComponent
  | {
      addNotification: null;
    };

// notification reducer
export type NotificationAction = IAction<NotificationState, NotificationType>;
export type INotificationDispatch = Dispatch<NotificationAction>;

const initialState: NotificationState = {
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
  action: IAction<NotificationState, NotificationType>
): NotificationState {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
