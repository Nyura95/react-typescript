import { loadingBarReducer, LoadingBar } from 'react-redux-loading-bar';
import { IAction } from '../actions';
import { Dispatch } from 'redux';

// loader reducer
export type ILoaderAction = IAction<unknown, unknown>;
export type ILoaderDispatch = Dispatch<ILoaderAction>;

export { loadingBarReducer, LoadingBar };
