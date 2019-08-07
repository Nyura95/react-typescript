import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

// compoents
import { Button } from '../../components';

// style
import * as styles from './styles.scss';

import { notificationShow } from '../../actions';
import { Container } from '../../components';

const Notification: IHook<RouteComponentProps> = () => {
  return (
    <Container>
      <Row className={styles.container}>
        <Col lg="auto" md={12} className="text-center text-lg-right mt-4">
          <Button.Rectangle
            onClick={() =>
              notificationShow({
                title: I18n.t('pages.notification.title'),
                message: I18n.t('pages.notification.message'),
                type: 'info'
              })
            }
            color="primary"
          >
            {I18n.t('pages.notification.button')}
          </Button.Rectangle>
        </Col>
      </Row>
    </Container>
  );
};

Notification.defaultProps = {};

export default Notification;
