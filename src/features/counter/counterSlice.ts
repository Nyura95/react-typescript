import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface IState {
  counter: number;
}

const initialState: IState = {
  counter: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    resetTo(state, payload: PayloadAction<number>) {
      state.counter = payload.payload;
    }
  }
});

export const { increment, decrement, resetTo } = counterSlice.actions;

export const name = counterSlice.name;

export const selectCounter = (state: RootState) => state.counter;

export default counterSlice.reducer;
