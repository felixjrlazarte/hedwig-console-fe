import { createSlice } from "@reduxjs/toolkit";
import { getSenderMasks } from "./blastActions";

// Initial state
const initialState = {
  senderMasks: {},
  isLoading: false,
  error: null
};

// Actual Slice
export const blastSlice = createSlice({
  name: "blast",
  initialState,
  reducers: {},
  extraReducers: (builder) => { builder
    // get sender masks lifecycle
    .addCase(getSenderMasks.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    .addCase(getSenderMasks.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.senderMasks = payload
    })
    .addCase(getSenderMasks.rejected, (state, { payload }) => {
      state.isLoading = false
      state.error = payload
    })
  }
});

export const blastState = (state) => state.blast;

export default blastSlice.reducer;