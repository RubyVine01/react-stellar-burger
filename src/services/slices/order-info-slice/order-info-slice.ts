import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TOrderItem } from "../../../utils/types";
import { fetchOrderDetails } from "../../thunks/get-order-details-thunk";

type TOrderInfoSlice = {
  orderInfo: TOrderItem | null;
  isLoading: boolean;
  error: boolean;
};

const initialState: TOrderInfoSlice = {
  orderInfo: null,
  isLoading: false,
  error: false,
};

export const orderInfoSlice = createSlice({
  name: "orderInfo",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.orderInfo = action.payload;
    },
    deleteOrder: (state) => {
      state.orderInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchOrderDetails.fulfilled,
        (state, action: PayloadAction<TOrderItem>) => {
          state.orderInfo = action.payload;
          console.log(state.orderInfo);
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
