import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/const";
import { request } from "../../utils/api";

const urlСonfirmNewPassword: Readonly<string> = `${baseURL}/password-reset/reset`;

type TFetchСonfirmNewPassword = {
  password: string;
  token: string;
};

const options = (password: string, token: string) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password, token }),
  };
};

export const fetchСonfirmNewPassword = createAsyncThunk(
  "сonfirmResetCode/post",
  async ({ password, token }: TFetchСonfirmNewPassword) => {
    return request(urlСonfirmNewPassword, options(password, token));
  }
);
