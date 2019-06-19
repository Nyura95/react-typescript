import * as React from 'react';

// modules
import ReactNotification from 'react-notifications-component';
import LoadingBar from 'react-redux-loading-bar';
import { useSelector, useDispatch } from 'react-redux';

// type
import { IReactNotificationsComponent } from '../../types';

import { LoadScreen } from '../../modules';
import { IReduxState, INotificationAction, INotificationDispatch } from '../../reducers';
import { notificationSet } from '../../actions';

import Minimal from './minimal';
import Default from './default';
import { Dispatch } from 'redux';

const Layout: IHook = () => {
  const { token } = useSelector((reducers: IReduxState) => reducers.user);
  const dispatch = useDispatch<INotificationDispatch>();
  const notificationDOMRef = React.createRef<IReactNotificationsComponent>();

  React.useEffect(() => {
    if (notificationDOMRef && notificationDOMRef.current) {
      dispatch(notificationSet(notificationDOMRef.current));
    }
  }, []);

  return (
    <div>
      <ReactNotification ref={notificationDOMRef} />
      <LoadingBar style={{ zIndex: 1 }} />
      <LoadScreen />
      {token !== '' ? <Default /> : <Minimal />}
    </div>
  );
};

Layout.defaultProps = {};

export default Layout;
