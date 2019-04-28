import { store } from '../store'

import { INotificationAction, INotificationDispatch } from './types';
import logger from '../logger';
import { IReactNotificationsComponent, IOptionReactNotificationComponent } from '../types';

// Set the source file
const source = 'Notification action';

/**
 * Set the notification object
 * @param {IReactNotificationsComponent} reactNotificationComponent
 * @version 1.0.0
 * @returns {void}
 */
export const notificationSet = (reactNotificationComponent: IReactNotificationsComponent): INotificationAction => (dispatch: INotificationDispatch): void => {
  logger.info('Set notification', source);
  dispatch({ type: 'SET_NOTIFICATION', payload: reactNotificationComponent });
};

/**
 * Show a new notification
 * @param {IOptionReactNotificationComponent} option
 * @version 1.0.0
 * @returns {void}
 */
export const notificationShow = (option: IOptionReactNotificationComponent): void => {
  const state = getState();
  state.addNotification ? (state.addNotification({
    type: 'info',
    container: 'top-right',
    insert: 'top',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: { duration: 2000 },
    dismissable: { click: true },
    ...option
  })) : setTimeout(() => notificationShow(option), 200);
}

// get the current state inn the reducer Notification
const getState = () => store.getState().Notification;