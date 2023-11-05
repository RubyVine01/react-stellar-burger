import { createSlice } from "@reduxjs/toolkit";
import { fetchOrder } from "../thunks/order-details-thunk";

const initialState = {
  orderDetails: null,
  isloading: false,
  error: "",
};

const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrder.fulfilled.type]: (state, action) => {
      state.orderDetails = action.payload.order;
      state.isloading = false;
      state.error = "";
    },
    [fetchOrder.pending.type]: (state) => {
      state.isloading = true;
      state.error = "";
    },
    [fetchOrder.rejected.type]: (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    },
  },
});

export default orderDetailsSlice.reducer;
