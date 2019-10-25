import * as React from 'react';

// modules
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

// compoents
import { Button } from '../../components';

import { notificationShow } from '../../actions';
import { Container } from '../../components';

const Notification: IHook<RouteComponentProps> = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row className="mt-4">
        <Col lg="auto" md={12} className="text-center text-lg-right">
          <Button.Rectangle
            onClick={() =>
              notificationShow({
                title: t('pages.notification.title'),
                message: t('pages.notification.message'),
                type: 'info'
              })
            }
            color="primary"
          >
            {t('pages.notification.button')}
          </Button.Rectangle>
        </Col>
      </Row>
    </Container>
  );
};

Notification.defaultProps = {};

export default Notification;
