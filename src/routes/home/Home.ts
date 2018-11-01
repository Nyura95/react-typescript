// redux
import { connect } from 'react-redux';

// Reducer type
import { ReduxState } from '../../reducers';

// Component
import Component, { IProps } from './Component';

// Contants
import { Dispatch, RouterType, RouterState } from '../../actions/Types';

// Action
import { RouterPush } from '../../actions';

const mapStateToProps = (reducers: ReduxState): Partial<IProps> => ({});

const mapDispatchToProps = (dispatch: Dispatch<RouterType, RouterState>): Partial<IProps> => {
  return {
    push: (to: string) => dispatch(RouterPush(to))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);
