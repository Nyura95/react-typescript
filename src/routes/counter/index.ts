import { connect } from 'react-redux';

import Counter from './component';
import { IReduxState } from '../../reducers';
import {
  counterSet,
  counterReset,
  counterAsyncSet,
  ICounterDispatch
} from '../../actions';
import { RouteComponentProps } from 'react-router';

interface IComponentProps extends RouteComponentProps {
  dot: boolean;
}

interface IStateProps {
  counter: number;
}

const mapStateToProps = (reducers: IReduxState): IStateProps => ({
  ...reducers.counter
});

interface IDispatchProps {
  counterSet(counter: number): void;
  counterAsyncSet(counter: number): void;
  counterReset(): void;
}

const mapDispatchToProps = (dispatch: ICounterDispatch): IDispatchProps => {
  return {
    counterSet: (counter: number): void => dispatch(counterSet(counter)),
    counterAsyncSet: (counter: number): void => dispatch(counterAsyncSet(counter)),
    counterReset: (): void => dispatch(counterReset())
  };
};

export type IProps = IComponentProps & IStateProps & IDispatchProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
