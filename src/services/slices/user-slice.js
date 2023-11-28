import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLogin,
  fetchLogout,
  fetchRegister,
  fetchUpdateUser,
} from "../thunks/user-thunk";

const initialState = {
  user: null,
  isAuthChecked: false,
  isLoading: false,
  error: false,
  errorMessage: "",
  // Register
  isLoadingRegister: false,
  errorRegister: false,
  errorMessageRegister: "",
  // Login
  isLoadingLogin: false,
  errorLogin: false,
  errorMessageLogin: "",
  // UpdateUser
  isLoadingUpdateUser: false,
  errorUpdateUser: false,
  errorMessageUpdateUser: "",
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
    clearErrorLogin: (state) => {
      state.errorLogin = false;
      state.errorMessageLogin = "";
    },
    clearErrorRegister: (state) => {
      state.errorRegister = false;
      state.errorMessageRegister = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // регистрация
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoadingRegister = false;
        state.errorRegister = false;
      })
      .addCase(fetchRegister.pending, (state) => {
        state.isLoadingRegister = true;
        state.errorRegister = false;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.isLoadingRegister = false;
        state.errorRegister = true;
        state.errorMessageRegister = action.error.message;
      })
      // авторизация
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoadingLogin = false;
        state.errorLogin = false;
      })
      .addCase(fetchLogin.pending, (state) => {
        state.isLoadingLogin = true;
        state.errorLogin = false;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.isLoadingLogin = false;
        state.errorLogin = true;
        state.errorMessageLogin = action.error.message;
      })
      // обновление данных пользователя
      .addCase(fetchUpdateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoadingUpdateUser = false;
        state.errorUpdateUser = false;
      })
      .addCase(fetchUpdateUser.pending, (state) => {
        state.isLoadingUpdateUser = true;
        state.errorUpdateUser = false;
      })
      .addCase(fetchUpdateUser.rejected, (state, action) => {
        state.isLoadingUpdateUser = false;
        state.errorUpdateUser = true;
        state.errorMessageUpdateUser = action.error.message;
      })
      // выход из профиля
      .addCase(fetchLogout.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.error = false;
      })
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.error = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = true;
          state.errorMessage = action.error.message;
        }
      );
  },
});

export const { setAuthChecked, setUser, clearErrorLogin, clearErrorRegister } = userProfileSlice.actions;
export default userProfileSlice.reducer;
