import { loadingBarReducer, LoadingBar } from 'react-redux-loading-bar';
import { ICustomDispatch, ICustomAction } from '../actions';

// loader reducer
export type ILoaderDispatch<S = unknown, T = unknown> = ICustomDispatch<S, T>;
export type ILoaderAction<S = unknown, T = unknown> = ICustomAction<S, T>;

export { loadingBarReducer, LoadingBar };