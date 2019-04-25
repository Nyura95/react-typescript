import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import { Navbar, IProps, IState } from './Component';
import { RouterPush, userDisconnect, ICounterDispatch, IUserDispatch } from '../../actions';

const mapStateToProps = (): Partial<IProps> => ({});

const mapDispatchToProps = (
  dispatch: ICounterDispatch | IUserDispatch
): Partial<IProps> => {
  return {
    goPush: (to: string): void => dispatch(RouterPush(to)),
    userDisconnect: (): void => dispatch(userDisconnect())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);
