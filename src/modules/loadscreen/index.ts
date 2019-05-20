import { connect } from 'react-redux';

import LoadScreen from './component';
import { IReduxState } from '../../reducers';

interface IComponentProps {
  dot: boolean;
  timeout: number;
}

interface IStateProps {
  show: boolean;
  text: string;
}

const mapStateToProps = (reducers: IReduxState): IStateProps => ({
  ...reducers.loadscreen
});

interface IDispatchProps {}

const mapDispatchToProps = (): IDispatchProps => {
  return {};
};

export type IProps = IComponentProps & IStateProps & IDispatchProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadScreen);
