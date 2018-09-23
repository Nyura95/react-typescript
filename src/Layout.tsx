import * as React from 'react';

// router
import { Route, Switch, Redirect } from 'react-router';

// module of design
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Pages of the app
import Home from './routes/home/container';
import Counter from './routes/counter/container';

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counter" component={Counter} />
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
    );
  }
}
