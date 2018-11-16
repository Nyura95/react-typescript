import * as React from 'react';

// Router
import { Route, Switch, Redirect } from 'react-router';

// Module
import { Container } from '../../components';

// Pages of the app
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
