import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/const";
import { request } from "../../utils/api";

const urlOrder = `${baseURL}/orders`;

const options = (array: Array<string>) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("accessToken") as string,
    },
    body: JSON.stringify({ ingredients: array }),
  };
};

export const fetchCreateOrder = createAsyncThunk(
  "order/post",
  async (array: Array<string>) => {
    return request(urlOrder, options(array));
  }
);
