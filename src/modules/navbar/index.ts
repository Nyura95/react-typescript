import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import { Navbar, IProps, IState } from './Component';
import { RouterPush, userDisconnect, ICounterDispatch } from '../../actions';
import { IRouterType, IUserType, IRouterState, IUserState } from '../../reducers';

const mapStateToProps = (): Partial<IProps> => ({});

const mapDispatchToProps = (
  dispatch: ICounterDispatch<IRouterType | IUserType, IRouterState | IUserState>
): Partial<IProps> => {
  return {
    goPush: (to: string) => dispatch(RouterPush(to)),
    userDisconnect: () => dispatch(userDisconnect())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);
