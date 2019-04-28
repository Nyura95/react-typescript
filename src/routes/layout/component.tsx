import * as React from 'react';
import { IReactNotificationsComponent } from '../../types';

import { ConnectedRouter } from 'connected-react-router';
// import { Helmet } from "react-helmet";
import ReactNotification from "react-notifications-component";

import { Container } from '../../components';
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
        <Container fluid={true} removePadding={true}>
          <ReactNotification ref={this.notificationDOMRef} />
          {this.props.connected ? <Default /> : <Minimal />}
        </Container>
      </ConnectedRouter>
    );
  }
}
