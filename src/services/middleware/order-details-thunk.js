import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlOrder } from "../../utils/const.js";

export const fetchOrder = createAsyncThunk("order/get", async (options) => {
  try {
    const res = await fetch(urlOrder, options);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log({ err });
  }
});
