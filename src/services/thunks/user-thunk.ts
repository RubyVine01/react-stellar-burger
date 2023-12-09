import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/const";
import { request } from "../../utils/api";
import { setAuthChecked, setUser } from "../slices/user-slice";
import { AppDispatch } from "../store";
import {
  TFetchLogin,
  TFetchRefreshToken,
  TFetchRegister,
  TFetchUpdateUser,
  TRequestOptions,
} from "../../utils/types";

// register/post

const urRegister: Readonly<string> = `${baseURL}/auth/register`;

export const fetchRegister = createAsyncThunk(
  "register/post",
  async ({ email, password, name }: TFetchRegister) => {
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
    return data.user;
  }
);

// login/post

const urlLogin: Readonly<string> = `${baseURL}/auth/login`;

export const fetchLogin = createAsyncThunk(
  "login/post",
  async ({ email, password }: TFetchLogin) => {
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

    return data.user;
  }
);

// logout/post

const urlLogout: Readonly<string> = `${baseURL}/auth/logout`;

export const fetchLogout = createAsyncThunk("logout/post", async () => {
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
});

// updateUser/patch

export const fetchUpdateUser = createAsyncThunk(
  "updateUser/patch",
  async ({ name, email }: TFetchUpdateUser) => {
    const res = await fetchWithRefresh(urlUser, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: localStorage.getItem("accessToken") as string,
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

const urlToken: Readonly<string> = `${baseURL}/auth/token`;

export const fetchRefreshToken = async (): Promise<TFetchRefreshToken> => {
  return await request(urlToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  });
};

const fetchWithRefresh = async (url: string, options: TRequestOptions) => {
  try {
    return await request(url, options);
  } catch (err: any) {
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
  return (dispatch: AppDispatch) => {
    return fetchWithRefresh(urlUser, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken") as string,
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
  return (dispatch: AppDispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(fetchGetUser())
        .catch(() => {
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
