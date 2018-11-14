// redux
import { connect } from 'react-redux';

// Component
import Component, { IProps } from './Component';

// Types
import { Dispatch, RouterType, UserType, RouterState, UserState } from '../../actions/types';

// Actions
import { RouterPush, disconnectUser } from '../../actions';

const mapStateToProps = (): Partial<IProps> => ({});

const mapDispatchToProps = (dispatch: Dispatch<RouterType | UserType, RouterState | UserState>): Partial<IProps> => {
  return {
    goPush: (to: string) => dispatch(RouterPush(to)),
    disconnectUser: () => dispatch(disconnectUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);
