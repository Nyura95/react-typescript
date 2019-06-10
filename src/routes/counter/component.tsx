import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { Row, Col } from 'reactstrap';

// component
import { Button } from '../../components';
import { IProps } from './';

// style
import * as styles from './styles.scss';

const Counter: IHook<IProps> = ({ counter, counterSet, counterAsyncSet, counterReset }) => {
  return (
    <Row className={styles.container}>
      <Col lg="12" className={styles.container_button}>
        {I18n.t('pages.counter.count', { counter: counter })}
      </Col>
      <Col lg="12" className={styles.container_button}>
        <Button.Standar onClick={() => counterSet(1)} color="primary">
          {I18n.t('pages.counter.increment')}
        </Button.Standar>
        <Button.Standar onClick={() => counterSet(-1)}>{I18n.t('pages.counter.decrement')}</Button.Standar>
        <Button.Standar onClick={() => counterAsyncSet(1)} color="warning">
          {I18n.t('pages.counter.async')}
        </Button.Standar>
      </Col>
      <Col lg="12" className={styles.container_button}>
        <Button.Standar onClick={() => counterReset()}>{I18n.t('pages.counter.reset')}</Button.Standar>
      </Col>
    </Row>
  );
};

Counter.defaultProps = {};

export default Counter;
