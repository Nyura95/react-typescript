import * as React from 'react';

// modules
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { I18n } from 'react-redux-i18n';

// style
import * as styles from './styles.scss';

import { IReduxState, IUserState } from '../../reducers';

const Home: IHook = () => {
  const { username } = useSelector<IReduxState, IUserState>(reducer => reducer.user);
  return (
    <Row className={styles.container}>
      <Col lg="12" className={styles.container_button}>
        {I18n.t('pages.home.hello', { username })}
      </Col>
    </Row>
  );
};

Home.defaultProps = {};

export default Home;
