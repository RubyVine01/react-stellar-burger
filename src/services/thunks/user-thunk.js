import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/const.js";
import { request } from "../../utils/api.js";

const urRegister = `${baseURL}/auth/register`;
const urlLogin = `${baseURL}/auth/login`;
const urlLogout = `${baseURL}/auth/logout`;
const urlToken = `${baseURL}/auth/token`;

const options = ({ email, password, name, token } = {}) => {
  const bodyData = {
    ...(email && { email }),
    ...(password && { password }),
    ...(name && { name }),
    ...(token && { token }),
  };

  console.log(bodyData);
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
  };
};

export const fetchRegister = createAsyncThunk(
  "register/post",
  async ({ email, password, name }) => {
    return request(urRegister, options({ email, password, name }));
  }
);

export const fetchLogin = createAsyncThunk(
  "login/post",
  async ({ email, password }) => {
    return request(urlLogin, options({ email, password }));
  }
);

export const fetchToken = createAsyncThunk(
  "token/post",
  async ({ refreshToken }) => {
    return request(urlToken, options({ refreshToken }));
  }
);

export const fetchLogout = createAsyncThunk(
  "logout/post",
  async ({ refreshToken }) => {
    return request(urlLogout, options({ refreshToken }));
  }
);
