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

const Notification: IHook<RouteComponentProps> = () => {
  return (
    <Row className={styles.container}>
      <Col lg="12" className={styles.container_button}>
        <Button.Standar
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
        </Button.Standar>
      </Col>
    </Row>
  );
};

Notification.defaultProps = {};

export default Notification;
