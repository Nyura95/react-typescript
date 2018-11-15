import * as React from 'react';

// Router
import { Route, Switch, Redirect } from 'react-router';

// Pages of the app
import Home from '../home';
import Counter from '../counter';
import Translate from '../translate';

// Component
import { Container } from '../../components';
import { Navbar } from '../../modules';

export interface IProps {}
interface IState {}

export default class Default extends React.Component<IProps, IState> {
  render() {
    console.log('ty');
    return (
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/counter" component={Counter} />
        <Route exact={true} path="/translate" component={Translate} />
        <Redirect from="*" to="/" />
      </Switch>
    );
  }
}
