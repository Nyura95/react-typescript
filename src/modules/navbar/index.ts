import { connect } from 'react-redux';

import Navbar from './Component';
import { RouterPush, userDisconnect, ICounterDispatch, IUserDispatch } from '../../actions';

interface IComponentProps { }

interface IStateProps { }

const mapStateToProps = (): IStateProps => ({});

interface IDispatchProps {
  goPush(to: string): void;
  userDisconnect(): void;
}

const mapDispatchToProps = (dispatch: ICounterDispatch | IUserDispatch): IDispatchProps => {
  return {
    goPush: (to: string): void => dispatch(RouterPush(to)),
    userDisconnect: (): void => dispatch(userDisconnect())
  };
};

export type IProps = IComponentProps & IStateProps & IDispatchProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
