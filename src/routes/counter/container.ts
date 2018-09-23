import { connect } from 'react-redux';

import { setCounter, resetCounter, AsyncSetCounter } from '../../actions/Counter';
import { ReduxState } from '../../reducers';

import Counter, { Props } from './component';
import { push } from 'connected-react-router';

const mapStateToProps = (reducers: ReduxState): Partial<Props> => ({
  ...reducers.Counter,
});

const mapDispatchToProps = (dispatch: any): Partial<Props> => {
  return {
    setCounter: (counter: number) => dispatch(setCounter(counter)),
    AsyncSetCounter: (counter: number) => dispatch(AsyncSetCounter(counter)),
    resetCounter: () => dispatch(resetCounter()),
    push: (to: string) => dispatch(push(to)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter as any);
