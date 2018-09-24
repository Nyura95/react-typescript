// redux
import { connect } from 'react-redux';

// component
import Counter, { Props } from './component';

// type
import { Dispatch } from '../../actions';

import { ReduxState, CounterState } from '../../reducers';

// action
import { setCounter, resetCounter, AsyncSetCounter, RouterGoBack } from '../../actions';

const mapStateToProps = (reducers: ReduxState): Partial<Props> => ({
  ...reducers.Counter,
});

const mapDispatchToProps = (dispatch: Dispatch<CounterState>): Partial<Props> => {
  return {
    setCounter: (counter: number) => dispatch(setCounter(counter)),
    AsyncSetCounter: (counter: number) => dispatch(AsyncSetCounter(counter)),
    resetCounter: () => dispatch(resetCounter()),
    goBack: () => dispatch(RouterGoBack()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter as any);
