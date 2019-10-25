import * as React from 'react';

// modules
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router';

import { IReduxState, IUserState } from '../../reducers';
import { Container } from '../../components';

const Home: IHook<RouteComponentProps> = () => {
  const { t } = useTranslation();
  const { username } = useSelector<IReduxState, IUserState>(reducer => reducer.user);

  return (
    <Container>
      <Row>
        <Col lg="auto" md={12} data-testid="username" className="text-center text-lg-right mt-4">
          {t('pages.home.hello', { username })}
        </Col>
      </Row>
    </Container>
  );
};

Home.defaultProps = {};

export default Home;
