import * as React from 'react';

import { Route, Switch, Redirect } from 'react-router';

import { Container } from '../../components';

import Login from '../login/index';

export interface IProps {}
interface IState {}

export default class Minimal extends React.Component<IProps, IState> {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
    );
  }
}
