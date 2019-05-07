import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';

// compoents
import { Button } from '../../components';

// type
import { IProps } from './';

// style
import * as styles from './styles.scss';

export interface IState {}

export class Notification extends React.PureComponent<IProps> {
  render(): JSX.Element {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          <Button
            onClick={() =>
              this.props.notificationShow({
                title: I18n.t('pages.notification.title'),
                message: I18n.t('pages.notification.message'),
                type: 'info'
              })
            }
            color="primary"
          >
            {I18n.t('pages.notification.button')}
          </Button>
        </Col>
      </Row>
    );
  }
}
