import { RootState } from "../store";

export const getUser = (state: RootState) => state.userProfile.user;
export const getIsAuthChecked = (state: RootState) =>
  state.userProfile.isAuthChecked;

// Register
export const getErrorRegister = (state: RootState) =>
  state.userProfile.errorRegister;
export const getErrorMessageRegister = (state: RootState) =>
  state.userProfile.errorMessageRegister;
export const getIsLoadingRegister = (state: RootState) =>
  state.userProfile.isLoadingRegister;

// Login
export const getErrorLogin = (state: RootState) => state.userProfile.errorLogin;
export const getErrorMessageLogin = (state: RootState) =>
  state.userProfile.errorMessageLogin;
export const getIsLoadingLogin = (state: RootState) =>
  state.userProfile.isLoadingLogin;

// UpdateUser
export const getErrorUpdateUser = (state: RootState) =>
  state.userProfile.errorUpdateUser;
export const getErrorMessageUpdateUser = (state: RootState) =>
  state.userProfile.errorMessageUpdateUser;
export const getIsLoadingUpdateUser = (state: RootState) =>
  state.userProfile.isLoadingUpdateUser;
