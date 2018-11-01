// redux
import { connect } from 'react-redux';

// Component
import Component, { IProps } from './Component';

// Reducers type
import { ReduxState } from '../../reducers';

// Types
import { Dispatch, CounterType, CounterState } from '../../actions/Types';

// Actions
import { RouterGoBack, setCounter, resetCounter, AsyncSetCounter } from '../../actions';

const mapStateToProps = (reducers: ReduxState): Partial<IProps> => ({
  ...reducers.Counter
});

const mapDispatchToProps = (dispatch: Dispatch<CounterType, CounterState>): Partial<IProps> => {
  return {
    setCounter: (counter: number) => dispatch(setCounter(counter)),
    AsyncSetCounter: (counter: number) => dispatch(AsyncSetCounter(counter)),
    resetCounter: () => dispatch(resetCounter()),
    goBack: () => dispatch(RouterGoBack())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);
