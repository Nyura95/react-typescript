import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import Component, { IProps, IState } from './component';
import { IReduxState } from '../../reducers';
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
)(Component as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);
