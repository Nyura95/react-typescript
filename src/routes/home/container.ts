import { connect } from 'react-redux';
import { Dispatch, Action } from 'redux';

import { increment } from '../../actions/Counter';
import { ReduxState } from '../../reducers';

import { Counter, IProps } from './component';
import { push } from 'connected-react-router';

const mapStateToProps = (reducers: ReduxState): Partial<IProps> => ({
  ...reducers.Counter,
});

const mapDispatchToProps = (dispatch: any): Partial<IProps> => {
  return {
    increment: () => dispatch(increment()),
    push: () => dispatch(push('/home')),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter as any);
