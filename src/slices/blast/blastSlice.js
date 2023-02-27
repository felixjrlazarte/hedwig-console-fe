import { createSlice } from "@reduxjs/toolkit";
import { getSenderMasks, sendSMSBlast, showSMSBlastPrompt } from "./blastActions";

// Initial state
const initialState = {
  senderMasks: {},
  newBlastDetails: {},
  blastPromptType: null,
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
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getSenderMasks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.senderMasks = payload;
    })
    .addCase(getSenderMasks.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
    // send SMS blast lifecycle
    .addCase(sendSMSBlast.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(sendSMSBlast.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.newBlastDetails = payload;
    })
    .addCase(sendSMSBlast.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
    // show send sms blast success or failed prompt
    .addCase(showSMSBlastPrompt, (state, { payload }) => {
      state.blastPromptType = payload.type;
    });
  }
});

export const blastState = (state) => state.blast;

export default blastSlice.reducer;