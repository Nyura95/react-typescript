// all interface Action
export interface Action<T> {
  type: string;
  payload: T;
}

// Counter
export const COUNTER = 'COUNTER';
