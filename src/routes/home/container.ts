import { connect } from 'react-redux';

import { increment } from '../../actions/Counter';
import { ReduxState } from '../../reducers';

import Counter, { Props } from './component';
import { push } from 'connected-react-router';

const mapStateToProps = (reducers: ReduxState): Partial<Props> => ({
  ...reducers.Counter,
});

const mapDispatchToProps = (dispatch: any): Partial<Props> => {
  return {
    increment: () => dispatch(increment()),
    push: () => dispatch(push('/home')),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter as any);
