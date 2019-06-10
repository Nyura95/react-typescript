import * as React from 'react';

// modules
import { Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';

// style
import * as styles from './styles.scss';
import { I18n } from 'react-redux-i18n';
import { IReduxState } from '../../reducers';
import { IUserState } from '../../reducers/user';

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
