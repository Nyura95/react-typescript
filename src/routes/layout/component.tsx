import * as React from 'react';

import { ConnectedRouter } from 'connected-react-router';

import { Container } from '../../components';
import { history } from '../../store';

import { Minimal } from './minimal';
import { Default } from './default';

export interface IProps {
  connected: boolean;
  locale: string;
}
export interface IState { }

export class Layout extends React.Component<IProps, IState> {
  render(): JSX.Element {
    return (
      <ConnectedRouter history={history}>
        <Container fluid={true} removePadding={true}>
          {this.props.connected ? <Default /> : <Minimal />}
        </Container>
      </ConnectedRouter>
    );
  }
}
