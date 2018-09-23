// all interface Action
export interface Action<T> {
  type: string;
  payload: T;
}

// Counter constants
export const SET_COUNTER = 'SET_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';
