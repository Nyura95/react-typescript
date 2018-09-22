export interface IAction<T> {
  type: string;
  payload: T;
}

export const COUNTER = 'COUNTER';
