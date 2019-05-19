import * as React from 'react';

// modules
import { ConnectedRouter } from 'connected-react-router';
import ReactNotification from 'react-notifications-component';
import LoadingBar from 'react-redux-loading-bar';

// type
import { IReactNotificationsComponent } from '../../types';
import { IProps } from './';

// store
import { history } from '../../store';

import { Minimal } from './minimal';
import { Default } from './default';
import { LoadScreen } from '../../modules';

export const Layout: React.FunctionComponent<IProps> = ({ connected, notificationSet }) => {
  const notificationDOMRef = React.createRef<IReactNotificationsComponent>();
  React.useEffect(() => {
    if (notificationDOMRef && notificationDOMRef.current) {
      notificationSet(notificationDOMRef.current);
    }
  }, [])
  return (
    <ConnectedRouter history={history}>
      <div>
        <ReactNotification ref={notificationDOMRef} />
        <LoadingBar style={{ zIndex: 1 }} />
        <LoadScreen />
        {connected ? <Default /> : <Minimal />}
      </div>
    </ConnectedRouter>
  );
};