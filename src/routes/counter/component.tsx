import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';

// component
import { Button } from '../../components';
import { IProps } from './';

// style
import * as styles from './styles.scss';

export const Counter: React.FunctionComponent<IProps> = ({ counter, counterSet, counterAsyncSet, counterReset }) => {
  return (
    <Row className={styles.container}>
      <Col lg="12" className={styles.container_button}>
        {I18n.t('pages.counter.count', { counter: counter })}
      </Col>
      <Col lg="12" className={styles.container_button}>
        <Button onClick={() => counterSet(1)} color="primary">
          {I18n.t('pages.counter.increment')}
        </Button>
        <Button onClick={() => counterSet(-1)}>{I18n.t('pages.counter.decrement')}</Button>
        <Button onClick={() => counterAsyncSet(1)} color="warning">
          {I18n.t('pages.counter.async')}
        </Button>
      </Col>
      <Col lg="12" className={styles.container_button}>
        <Button onClick={() => counterReset()}>{I18n.t('pages.counter.reset')}</Button>
      </Col>
    </Row>
  );
};