import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";
import { getSenderMasks, sendSMSBlast, getBlastActivityList } from "../../../slices/blast/blastActions";

const store = configureStore({
  reducer: (state = "", action) => {
    switch (action.type) {
      case "sendermasks/fulfilled":
      case "blasts/fulfilled":
      case "blastActivityList/fulfilled":
        return action.payload;
      default:
        return state;
    }
  },
});

describe("BlastActions", () => {
  describe("/sendermasks", () => {
    it("should test success callback", async () => {
      const getSuccess = jest.spyOn(axios, "get").mockResolvedValueOnce({ data: { id: "123" } });
      await store.dispatch(getSenderMasks());

      expect(getSuccess).toBeCalledWith("/sendermasks");
    });

    it("should test failed callback", async () => {
      jest.spyOn(axios, "get").mockRejectedValueOnce({ response: { data: "error" } });
      const response = await store.dispatch(getSenderMasks());

      expect(response.error.message).toBe("Rejected");

      jest.spyOn(axios, "get").mockRejectedValueOnce({ response: {} });
      const response2 = await store.dispatch(getSenderMasks());

      expect(response2.error.message).toBe("Rejected");
    });
  });

  describe("/blasts", () => {
    it("should test success callback", async () => {
      const values = {
        blastName: "test blasy"
      };

      const postSuccess = jest.spyOn(axios, "post").mockResolvedValueOnce({ data: { id: "123" } });
      await store.dispatch(sendSMSBlast(values));

      expect(postSuccess).toBeCalledWith("/blasts", values, { "headers": { "Content-Type": "multipart/form-data" } });
    });

    it("should test failed callback", async () => {
      jest.spyOn(axios, "post").mockRejectedValueOnce({ response: { data: "error" } });
      const response = await store.dispatch(sendSMSBlast());

      expect(response.error.message).toBe("Rejected");

      jest.spyOn(axios, "post").mockRejectedValueOnce({ response: {} });
      const response2 = await store.dispatch(sendSMSBlast());

      expect(response2.error.message).toBe("Rejected");
    });
  });

  describe("/blasts/list", () => {
    it("should test success callback", async () => {
      const params = { page: 1, limit: 10 };
      const getSuccess = jest.spyOn(axios, "get").mockResolvedValueOnce({ data: { id: "123" } });
      await store.dispatch(getBlastActivityList(params));

      expect(getSuccess).toBeCalledWith("/blasts/list", { params: params });
    });

    it("should test failed callback", async () => {
      jest.spyOn(axios, "get").mockRejectedValueOnce({ response: { data: "error" } });
      const response = await store.dispatch(getBlastActivityList());

      expect(response.error.message).toBe("Rejected");

      jest.spyOn(axios, "get").mockRejectedValueOnce({ response: {} });
      const response2 = await store.dispatch(getBlastActivityList());

      expect(response2.error.message).toBe("Rejected");
    });
  });
});