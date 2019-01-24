import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import { Layout, IProps, IState } from './component';
import { IReduxState } from '../../reducers/types';

// be carfull, here you must not subscribe to a store that is too often updated.
const mapStateToProps = (reducers: IReduxState): Partial<IProps> => ({
  connected: reducers.User.token !== ''
});

const mapDispatchToProps = (): Partial<IProps> => {
  // be carfull, dispatch here recharges all Component
  // Do not put reducer that dispatches a lot !
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);