import * as React from 'react';

// Router
import { Route, Switch, Redirect } from 'react-router';

// Module
import { Container } from '../../components';

// Pages of the app
import Home from '../home';
import Counter from '../counter';
import Translate from '../translate';
import Login from '../login';

// Module
import { Navbar } from '../../modules';

// style
import * as styles from './styles.scss';

const connected = true;

export interface IProps {}
interface IState {}

export default class Layout extends React.Component<IProps, IState> {
  connected() {
    return (
      <Container fluid={true} removePadding={true}>
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/counter" component={Counter} />
          <Route exact={true} path="/translate" component={Translate} />
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
    );
  }

  anonyme() {
    return (
      <Container>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
    );
  }

  render() {
    console.log('state');
    return connected ? this.connected() : this.anonyme();
  }
}
