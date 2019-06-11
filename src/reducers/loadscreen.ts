import { IAction, ICustomDispatch, ICustomAction } from '../actions';

export type ILoadScreenType = 'SHOW_LOADSCREEN' | 'HIDE_LOADSCREEN';

export type ILoadScreenState = {
  show: boolean;
  text: string;
};

export type ILoadScreenDispatch<S = ILoadScreenState, T = ILoadScreenType> = ICustomDispatch<S, T>;
export type ILoadScreenAction<S = ILoadScreenState, T = ILoadScreenType> = ICustomAction<S, T>;

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
export function loadscreen(state = initialState, action: IAction<ILoadScreenState, ILoadScreenType>): ILoadScreenState {
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
