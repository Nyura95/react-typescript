import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import Component, { IProps, IState } from './component';
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
)(Component as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);
