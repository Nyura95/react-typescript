// redux
import { connect } from 'react-redux';

// Reducer type
import { ReduxState } from '../../reducers';

// Component
import Component, { Props } from './Component';

// Contants
import { Dispatch, RouterType, RouterState } from '../../actions/Constants';

// Action
import { RouterPush } from '../../actions';

const mapStateToProps = (reducers: ReduxState): Partial<Props> => ({});

const mapDispatchToProps = (dispatch: Dispatch<RouterType, RouterState>): Partial<Props> => {
  return {
    push: (to: string) => dispatch(RouterPush(to))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);
