import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/const.js";
import { request } from "../../utils/api.js";

const urlOrder = `${baseURL}/orders`;

const optionsOrder = (array) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: array }),
  };
};

export const fetchOrder = createAsyncThunk("order/get", async (array) => {
  return request(urlOrder, optionsOrder(array));
});
