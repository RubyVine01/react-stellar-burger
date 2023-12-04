import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/const";
import { request } from "../../utils/api";

const urlOrder = `${baseURL}/orders`;

const options = (array) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: array }),
  };
};

export const fetchOrder = createAsyncThunk("order/post", async (array) => {
  return request(urlOrder, options(array));
});
