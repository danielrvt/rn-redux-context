import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const increment = counterSlice.actions.increment;
export const decrement = counterSlice.actions.decrement;

export default counterSlice.reducer;
