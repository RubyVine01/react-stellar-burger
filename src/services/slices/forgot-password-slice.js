import { createSlice } from "@reduxjs/toolkit";
import { fetchResetCode } from "../thunks/forgot-password-thunk";

const initialState = {
  fetchRes: {},
  isLoading: false,
  error: false,
};

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchResetCode.fulfilled]: (state, action) => {
      state.fetchRes = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    [fetchResetCode.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchResetCode.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default forgotPasswordSlice.reducer;
