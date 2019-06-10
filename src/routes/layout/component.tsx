import * as React from 'react';

// modules
import ReactNotification from 'react-notifications-component';
import LoadingBar from 'react-redux-loading-bar';

// type
import { IReactNotificationsComponent } from '../../types';
import { IProps } from './';

import Minimal from './minimal';
import Default from './default';
import { LoadScreen } from '../../modules';

const Layout: IHook<IProps> = ({ connected, notificationSet }) => {
  const notificationDOMRef = React.createRef<IReactNotificationsComponent>();
  React.useEffect(() => {
    if (notificationDOMRef && notificationDOMRef.current) {
      notificationSet(notificationDOMRef.current);
    }
  }, []);
  return (
    <div>
      <ReactNotification ref={notificationDOMRef} />
      <LoadingBar style={{ zIndex: 1 }} />
      <LoadScreen />
      {connected ? <Default /> : <Minimal />}
    </div>
  );
};

Layout.defaultProps = {};

export default Layout;
