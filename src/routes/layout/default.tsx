import * as React from 'react';

// module
import Helmet from 'react-helmet';
import { I18n } from 'react-redux-i18n';

// Component
import { Container } from '../../components';
import { Navbar } from '../../modules';

// store
import { history } from '../../store';
import { Router, Route, Redirect } from 'react-router';

// pages
import Home from '../home';
import Counter from '../counter';
import Translate from '../translate';
import Notification from '../notification';
import Loader from '../loader';
import Animate from '../animate';
import Component from '../component';

export interface IProps {}

const Default: IHook<IProps> = () => {
  return (
    <Container fluid={true} removePadding={true}>
      <Helmet>
        <title>{I18n.t('helmet.' + history.location.pathname)}</title>
      </Helmet>
      <Navbar />
      <Container>
        <Router history={history}>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/counter" component={Counter} />
          <Route exact={true} path="/translate" component={Translate} />
          <Route exact={true} path="/notification" component={Notification} />
          <Route exact={true} path="/loader" component={Loader} />
          <Route exact={true} path="/animate" component={Animate} />
          <Route exact={true} path="/component" component={Component} />
          <Redirect from="*" to="/" />
        </Router>
      </Container>
    </Container>
  );
};

Default.defaultProps = {};

export default Default;
