import * as React from 'react';

// Component
import { Container } from '../../components';
import { Navbar } from '../../modules';

// store
import { history } from '../../store';
import { Router, Route, Switch, Redirect } from 'react-router';

// pages
import Home from '../home';

const Default: IHook = () => (
  <Container fluid removePadding>
    <Navbar />
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </Container>
);

Default.defaultProps = {};

export default Default;
