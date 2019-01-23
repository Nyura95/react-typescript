import * as React from 'react';

import { Switch as RSwitch, Redirect, Route } from 'react-router';

import Home from '../home';
import Counter from '../counter';
import Translate from '../translate';

export interface IProps {}
interface IState {}

export default class Switch extends React.Component<IProps, IState> {
  render() {
    return (
      <div>
        <RSwitch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/counter" component={Counter} />
          <Route exact={true} path="/translate" component={Translate} />
          <Redirect from="*" to="/" />
        </RSwitch>
      </div>
    );
  }
}
