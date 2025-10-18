import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AccentState } from '../types';

const initialState: AccentState = {
  color: 'red',
};

const accentSlice = createSlice({
  name: 'accent',
  initialState,
  reducers: {
    setAccent: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});

export const { setAccent } = accentSlice.actions;
export default accentSlice.reducer;