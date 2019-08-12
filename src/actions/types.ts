// my interface Action
export interface IAction<S, T, SAGA = {}> {
  type: T;
  payload: Partial<S>;
  saga?: SAGA;
}
