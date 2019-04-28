import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import { Layout, IProps, IState } from './component';
import { IReduxState } from '../../reducers/types';
import { INotificationDispatch } from '../../actions';
import { notificationSet } from '../../actions/notification';
import { IReactNotificationsComponent } from '../../types';

// be carfull, here you must not subscribe to a store that is too often updated.
const mapStateToProps = (reducers: IReduxState): Partial<IProps> => ({
  connected: reducers.User.token !== ''
});

const mapDispatchToProps = (dispatch: INotificationDispatch): Partial<IProps> => {
  // be carfull, dispatch here recharges all Component
  // Do not put reducer that dispatches a lot !
  return {
    notificationSet: (reactNotificationComponent: IReactNotificationsComponent) => dispatch(notificationSet(reactNotificationComponent))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);
