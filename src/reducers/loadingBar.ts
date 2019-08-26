import { loadingBarReducer, LoadingBar } from 'react-redux-loading-bar';
import { IAction } from '../actions';
import { Dispatch } from 'redux';

// loader reducer
export type LoaderAction = IAction<unknown, unknown>;
export type LoaderDispatch = Dispatch<LoaderAction>;

export { loadingBarReducer, LoadingBar };
