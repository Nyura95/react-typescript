import { connect } from 'react-redux';

import Login from './component';
import { userAuth, IUserDispatch } from '../../actions';
import { RouteComponentProps } from 'react-router';

interface IComponentProps extends RouteComponentProps { }

interface IStateProps { }

const mapStateToProps = (): IStateProps => ({});

interface IDispatchProps {
  userAuth(username: string, password: string): void;
}

const mapDispatchToProps = (dispatch: IUserDispatch): IDispatchProps => {
  return {
    userAuth: (username: string, password: string): void => dispatch(userAuth(username, password))
  };
};

export type IProps = IComponentProps & IStateProps & IDispatchProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
