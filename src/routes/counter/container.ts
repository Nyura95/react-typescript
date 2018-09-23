// redux
import { connect } from 'react-redux';

// component
import Counter, { Props } from './component';

// reducer type
import { ReduxState } from '../../reducers';

// action
import { setCounter, resetCounter, AsyncSetCounter } from '../../actions/Counter';
import { goBack } from 'connected-react-router';

const mapStateToProps = (reducers: ReduxState): Partial<Props> => ({
  ...reducers.Counter,
});

const mapDispatchToProps = (dispatch: any): Partial<Props> => {
  return {
    setCounter: (counter: number) => dispatch(setCounter(counter)),
    AsyncSetCounter: (counter: number) => dispatch(AsyncSetCounter(counter)),
    resetCounter: () => dispatch(resetCounter()),
    goBack: () => dispatch(goBack()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter as any);
