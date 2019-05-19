import { connect } from 'react-redux';

import Home from './component';
import { IReduxState } from '../../reducers';
import { RouteComponentProps } from 'react-router';
import { IState as IUserState } from '../../reducers/user';

interface IComponentProps extends RouteComponentProps { }

interface IStateProps extends IUserState { }

const mapStateToProps = (reducers: IReduxState): IStateProps => ({
  ...reducers.user
});

interface IDispatchProps { }

const mapDispatchToProps = (): IDispatchProps => {
  return {};
};

export type IProps = IComponentProps & IStateProps & IDispatchProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
