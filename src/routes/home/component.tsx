import * as React from 'react';

// modules
import { Row, Col } from 'reactstrap';

// component
import { IProps } from './';

// style
import * as styles from './styles.scss';
import { I18n } from 'react-redux-i18n';

const Home: IHook<IProps> = ({ username }) => {
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
