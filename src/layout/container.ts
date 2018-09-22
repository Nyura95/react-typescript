import { connect } from 'react-redux';

import { ReduxState } from '../reducers';

import Layout, { IProps } from './component';

const mapStateToProps = (reducers: ReduxState): Partial<IProps> => ({});

const mapDispatchToProps = (dispatch: any): Partial<IProps> => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout as any);
