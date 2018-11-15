// redux
import { connect } from 'react-redux';

// Component
import Component, { IProps } from './component';

// Reducers type
import { IReduxState } from '../../reducers';

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
)(Component as any);
