// all interface Action
export interface Action<T> {
  type: string;
  payload: T;
}

// Counter constants
export const ADD_COUNTER = 'ADD_COUNTER';
export const SET_COUNTER = 'SET_COUNTER';
