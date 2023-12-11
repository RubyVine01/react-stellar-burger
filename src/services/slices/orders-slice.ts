import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TOrders } from "../../utils/types";

type TOrdersSlice = {
  wsOpen: boolean;
  wsUrl: string;
  wsConnectionStatus: boolean;
  wsError: string | null;
  orders: TOrders | null;
};
export const initialState: TOrdersSlice = {
  wsOpen: false,
  wsUrl: "",
  wsConnectionStatus: true,
  wsError: null,
  orders: null,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setWebsocketOpen: (state, action: PayloadAction<boolean>) => {
      state.wsOpen = action.payload;
      state.wsError = null;
    },
    setWebsocketClose: (state) => {
      state.wsOpen = false;
      state.wsUrl = "";
      state.orders = null;
      state.wsError = null;
    },
    setWebsocketConnect: (state, action: PayloadAction<string>) => {
      state.wsConnectionStatus = true;
      state.wsUrl = action.payload;
    },
    setWebsocketConnectionError: (
      state,
      action: PayloadAction<null | string>
    ) => {
      state.wsError = action.payload;
    },
    setWebsocketDisconnect: (state) => {
      state.wsConnectionStatus = false;
    },
    setWebsocketGetOrders: (state, action: PayloadAction<TOrders>) => {
      state.orders = action.payload;
    },
  },
});

export const {
  setWebsocketOpen,
  setWebsocketClose,
  setWebsocketConnect,
  setWebsocketConnectionError,
  setWebsocketDisconnect,
  setWebsocketGetOrders,
} = ordersSlice.actions;

export const orderReducer = ordersSlice.reducer;
