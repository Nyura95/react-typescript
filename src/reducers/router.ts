import { RouterState, routerReducer } from 'react-router-redux';
import { IAction } from '../actions';

// router reducer
export type IRouterAction = IAction<RouterState, string>;

export { RouterState, routerReducer };
