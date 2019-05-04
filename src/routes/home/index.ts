import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import { Home, IProps, IState } from './component';
import { IReduxState } from '../../reducers';

const mapStateToProps = (reducers: IReduxState): Partial<IProps> => ({
  ...reducers.user
});

const mapDispatchToProps = (): Partial<IProps> => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);
