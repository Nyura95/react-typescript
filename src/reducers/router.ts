import { connectRouter, RouterState } from 'connected-react-router';
import { IAction } from '../actions';
import { Dispatch } from 'redux';

// router reducer
export type RouterAction = IAction<RouterState, string>;
export type RouterDispatch = Dispatch<RouterAction>;

export { RouterState, connectRouter };
