import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import { Login, IProps, IState } from './component';
import { userAuth, IUserDispatch } from '../../actions';

const mapStateToProps = (): Partial<IProps> => ({});

const mapDispatchToProps = (dispatch: IUserDispatch): Partial<IProps> => {
  return {
    userAuth: (username: string, password: string): void => dispatch(userAuth(username, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);
