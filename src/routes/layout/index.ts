import { connect } from 'react-redux';

import { Layout } from './component';
import { IReduxState } from '../../reducers/types';
import { INotificationDispatch } from '../../actions';
import { notificationSet } from '../../actions/notification';
import { IReactNotificationsComponent } from '../../types';

interface IComponentProps {}

interface IStateProps {
  connected: boolean;
}

// be carfull, here you must not subscribe to a store that is too often updated.
const mapStateToProps = (reducers: IReduxState): IStateProps => ({
  connected: reducers.user.token !== ''
});

interface IDispatchProps {
  notificationSet(reactNotificationComponent: IReactNotificationsComponent): void;
}

const mapDispatchToProps = (dispatch: INotificationDispatch): IDispatchProps => {
  // be carfull, dispatch here recharges all Component
  // Do not put reducer that dispatches a lot !
  return {
    notificationSet: (reactNotificationComponent: IReactNotificationsComponent) =>
      dispatch(notificationSet(reactNotificationComponent))
  };
};

export type IProps = IComponentProps & IStateProps & IDispatchProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
