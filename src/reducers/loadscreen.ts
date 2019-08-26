import { IAction } from '../actions';
import { Dispatch } from 'redux';

export type LoadScreenType = 'SHOW_LOADSCREEN' | 'HIDE_LOADSCREEN';

export interface ILoadScreenState {
  show: boolean;
  text: string;
}
export type LoadScreenAction = IAction<ILoadScreenState, LoadScreenType>;
export type LoadScreenDispatch = Dispatch<LoadScreenAction>;

const initialState: ILoadScreenState = {
  show: false,
  text: ''
};

/**
 * Store for the module loadscreen
 * @param {ILoadScreenState} state
 * @param {IAction<ILoadScreenState, IType>} action
 * @version 1.0.0
 * @returns {ILoadScreenState}
 */
export function loadscreen(state = initialState, action: IAction<ILoadScreenState, LoadScreenType>): ILoadScreenState {
  switch (action.type) {
    case 'SHOW_LOADSCREEN':
      return {
        text: action.payload.text || state.text,
        show: true
      };
    case 'HIDE_LOADSCREEN':
      return {
        ...state,
        show: false
      };
    default:
      return state;
  }
}
