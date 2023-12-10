// import { LiveTable, WebsocketStatus } from "../../../types/live-table";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TOrder = {
  _id: string;
  ingredients: Array<string>;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};

export type TOrders = {
  success: boolean;
  orders: TOrder[];
  total: number;
  totalToday: number;
};

type TDataState = {
  wsOpen: boolean;
  wsUrl: string;
  wsConnectionStatus: boolean;
  wsError: string | null;
  orders: TOrders | null;
};
export const initialState: TDataState = {
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
    setWebsocketConnection: (state, action: PayloadAction<string>) => {
      state.wsConnectionStatus = true;
      state.wsUrl = action.payload;
    },
    setWebsocketConnectionError: (
      state,
      action: PayloadAction<null | string>
    ) => {
      state.wsError = action.payload;
    },
    setWebsocketOffline: (state) => {
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
  setWebsocketConnection,
  setWebsocketConnectionError,
  setWebsocketOffline,
  setWebsocketGetOrders,
} = ordersSlice.actions;

export const orderReducer = ordersSlice.reducer;
