import { ComponentClass } from 'react';
import { connect, Matching } from 'react-redux';

import { Loader, IProps, IState } from './component';
import { ILoaderDispatch, loaderHide, loaderReset, loaderShow } from '../../actions';

const mapStateToProps = (): Partial<IProps> => ({});

const mapDispatchToProps = (dispatch: ILoaderDispatch): Partial<IProps> => {
  return {
    loaderHide: (): void => dispatch(loaderHide()),
    loaderReset: (): void => dispatch(loaderReset()),
    loaderShow: (): void => dispatch(loaderShow())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader as ComponentClass<Matching<Partial<IProps>, IProps>, IState>);