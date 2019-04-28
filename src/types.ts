// type for react-notifications-component
type ITypeReactNotificationsComponent = 'success' | 'danger' | 'default' | 'info' | 'warning' | 'custom';
type IInsertReactNotificationsComponent = 'top' | 'bottom ';
type IContainerReactNotificationComponent = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export interface IOptionReactNotificationComponent {
  title: string,
  message: string,
  type?: ITypeReactNotificationsComponent,
  insert?: IInsertReactNotificationsComponent,
  container?: IContainerReactNotificationComponent,
  animationIn?: ['animated', string],
  animationOut?: ['animated', string],
  dismiss?: { duration: number },
  dismissable?: { click: boolean }
}

export interface IReactNotificationsComponent {
  addNotification(option: IOptionReactNotificationComponent): void;
}
// ---------

// Add your type common here


