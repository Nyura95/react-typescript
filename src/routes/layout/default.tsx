import * as React from 'react';

import { Redirect, Route, Switch } from 'react-router';

// Component
import { Container } from '../../components';
import { Navbar } from '../../modules';

import Home from '../home';
import Counter from '../counter';
import Translate from '../translate';

export interface IProps { }
interface IState { }

export class Default extends React.Component<IProps, IState> {
  render(): JSX.Element {
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
