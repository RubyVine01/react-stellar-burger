import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchСonfirmNewPassword } from "../../thunks/reset-password-thunk";
import { FetchResponse } from "../../../utils/types";

type TResetPasswordSlice = {
  fetchRes: FetchResponse | null;
  isLoading: boolean;
  error: boolean;
  resetPasswordAllowed: boolean;
};

export const initialState: TResetPasswordSlice = {
  fetchRes: null,
  isLoading: false,
  error: false,
  resetPasswordAllowed: false,
};

const resetPasswordSlice = createSlice({
  name: "resetPassword",
  initialState,
  reducers: {
    setResetPasswordAllowed: (state, action) => {
      state.resetPasswordAllowed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchСonfirmNewPassword.fulfilled,
        (state, action: PayloadAction<FetchResponse>) => {
          state.fetchRes = action.payload; 
          state.isLoading = false;
          state.error = false;
        }
      )
      .addCase(fetchСonfirmNewPassword.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchСonfirmNewPassword.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { setResetPasswordAllowed } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
