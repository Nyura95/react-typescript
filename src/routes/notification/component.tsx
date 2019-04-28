import * as React from 'react';

import { RouteComponentProps } from 'react-router';

import { Row, Col } from 'reactstrap';
import { Button } from '../../components';

import * as styles from './styles.scss';
import { IOptionReactNotificationComponent } from '../../types';

// interface props
export interface IProps extends RouteComponentProps {
  notificationShow(option: IOptionReactNotificationComponent): void;
}

export interface IState { }

export class Notification extends React.PureComponent<IProps> {
  render(): JSX.Element {
    return (
      <Row className={styles.container}>
        <Col lg="12" className={styles.container_button}>
          <Button onClick={() => this.props.notificationShow({ title: 'Title', message: 'Message', type: 'danger' })} color="primary">
            Notifications
          </Button>
        </Col>
      </Row>
    );
  }
}
