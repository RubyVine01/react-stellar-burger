import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/const.js";
import { request } from "../../utils/api.js";
import { setAuthChecked, setUser } from "../slices/user-slice.js";

// register/post

const urRegister = `${baseURL}/auth/register`;

export const fetchRegister = createAsyncThunk(
  "register/post",
  async ({ email, password, name }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await request(urRegister, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
        }),
      });
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      return fulfillWithValue(data.user);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// login/post

const urlLogin = `${baseURL}/auth/login`;

export const fetchLogin = createAsyncThunk(
  "login/post",
  async ({ email, password }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const data = await request(urlLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      return fulfillWithValue(data.user);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// logout/post

const urlLogout = `${baseURL}/auth/logout`;

export const fetchLogout = createAsyncThunk(
  "logout/post",
  async (_, { rejectWithValue }) => {
    try {
      await request(urlLogout, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: localStorage.getItem("refreshToken"),
        }),
      });
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// updateUser/patch

export const fetchUpdateUser = createAsyncThunk(
  "updateUser/patch",
  async ({ name, email }) => {
    const res = await fetchWithRefresh(urlUser, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
    return res.user;
  }
);

// token/post updateUser

const urlToken = `${baseURL}/auth/token`;

export const fetchRefreshToken = () => {
  request(urlToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
};

const fetchWithRefresh = async (url, options) => {
  try {
    return await request(url, options);
  } catch (err) {
    if (err.message === "jwt expired") {
      const refreshData = await fetchRefreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("accessToken", refreshData.accessToken);
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      options.headers.authorization = refreshData.accessToken;
      return await request(url, options);
    } else {
      return Promise.reject(err);
    }
  }
};

const urlUser = `${baseURL}/auth/user`;

export const fetchGetUser = () => {
  return (dispatch) => {
    return fetchWithRefresh(urlUser, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((res) => {
      if (res.success) {
        dispatch(setUser(res.user));
      } else {
        return Promise.reject("Ошибка данных с сервера");
      }
    });
  };
};

export const checkUserAuth = () => {
  return (dispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(fetchGetUser())
        .catch((error) => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch(setUser(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
      dispatch(setUser(null));
    }
  };
};
