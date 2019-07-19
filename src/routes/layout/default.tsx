import * as React from 'react';

// Component
import { Container } from '../../components';
import { Navbar } from '../../modules';

// store
import { history } from '../../store';
import { Router, Route, Switch } from 'react-router';

// pages
import Home from '../home';
import Counter from '../counter';
import Translate from '../translate';
import Notification from '../notification';
import Loader from '../loader';
import Component from '../component';

const Default: IHook = () => {
  return (
    <Container fluid removePadding>
      <Navbar />
      <Container>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/translate" component={Translate} />
            <Route exact path="/notification" component={Notification} />
            <Route exact path="/loader" component={Loader} />
            <Route exact path="/component" component={Component} />
          </Switch>
        </Router>
      </Container>
    </Container>
  );
};

Default.defaultProps = {};

export default Default;
