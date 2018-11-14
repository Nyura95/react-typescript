import * as React from 'react';

// Component
import Minimal from './minimal';
import Default from './default';

export interface IProps {
  connected: boolean;
}
interface IState {}

export default class Layout extends React.Component<IProps, IState> {
  render() {
    return this.props.connected ? <Default /> : <Minimal />;
  }
}
