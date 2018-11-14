import * as React from 'react';

// Router
import { Route, Switch, Redirect } from 'react-router';

// Module
import { Navbar } from '../../modules';

// Component
import { Container } from '../../components';

// Pages of the app
import Home from '../home';
import Counter from '../counter';
import Translate from '../translate';

export interface IProps {}
interface IState {}

export default class Default extends React.Component<IProps, IState> {
  render() {
    return (
      <Container fluid={true} removePadding={true}>
        <Navbar />
        <Container>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/counter" component={Counter} />
            <Route exact={true} path="/translate" component={Translate} />
            <Redirect from="*" to="/" />
          </Switch>
        </Container>
      </Container>
    );
  }
}
