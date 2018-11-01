import * as React from 'react';

// Router
import { Route, Switch, Redirect } from 'react-router';

// Module
import { Container } from 'reactstrap';

// Pages of the app
import Home from './routes/home/Home';
import Counter from './routes/counter/Counter';
import Translate from './routes/translate/Translate';

// styles
// import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/Global.scss';

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/counter" component={Counter} />
          <Route exact={true} path="/translate" component={Translate} />
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
    );
  }
}
