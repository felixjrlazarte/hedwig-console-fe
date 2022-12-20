import { createSlice } from "@reduxjs/toolkit";

export const configData = {
  "DEVELOPMENT": {
    "SERVER_URL": "http://localhost:3001/",
    "HEDWIG_TOKEN": "HEDWIG_CONSOLE_TOKEN"
  },
  "TEST": {
    "SERVER_URL": "http://localhost:3002/",
    "HEDWIG_TOKEN": "HEDWIG_CONSOLE_TOKEN"
  },
  "STAGING": {
    "SERVER_URL": "http://localhost:3003/",
    "HEDWIG_TOKEN": "HEDWIG_CONSOLE_TOKEN"
  },
  "PRODUCTION": {
    "SERVER_URL": "http://localhost:3004/",
    "HEDWIG_TOKEN": "HEDWIG_CONSOLE_TOKEN"
  }
}

export const configSlice = createSlice({
  name: "config",
  initialState: configData[process.env.REACT_APP_NODE_ENV],
  reducers: {},
});

export const configState = (state) => state.config;

export default configSlice.reducer;