import { configureStore } from '@reduxjs/toolkit';
import configReducer from './config';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    config: configReducer
  },
});
