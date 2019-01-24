import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import { Counter, IProps, IState } from './component';
import { IReduxState } from '../../reducers';
import { counterSet, counterReset, counterAsyncSet, ICounterDispatch } from '../../actions';

const mapStateToProps = (reducers: IReduxState): Partial<IProps> => ({
  ...reducers.Counter
});

const mapDispatchToProps = (dispatch: ICounterDispatch): Partial<IProps> => {
  return {
    counterSet: (counter: number) => dispatch(counterSet(counter)),
    counterAsyncSet: (counter: number) => dispatch(counterAsyncSet(counter)),
    counterReset: () => dispatch(counterReset())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);
