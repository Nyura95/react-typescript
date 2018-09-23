import { connect } from 'react-redux';

import { ReduxState } from '../../reducers';

import Home, { Props } from './component';
import { push } from 'connected-react-router';

const mapStateToProps = (reducers: ReduxState): Partial<Props> => ({});

const mapDispatchToProps = (dispatch: any): Partial<Props> => {
  return {
    push: (to: string) => dispatch(push(to)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home as any);
