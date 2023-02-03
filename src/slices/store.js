import { configureStore } from '@reduxjs/toolkit';
import configReducer from './config';
// Reducers
import authReducer from './auth/authSlice';
import userReducer from './user/userSlice';
import blastReducer from './blast/blastSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blast: blastReducer,
    config: configReducer,
    user: userReducer
  },
});
