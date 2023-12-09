import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchResetCode } from "../thunks/forgot-password-thunk";
import { FetchResponse, TForgotPasswordSlice } from "../../utils/types";

const initialState: TForgotPasswordSlice = {
  fetchRes: null,
  isLoading: false,
  error: false,
};

const forgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchResetCode.fulfilled,
        (state, action: PayloadAction<FetchResponse>) => {
          state.fetchRes = action.payload;
          state.isLoading = false;
          state.error = false;
        }
      )
      .addCase(fetchResetCode.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchResetCode.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default forgotPasswordSlice.reducer;
