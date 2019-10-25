import * as React from 'react';

// modules
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

// component
import { Button, Container } from '../../components';

import { IReduxState, ICounterState, CounterDispatch } from '../../reducers';
import { counterSet, counterAsyncSet, counterReset } from '../../actions';

const Counter: IHook<RouteComponentProps> = () => {
  const { counter } = useSelector<IReduxState, ICounterState>(reducer => reducer.counter);
  const { t } = useTranslation();
  const dispatch = useDispatch<CounterDispatch>();

  const incrementCounter = React.useCallback(() => dispatch(counterSet(1)), []);
  const decreaseCounter = React.useCallback(() => dispatch(counterSet(-1)), []);
  const incrementAsyncCounter = React.useCallback(() => dispatch(counterAsyncSet(1)), []);
  const resetCounter = React.useCallback(() => dispatch(counterReset()), []);

  return (
    <Container>
      <Row>
        <Col data-testid="counter" lg="auto" md="12" className="text-center text-lg-right mt-4">
          {counter}
        </Col>
      </Row>
      <Row>
        <Col lg="auto" md="12" className="text-center text-lg-right mt-4">
          <Button.Rectangle data-testid="increment" onClick={incrementCounter} color="primary">
            {t('pages.counter.increment')}
          </Button.Rectangle>
        </Col>
        <Col lg="auto" md="12" className="text-center text-lg-right mt-4">
          <Button.Rectangle data-testid="decrease" onClick={decreaseCounter}>
            {t('pages.counter.decrement')}
          </Button.Rectangle>
        </Col>
        <Col lg="auto" md="12" className="text-center text-lg-right mt-4">
          <Button.Rectangle data-testid="asyncIncrement" onClick={incrementAsyncCounter} color="warning">
            {t('pages.counter.async')}
          </Button.Rectangle>
        </Col>
      </Row>
      <Row>
        <Col lg="auto" md="12" className="text-center text-lg-right mt-4">
          <Button.Rectangle data-testid="reset" onClick={resetCounter}>
            {t('pages.counter.reset')}
          </Button.Rectangle>
        </Col>
      </Row>
    </Container>
  );
};

Counter.defaultProps = {};

export default Counter;
