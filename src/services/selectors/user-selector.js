export const getUser = (state) => state.userProfile.user;
export const getAccessToken = (state) => state.userProfile.accessToken;
export const getError = (state) => state.userProfile.error;
export const getErrorMessage = (state) => state.userProfile.errorMessage;
export const getIsLoading = (state) => state.userProfile.isLoading;

export const getErrorRegister = (state) => state.userProfile.errorRegister;
export const getErrorMessageRegister = (state) =>
  state.userProfile.errorMessageRegister;
export const getIsLoadingRegister = (state) =>
  state.userProfile.isLoadingRegister;
