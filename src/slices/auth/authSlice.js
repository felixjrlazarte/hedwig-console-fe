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
  extraReducers: (builder) => {
    // user login lifecycle
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true
      state.error = null
    }),
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true
      state.isLoading = false
      state.userInfo = payload
    }),
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    }),
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true
      state.error = null
    }),
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLoggedIn = false
      state.isLoading = false
      state.userInfo = {}
    }),
    builder.addCase(logoutUser.rejected, (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    })
  }
});

export const authState = (state) => state.auth;

export default authSlice.reducer;