import { IAction } from '../actions';

export type IType = 'SHOW_LOADSCREEN' | 'HIDE_LOADSCREEN';

export type IState = {
  show: boolean;
  text: string;
};

const initialState: IState = {
  show: false,
  text: ''
};

/**
 * Store for the module loadscreen
 * @param {IState} state
 * @param {IAction<IState, IType>} action
 * @version 1.0.0
 * @returns {IState}
 */
export function loadscreen(state: IState = initialState, action: IAction<IState, IType>): IState {
  switch (action.type) {
    case 'SHOW_LOADSCREEN':
      return {
        text: action.payload.text,
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
