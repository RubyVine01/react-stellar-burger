import { RootState } from "../store";

export const getOrders = (state: RootState) => state.orders.orders?.orders;

export const getTotal = (state: RootState) => state.orders.orders?.total;
export const getTotalToday = (state: RootState) =>
  state.orders.orders?.totalToday;

export const getOrdersNumListDone = (state: RootState): number[]   => {
    const orderList =  state.orders.orders?.orders;
    const result: number[]  = [];

    orderList?.forEach(order => {
      if (order?.status === "done") {
        result.push(order.number); 
      }
    });
    return result;
  }

  export const getOrdersNumListInWork = (state: RootState): number[]   => {
    const orderList =  state.orders.orders?.orders;
    const result: number[]  = [];

    orderList?.forEach(order => {
      if (order?.status !== "done") {
        result.push(order.number); 
      }
    });
    return result;
  }
