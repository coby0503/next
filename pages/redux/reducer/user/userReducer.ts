import { createAction, createReducer } from "@reduxjs/toolkit";

interface User {
  name: string | null;
  age: number | null;
  gender: string | null;
}

const initialState = () => {
  return {
    name: "",
    age: null,
    gender: null,
  };
};

const increment = createAction<User>("counter/user");
const decrement = createAction<number>("counter/age");
const incrementByAmount = createAction<string>("counter/gender");

export const userReducer = createReducer<User>(initialState(), (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state = action.payload;
    })
    .addCase(decrement, (state, action) => {
      state.age = action.payload;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.gender += action.payload;
    });
});
