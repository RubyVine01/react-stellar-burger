import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const getOrders = (state: RootState) => state.orders.orders?.orders;

export const getTotal = (state: RootState) => state.orders.orders?.total;
export const getTotalToday = (state: RootState) =>
  state.orders.orders?.totalToday;

export const getOrdersNumListDone = createSelector([getOrders], (orders) => {
  return (
    orders
      ?.filter((order) => order?.status === "done")
      .map((order) => order.number) || []
  );
});

export const getOrdersNumListInWork = createSelector([getOrders], (orders) => {
  return (
    orders
      ?.filter((order) => order?.status !== "done")
      .map((order) => order.number) || []
  );
});
