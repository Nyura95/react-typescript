import * as React from 'react';

// Pages of the app
import Home from '../home';
import Counter from '../counter';
import Translate from '../translate';

import { Container } from '../../components';

// Router
import { Switch as RSwitch, Redirect, Route } from 'react-router';

export interface IProps {}
interface IState {}

export default class Switch extends React.Component<IProps, IState> {
  render() {
    console.log('switch');
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
