import * as React from 'react';

// Component
import Minimal from './minimal';
import Default from './default';

// Router
import { ConnectedRouter } from 'connected-react-router';

import { Navbar } from '../../modules';
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
    console.log('ttttt');
    return (
      <ConnectedRouter history={history}>
        <Container fluid={true} removePadding={true}>
          <Navbar />
          {this.props.connected ? <Default /> : <Minimal />}
        </Container>
      </ConnectedRouter>
    );
  }
}
