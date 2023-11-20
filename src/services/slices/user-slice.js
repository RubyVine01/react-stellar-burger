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
  isLoading: false,
  error: false,
  errorMessage: "",
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
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.error = false;
        console.log(state.user);
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchLogout.fulfilled, (state) => {
        state.user = "";
        state.accessToken = "";
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
          state.errorMessage = action.payload;
          console.log(state.error);
          console.log(`state.errorMessage: ${state.errorMessage}`);
        }
      );
  },
});

export const { setAuthChecked, setUser } = userProfileSlice.actions;
export default userProfileSlice.reducer;
