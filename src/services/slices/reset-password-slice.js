import { createSlice } from "@reduxjs/toolkit";
import { fetchСonfirmNewPassword } from "../thunks/reset-password-thunk";

const initialState = {
  fetchRes: {},
  isLoading: false,
  error: false,
  errorMessage: '',
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {},
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

export default resetPasswordSlice.reducer;
