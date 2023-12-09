import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchOrder } from "../thunks/order-details-thunk";
import { TOrder, TOrderDetailsSlice } from "../../utils/types";

const initialState: TOrderDetailsSlice = {
  orderDetails: null,
  isLoading: false,
  error: false,
};

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.fulfilled, (state, action: PayloadAction<TOrder>) => {
        state.orderDetails = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchOrder.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchOrder.rejected.type, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default orderDetailsSlice.reducer;
