import { RootState } from "../store";

export const getStatusRes = (state: RootState) =>
  state.resetPassword.fetchRes?.success;
export const getError = (state: RootState) => state.resetPassword.error;
export const getIsLoading = (state: RootState) => state.resetPassword.isLoading;

export const getResetPasswordAllowed = (state: RootState) =>
  state.resetPassword.resetPasswordAllowed;
