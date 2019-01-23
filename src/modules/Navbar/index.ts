import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import Component, { IProps, IState } from './Component';
import { RouterPush, disconnectUser, ICounterDispatch } from '../../actions';
import { IRouterType, IUserType, IRouterState, IUserState } from '../../reducers';

const mapStateToProps = (): Partial<IProps> => ({});

const mapDispatchToProps = (
  dispatch: ICounterDispatch<IRouterType | IUserType, IRouterState | IUserState>
): Partial<IProps> => {
  return {
    goPush: (to: string) => dispatch(RouterPush(to)),
    disconnectUser: () => dispatch(disconnectUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);
