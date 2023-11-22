import { createSlice } from "@reduxjs/toolkit";
import { fetchСonfirmNewPassword } from "../thunks/reset-password-thunk";

const initialState = {
  fetchRes: {},
  isLoading: false,
  error: false,
  resetPasswordAllowed: false, // new

};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    setResetPasswordAllowed: (state, action) => {
      state.resetPasswordAllowed = action.payload;
    }, // new
  },
  extraReducers: {
    [fetchСonfirmNewPassword.fulfilled]: (state, action) => {
      state.fetchRes = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    [fetchСonfirmNewPassword.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchСonfirmNewPassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action;
    },
  },
});

export const { setResetPasswordAllowed } = resetPasswordSlice.actions; // new
export default resetPasswordSlice.reducer;
