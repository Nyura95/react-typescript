import * as React from 'react';

// modules
import { I18n } from 'react-redux-i18n';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { RouteComponentProps } from 'react-router';

// component
import { Button, Container } from '../../components';

import { IReduxState, ICounterState, ICounterDispatch } from '../../reducers';
import { counterSet, counterAsyncSet, counterReset } from '../../actions';

const Counter: IHook<RouteComponentProps> = () => {
  const { counter } = useSelector<IReduxState, ICounterState>(reducer => reducer.counter);
  const dispatch = useDispatch<ICounterDispatch>();

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
            {I18n.t('pages.counter.increment')}
          </Button.Rectangle>
        </Col>
        <Col lg="auto" md="12" className="text-center text-lg-right mt-4">
          <Button.Rectangle data-testid="decrease" onClick={decreaseCounter}>
            {I18n.t('pages.counter.decrement')}
          </Button.Rectangle>
        </Col>
        <Col lg="auto" md="12" className="text-center text-lg-right mt-4">
          <Button.Rectangle data-testid="asyncIncrement" onClick={incrementAsyncCounter} color="warning">
            {I18n.t('pages.counter.async')}
          </Button.Rectangle>
        </Col>
      </Row>
      <Row>
        <Col lg="auto" md="12" className="text-center text-lg-right mt-4">
          <Button.Rectangle data-testid="reset" onClick={resetCounter}>
            {I18n.t('pages.counter.reset')}
          </Button.Rectangle>
        </Col>
      </Row>
    </Container>
  );
};

Counter.defaultProps = {};

export default Counter;
