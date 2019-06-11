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

  const incrementCounter = React.useCallback(() => dispatch(counterSet(1)), [dispatch]);
  const incrementAsyncCounter = React.useCallback(() => dispatch(counterAsyncSet(-1)), [dispatch]);
  const resetCounter = React.useCallback(() => dispatch(counterReset()), [dispatch]);

  return (
    <Row className={styles.container}>
      <Col lg="12" className={styles.container_button}>
        {I18n.t('pages.counter.count', { counter })}
      </Col>
      <Col lg="12" className={styles.container_button}>
        <Button.Standar onClick={incrementCounter} color="primary">
          {I18n.t('pages.counter.increment')}
        </Button.Standar>
        <Button.Standar onClick={incrementCounter}>{I18n.t('pages.counter.decrement')}</Button.Standar>
        <Button.Standar onClick={incrementAsyncCounter} color="warning">
          {I18n.t('pages.counter.async')}
        </Button.Standar>
      </Col>
      <Col lg="12" className={styles.container_button}>
        <Button.Standar onClick={resetCounter}>{I18n.t('pages.counter.reset')}</Button.Standar>
      </Col>
    </Row>
  );
};

Counter.defaultProps = {};

export default Counter;
