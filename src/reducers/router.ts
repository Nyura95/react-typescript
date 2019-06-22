import { RouterState, routerReducer } from 'react-router-redux';
import { IAction } from '../actions';
import { Dispatch } from 'redux';

// router reducer
export type IRouterAction = IAction<RouterState, string>;
export type IRouterDispatch = Dispatch<IRouterAction>;

export { RouterState, routerReducer };
