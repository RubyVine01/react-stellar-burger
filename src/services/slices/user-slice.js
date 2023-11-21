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
  isLoadingRegister: false,
  errorRegister: false,
  errorMessageRegister: "",
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
  extraReducers: (builder) => {
    builder
    
    // регистрация 
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoadingRegister = false;
        state.errorRegister = false;
      })
      .addCase(fetchRegister.pending, (state, action) => {
        state.isLoadingRegister = true;
        state.errorRegister = false;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.isLoadingRegister = false;
          state.errorRegister = true;
          state.errorMessageRegister = action.payload;
      })
      // авторизация
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = false;
        console.log(state.user);
      })

      // выход из профиля
      .addCase(fetchLogout.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.error = false;
      })

      // обновление данных пользователя
      .addCase(fetchUpdateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      

      // .addMatcher(
      //   (action) => action.type.endsWith("/pending"),
      //   (state) => {
      //     state.isLoading = true;
      //     state.error = false;
      //   }
      // )
      // .addMatcher(
      //   (action) => action.type.endsWith("/rejected"),
      //   (state, action) => {
      //     state.isLoading = false;
      //     state.error = true;
      //     state.errorMessage = action.payload;
      //     console.log(state.error);
      //     console.log(`state.errorMessage: ${state.errorMessage}`);
      //   }
      // );
  },
});

export const { setAuthChecked, setUser } = userProfileSlice.actions;
export default userProfileSlice.reducer;
