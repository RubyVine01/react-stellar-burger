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

  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
  };
};

//        localStorage.setItem("refreshToken", action.payload.refreshToken);
//         localStorage.removeItem("refreshToken");

export const fetchRegister = createAsyncThunk(
  "register/post",
  async ({ email, password, name }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await request(
        urRegister,
        options({ email, password, name })
      );
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      return fulfillWithValue(data.user);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "login/post",
  async ({ email, password }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await request(urlLogin, options({ email, password }));
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      return fulfillWithValue(data.user);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


// export const fetchToken = createAsyncThunk(
//   "token/post",
//   async ({ refreshToken }, { fulfillWithValue, rejectWithValue }) => {
//     try {
//       const data = await request(urlToken, options({ refreshToken }));
//       localStorage.setItem("accessToken", data.accessToken);
//       localStorage.setItem("refreshToken", data.refreshToken);
//       return fulfillWithValue(data.user);
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );


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
