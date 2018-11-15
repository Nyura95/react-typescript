import * as React from 'react';

// Component
import Minimal from './minimal';
import Default from './default';

// Router
import { ConnectedRouter } from 'connected-react-router';

// Store
import { history } from '../../store';

export interface IProps {
  connected: boolean;
  locale: string;
}
interface IState {}

export default class Layout extends React.Component<IProps, IState> {
  render() {
    console.log('Layout');
    return <ConnectedRouter history={history}>{this.props.connected ? <Default /> : <Minimal />}</ConnectedRouter>;
  }
}
