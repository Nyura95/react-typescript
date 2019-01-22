import * as React from 'react';

// Component
import Minimal from './minimal';
import Default from './default';

// Router
import { ConnectedRouter } from 'connected-react-router';

import { Container } from '../../components';

// Store
import { history } from '../../store';

export interface IProps {
  connected: boolean;
  locale: string;
}
interface IState {}

export default class Layout extends React.Component<IProps, IState> {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Container fluid={true} removePadding={true}>
          {this.props.connected ? <Default /> : <Minimal />}
        </Container>
      </ConnectedRouter>
    );
  }
}
