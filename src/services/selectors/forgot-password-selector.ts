import { RootState } from "../store";

export const getStatusSentCode = (state: RootState) =>
  state.forgotPassword.fetchRes?.success;
export const getError = (state: RootState) => state.forgotPassword.error;
export const getIsLoading = (state: RootState) =>
  state.forgotPassword.isLoading;
