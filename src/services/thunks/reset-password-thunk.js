import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/const";
import { request } from "../../utils/api";

const urlСonfirmNewPassword = `${baseURL}/password-reset/reset`

const options = (password, token) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password, token }),
  };
};

export const fetchСonfirmNewPassword = createAsyncThunk(
  "сonfirmResetCode/post",
  async ({password, token}) => {
    return request(urlСonfirmNewPassword, options(password, token));
  }
);
