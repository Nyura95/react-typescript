import { loadingBarReducer, LoadingBar } from 'react-redux-loading-bar';
import { IAction } from '../actions';

// loader reducer
export type ILoaderAction = IAction<unknown, unknown>;

export { loadingBarReducer, LoadingBar };
