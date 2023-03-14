import { combineReducers, configureStore } from "@reduxjs/toolkit";
import configReducer from "./config";
// Reducers
import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";
import blastReducer from "./blast/blastSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  blast: blastReducer,
  config: configReducer,
  user: userReducer
});

export const store = preloadedState => configureStore({
  reducer: rootReducer,
  preloadedState
});
