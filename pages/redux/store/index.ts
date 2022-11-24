import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducer/user/userReducer";

export const rootReducer = combineReducers({
  userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
