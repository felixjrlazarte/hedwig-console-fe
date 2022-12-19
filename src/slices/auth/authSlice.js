import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "./authActions";

// Initial state
const initialState = {
  isLoggedIn: false,
  userInfo: {},
  isLoading: false,
  error: null
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // user login lifecycle
    [loginUser.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoggedIn = true
      state.isLoading = false
      state.userInfo = payload
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    },
    
    // user logout lifecycle
    [logoutUser.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [logoutUser.fulfilled]: (state) => {
      state.isLoggedIn = false
      state.isLoading = false
      state.userInfo = {}
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    }
  },
});

export const authState = (state) => state.auth;

export default authSlice.reducer;