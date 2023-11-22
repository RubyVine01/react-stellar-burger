export const getUser = (state) => state.userProfile.user;
export const getError = (state) => state.userProfile.error;
export const getErrorMessage = (state) => state.userProfile.errorMessage;
export const getIsLoading = (state) => state.userProfile.isLoading;
export const getIsAuthChecked = (state) => state.userProfile.isAuthChecked

// Register
export const getErrorRegister = (state) => state.userProfile.errorRegister;
export const getErrorMessageRegister = (state) =>
  state.userProfile.errorMessageRegister;
export const getIsLoadingRegister = (state) =>
  state.userProfile.isLoadingRegister;

// Login
export const getErrorLogin = (state) => state.userProfile.errorLogin;
export const getErrorMessageLogin = (state) =>
  state.userProfile.errorMessageLogin;
export const getIsLoadingLogin = (state) => state.userProfile.isLoadingLogin;

// UpdateUser
export const getErrorUpdateUser = (state) => state.userProfile.errorUpdateUser;
export const getErrorMessageUpdateUser = (state) =>
  state.userProfile.errorMessageUpdateUser;
export const getIsLoadingUpdateUser = (state) =>
  state.userProfile.isLoadingUpdateUser;
