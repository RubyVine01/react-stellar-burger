import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TOrder, TOrderItem } from "../../utils/types";
import { fetchOrderDetails } from "../thunks/get-order-details-thunk";

type TOrderDetailsSlice = {
  orderInfor: TOrderItem | null;
  isLoading: boolean;
  error: boolean;
};

const initialState: TOrderDetailsSlice = {
  orderInfor: null,
  isLoading: false,
  error: false,
};

export const orderInfoSlice = createSlice({
  name: "orderInfo",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.orderInfor = action.payload;
    },
    deleteOrder: (state) => {
      state.orderInfor = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchOrderDetails.fulfilled,
        (state, action: PayloadAction<TOrderItem>) => {
          state.orderInfor = action.payload;
          state.isLoading = false;
          state.error = false;
        }
      )
      .addCase(fetchOrderDetails.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchOrderDetails.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { setOrder, deleteOrder } = orderInfoSlice.actions;

export default orderInfoSlice.reducer;
