import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/const.ts";
import { request } from "../../utils/api.ts";

const urlResetPassword = `${baseURL}/password-reset`;

const options = (email) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  };
};

export const fetchResetCode = createAsyncThunk(
  "resetPassword/post",
  async (email) => {
    return request(urlResetPassword, options(email));
  }
);
