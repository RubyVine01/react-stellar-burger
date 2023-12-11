import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/const";
import { request } from "../../utils/api";

export const fetchOrderDetails = createAsyncThunk(
  "orderInfo/getDetails",
  async (number: string) => {
    const urlOrderNum = `${baseURL}/orders/${number}`;
    return request(urlOrderNum).then((res) => res.orders[0]);
  }
);
