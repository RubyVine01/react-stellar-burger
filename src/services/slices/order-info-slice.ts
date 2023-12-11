import { createSlice } from "@reduxjs/toolkit";

import { TOrder } from "../../utils/types";

type TOrderDetailsSlice = {
  order: TOrder | null;
};

const initialState: TOrderDetailsSlice = {
  order: null, 
};

export const orderInforSlice = createSlice({
  name: "orderInfor",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    deleteOrder: (state) => {
      state.order = null;
    },
  },
});

export const { setOrder, deleteOrder } = orderInforSlice.actions;

export default orderInforSlice.reducer;
