import * as React from 'react';

// Router
import { Route, Switch, Redirect } from 'react-router';

// Module
import { Container } from 'reactstrap';

// Pages of the app
import Home from './routes/home';
import Counter from './routes/counter';
import Translate from './routes/translate';

import { Navbar } from './modules';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/counter" component={Counter} />
            <Route exact={true} path="/translate" component={Translate} />
            <Redirect from="*" to="/" />
          </Switch>
        </Container>
      </div>
    );
  }
}
