import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    setCount: (state, action) => action.payload,
  },
});

export const increment = counterSlice.actions.increment;
export const decrement = counterSlice.actions.decrement;
export const setCount = counterSlice.actions.setCount;

export default counterSlice.reducer;
