import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "./userActions";

// Initial state
const initialState = {
  details: {},
  isLoading: false,
  error: null
};

// Actual Slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => { builder
    // get user details lifecycle
    .addCase(getUserInfo.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    .addCase(getUserInfo.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.details = payload
    })
    .addCase(getUserInfo.rejected, (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    })
  }
});

export const userState = (state) => state.user;

export default userSlice.reducer;