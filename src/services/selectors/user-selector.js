export const getUser = (state) => state.userProfile.user;
export const getAccessToken = (state) => state.userProfile.accessToken;
export const getError = (state) => state.userProfile.error;
export const getErrorMessage = (state) => state.userProfile.errorMessage;
export const getIsLoading = (state) => state.userProfile.isLoading;