import * as React from 'react';

// module
import { Route, Switch, Redirect } from 'react-router';

// component
import { Container } from '../../components';

// page
import Login from '../login/index';

// helpers
import { joinClass } from '../../helpers/general';

// style
import * as styles from './styles.scss';

export interface IProps { }

export const Minimal: React.FunctionComponent<IProps> = () => {
  return (
    <Container className={joinClass(styles.container_minimal, 'd-flex align-content-around flex-wrap')}>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </Container>
  );
};
