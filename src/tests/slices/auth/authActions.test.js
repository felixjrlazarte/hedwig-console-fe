import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../../../slices/auth/authActions";

const store = configureStore({
  reducer: function (state = '', action) {
    switch (action.type) {
      case 'user/login/fulfilled':
      case 'user/logout/fulfilled':
        return action.payload;
      default:
        return state;
    }
  },
});

describe("AuthActions", () => {
  describe("/user/login", () => {
    it("should pass success callback", async () => {
      const values = { email: "123@123.com", password: "password" };

      const postSuccess = jest.spyOn(axios, "post").mockResolvedValueOnce({ data: { token: "123" } });
      await store.dispatch(loginUser(values));

      expect(postSuccess).toBeCalledWith("/user/login", values);
    });
  });

  describe("/user/logout", () => {
    it("should pass success callback", async () => {
      const getSuccess = jest.spyOn(axios, "get").mockResolvedValueOnce({ data: { message: "logout" } });
      await store.dispatch(logoutUser());
  
      expect(getSuccess).toBeCalledWith("/user/logout");
    });
  });
});