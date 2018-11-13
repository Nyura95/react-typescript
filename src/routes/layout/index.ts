// redux
import { connect } from 'react-redux';

// Component
import Component, { IProps } from './component';

// Reducers type
import { IReduxState } from '../../reducers';

// Types
import { Dispatch, CounterType, CounterState } from '../../actions/types';

const mapStateToProps = (reducers: IReduxState): Partial<IProps> => ({});

const mapDispatchToProps = (dispatch: Dispatch<CounterType, CounterState>): Partial<IProps> => {
  // be carfull, dispatch here recharges all Component
  // Do not put reducer that dispatches a lot !
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);
