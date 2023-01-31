import { configureStore } from '@reduxjs/toolkit';
import configReducer from './config';
// Reducers
import authReducer from './auth/authSlice';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    config: configReducer,
    user: userReducer
  },
});
