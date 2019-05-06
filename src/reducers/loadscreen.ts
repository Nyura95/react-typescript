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
 * Store the user info
 * @param state IState
 * @param action IAction<IState, IType>
 * @version 1.0.0
 * @returns {IState}
 */
export function loadscreen(state: IState = initialState, action: IAction<IState, IType>): IState {
  switch (action.type) {
    case 'SHOW_LOADSCREEN':
      return {
        show: true,
        text: action.payload.text
      }
    case 'HIDE_LOADSCREEN':
      return initialState;
    default:
      return state;
  }
}
