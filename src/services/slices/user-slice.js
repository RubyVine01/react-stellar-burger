import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLogin,
  fetchLogout,
  fetchRegister,
  fetchToken,
} from "../thunks/user-thunk";

const initialState = {
  user: {},
  isAuthChecked: false,
  accessToken: "",
  isLoading: false,
  error: false,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setAuthChecked: (state, action) => {
      state.isAuthChecked = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    // Регистрация
    [fetchRegister.fulfilled]: (state, action) => {
      state.user = action.payload.user;

      state.accessToken = action.payload.accessToken;
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      state.isLoading = false;
      state.error = false;
    },
    [fetchRegister.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchRegister.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action;
    },
    // Авторизация
    [fetchLogin.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      console.log(action.payload.user);
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      state.isLoading = false;
      state.error = false;
    },
    [fetchLogin.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action;
    },

    // Обновление токена
    [fetchToken.fulfilled]: (state, action) => {
      state.accessToken = action.payload.accessToken;
      localStorage.setItem("refreshToken", action.payload.refreshToken);
      state.isLoading = false;
      state.error = false;
    },
    [fetchToken.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchToken.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action;
    },

    // Выход из системы
    [fetchLogout.fulfilled]: (state, action) => {
      state.user = "";
      state.accessToken = "";
      localStorage.removeItem("refreshToken");
      state.isLoading = false;
      state.error = false;
    },
    [fetchLogout.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchLogout.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action;
    },
  },
});

export const { setAuthChecked, setUser } = userProfileSlice.actions;
export default userProfileSlice.reducer;
