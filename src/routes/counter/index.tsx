import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

// component
import { Button } from '../../components';

// style
import * as styles from './styles.scss';

import { IReduxState, ICounterState, ICounterDispatch } from '../../reducers';
import { counterSet, counterAsyncSet, counterReset } from '../../actions';

const Counter: IHook<RouteComponentProps> = () => {
  const { counter } = useSelector<IReduxState, ICounterState>(reducer => reducer.counter);
  const dispatch = useDispatch<ICounterDispatch>();
  return (
    <Row className={styles.container}>
      <Col lg="12" className={styles.container_button}>
        {I18n.t('pages.counter.count', { counter })}
      </Col>
      <Col lg="12" className={styles.container_button}>
        <Button.Standar onClick={() => dispatch(counterSet(1))} color="primary">
          {I18n.t('pages.counter.increment')}
        </Button.Standar>
        <Button.Standar onClick={() => dispatch(counterSet(-1))}>{I18n.t('pages.counter.decrement')}</Button.Standar>
        <Button.Standar onClick={() => dispatch(counterAsyncSet(1))} color="warning">
          {I18n.t('pages.counter.async')}
        </Button.Standar>
      </Col>
      <Col lg="12" className={styles.container_button}>
        <Button.Standar onClick={() => dispatch(counterReset())}>{I18n.t('pages.counter.reset')}</Button.Standar>
      </Col>
    </Row>
  );
};

Counter.defaultProps = {};

export default Counter;