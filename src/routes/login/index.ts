// redux
import { connect } from 'react-redux';

// Component
import Component, { IProps } from './component';

// Actions
import { authUser, IUserDispatch } from '../../actions';

const mapStateToProps = (): Partial<IProps> => ({});

const mapDispatchToProps = (dispatch: IUserDispatch): Partial<IProps> => {
  return {
    authUser: (username: string, password: string) => dispatch(authUser(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);
