import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCreateOrder } from "../../thunks/created-order-details-thunk";
import { TCreatedOrder } from "../../../utils/types";

type TOrderDetailsSlice = {
  orderDetails: TCreatedOrder | null;
  isLoading: boolean;
  error: boolean;
};

const initialState: TOrderDetailsSlice = {
  orderDetails: null,
  isLoading: false,
  error: false,
};

const createdOrderSlice = createSlice({
  name: "createdOrder",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCreateOrder.fulfilled,
        (state, action: PayloadAction<TCreatedOrder>) => {
          state.orderDetails = action.payload;
          state.isLoading = false;
          state.error = false;
        }
      )
      .addCase(fetchCreateOrder.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchCreateOrder.rejected.type, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default createdOrderSlice.reducer;
