import * as React from 'react';

// module
import { Router, Route, Redirect, Switch } from 'react-router';
import { history } from '../../store';

// component
import { Container } from '../../components';

// page
import Login from '../login/index';

// helpers
import { joinClass } from '../../helpers/general';

// style
import * as styles from './styles.scss';

export interface IProps {}

const Minimal: IHook<IProps> = () => (
  <Container className={joinClass(styles.container_minimal, 'd-flex align-content-around flex-wrap')}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </Container>
);

Minimal.defaultProps = {};

export default Minimal;
