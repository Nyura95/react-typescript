import * as React from 'react';

// modules
import { ConnectedRouter } from 'connected-react-router';
import ReactNotification from 'react-notifications-component';
import LoadingBar from 'react-redux-loading-bar';

// type
import { IReactNotificationsComponent } from '../../types';

// store
import { history } from '../../store';

import { Minimal } from './minimal';
import { Default } from './default';

export interface IProps {
  connected: boolean;
  locale: string;
  notificationSet(reactNotificationComponent: IReactNotificationsComponent): void;
}
export interface IState { }

export class Layout extends React.Component<IProps, IState> {
  private notificationDOMRef = React.createRef<IReactNotificationsComponent>();

  componentDidMount(): void {
    if (this.notificationDOMRef && this.notificationDOMRef.current) {
      this.props.notificationSet(this.notificationDOMRef.current);
    }
  }

  render(): JSX.Element {
    return (
      <ConnectedRouter history={history}>
        <div>
          <ReactNotification ref={this.notificationDOMRef} />
          <LoadingBar style={{ zIndex: 1 }} />
          {this.props.connected ? <Default /> : <Minimal />}
        </div>
      </ConnectedRouter>
    );
  }
}
