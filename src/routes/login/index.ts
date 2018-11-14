// redux
import { connect } from 'react-redux';

// Component
import Component, { IProps } from './component';

// Types
import { Dispatch, UserType, UserState } from '../../actions/types';

// Actions
import { authUser } from '../../actions';

const mapStateToProps = (): Partial<IProps> => ({});

const mapDispatchToProps = (dispatch: Dispatch<UserType, UserState>): Partial<IProps> => {
  return {
    authUser: (username: string, password: string) => dispatch(authUser(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);
