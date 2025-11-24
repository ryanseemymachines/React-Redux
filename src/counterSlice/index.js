import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return state + action.payload;
    },
    decrement: (state, action) => {
      return state - action.payload;
    },
    reset: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const {increment,decrement,reset} = counterSlice.actions;

export default counterSlice.reducer;
