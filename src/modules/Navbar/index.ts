// redux
import { connect } from 'react-redux';

// Component
import Component, { IProps } from './Component';

// Types
import { Dispatch, RouterType, RouterState } from '../../actions/Types';

// Actions
import { RouterPush } from '../../actions';

const mapStateToProps = (): Partial<IProps> => ({});

const mapDispatchToProps = (dispatch: Dispatch<RouterType, RouterState>): Partial<IProps> => {
  return {
    goPush: (to: string) => dispatch(RouterPush(to))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component as any);
