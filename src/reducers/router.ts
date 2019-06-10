
import { RouterState, routerReducer } from 'react-router-redux';
import { ICustomDispatch, ICustomAction } from '../actions';

// router reducer
export type IRouterDispatch<S = RouterState, T = string> = ICustomDispatch<S, T>;
export type IRouterAction<S = RouterState, T = string> = ICustomAction<S, T>;

export { RouterState, routerReducer }