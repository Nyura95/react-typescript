// redux
import { connect } from 'react-redux';

// Component
import Component, { IProps } from './component';

// Reducers type
import { IReduxState } from '../../reducers';

// Actions
import { setCounter, resetCounter, AsyncSetCounter, ICounterDispatch } from '../../actions';

const mapStateToProps = (reducers: IReduxState): Partial<IProps> => ({
  ...reducers.Counter
});

const mapDispatchToProps = (dispatch: ICounterDispatch): Partial<IProps> => {
  return {
    setCounter: (counter: number) => dispatch(setCounter(counter)),
    AsyncSetCounter: (counter: number) => dispatch(AsyncSetCounter(counter)),
    resetCounter: () => dispatch(resetCounter())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);
