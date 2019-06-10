import { connect } from 'react-redux';

import Loader from './component';
import { loaderHide, loaderShow, loadScreenHide, loadScreenShow } from '../../actions';
import { RouteComponentProps } from 'react-router';
import { ILoaderDispatch } from '../../reducers/loadingBar';

interface IComponentProps extends RouteComponentProps { }

interface IStateProps { }

const mapStateToProps = (): IStateProps => ({});

interface IDispatchProps {
  loaderShow(): void;
  loaderHide(): void;
  loadScreenHide(): void;
  loadScreenShow(text: string): void;
}

const mapDispatchToProps = (dispatch: ILoaderDispatch): IDispatchProps => {
  return {
    loaderHide: (): void => dispatch(loaderHide()),
    loaderShow: (): void => dispatch(loaderShow()),
    loadScreenHide: (): void => dispatch(loadScreenHide()),
    loadScreenShow: (text: string): void => dispatch(loadScreenShow(text))
  };
};

export type IProps = IComponentProps & IStateProps & IDispatchProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader);
