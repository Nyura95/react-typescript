import * as React from 'react';

// Router

// Pages of the app
import Home from '../home';
import Counter from '../counter';
import Translate from '../translate';

// Component
import { Container } from '../../components';
import { Navbar } from '../../modules';
import { Redirect, Route, Switch } from 'react-router';

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
