import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { configData } from "../config";

const CONFIG = configData[process.env.REACT_APP_NODE_ENV];

export const loginUser = createAsyncThunk(
  'user/login',
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/user/login', values);
      sessionStorage.setItem(CONFIG.HEDWIG_TOKEN, data.token);
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

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      sessionStorage.removeItem(CONFIG.HEDWIG_TOKEN);
      return {};
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);