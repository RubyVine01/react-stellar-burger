import { RootState } from "../store";

export const getOrder = (state: RootState) => state.orderDetails.orderDetails;
export const getError = (state: RootState) => state.orderDetails.error;
export const getIsloading = (state: RootState) => state.orderDetails.isLoading;
  