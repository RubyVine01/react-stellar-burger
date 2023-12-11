import { RootState } from "../store";

export const getOrder = (state: RootState) => state.createdOrder.orderDetails;
export const getError = (state: RootState) => state.createdOrder.error;
export const getIsloading = (state: RootState) => state.createdOrder.isLoading;
  