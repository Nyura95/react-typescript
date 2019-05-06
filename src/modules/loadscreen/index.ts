import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import { Navbar, IProps, IState } from './component';
import { ICounterDispatch, IUserDispatch } from '../../actions';
import { IReduxState } from '../../reducers';

const mapStateToProps = (reducers: IReduxState): Partial<IProps> => ({
  ...reducers.loadscreen
});

const mapDispatchToProps = (
  dispatch: ICounterDispatch | IUserDispatch
): Partial<IProps> => {
  return {
    showLoadScreen: (text: string): void => { },
    hideLoadScreen: (): void => { }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);
