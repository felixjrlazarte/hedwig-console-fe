import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSenderMasks = createAsyncThunk(
  "sendermasks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/sendermasks");
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const sendSMSBlast = createAsyncThunk(
  "blasts",
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/blasts", values, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);