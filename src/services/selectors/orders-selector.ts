import { RootState } from "../store";

export const getOrders = (state: RootState) => state.orders.orders?.orders;

export const getTotal = (state: RootState) => state.orders.orders?.total;
export const gerTotalToday = (state: RootState) =>
  state.orders.orders?.totalToday;
