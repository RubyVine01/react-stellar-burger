import { fakeError, fakeOrders, fakeUrl } from "../../../utils/test-const";
import {
  orderReducer,
  initialState,
  setWebsocketOpen,
  setWebsocketClose,
  setWebsocketConnect,
  setWebsocketConnectionError,
  setWebsocketDisconnect,
  setWebsocketGetOrders,
} from "./orders-slice";

describe("Test ordersSlice", () => {
  it("Открытие WS setWebsocketOpen", () => {
    expect(orderReducer(initialState, setWebsocketOpen(true))).toEqual({
      ...initialState,
      wsOpen: true,
      wsError: null,
    });
  });

  it("Закрытие WS setWebsocketOpen", () => {
    expect(orderReducer(initialState, setWebsocketClose())).toEqual({
      ...initialState,
      wsOpen: false,
      wsUrl: "",
      orders: null,
      wsError: null,
    });
  });

  it("Установка соединения с WS setWebsocketOpen", () => {
    expect(orderReducer(initialState, setWebsocketConnect(fakeUrl))).toEqual({
      ...initialState,
      wsConnectionStatus: true,
      wsUrl: fakeUrl,
    });
  });

  it("Oбработки ошибки соединения WS setWebsocketOpen", () => {
    expect(
      orderReducer(initialState, setWebsocketConnectionError(fakeError))
    ).toEqual({
      ...initialState,
      wsError: fakeError,
    });
  });

  it("Отключения соединения WS setWebsocketDisconnect", () => {
    expect(orderReducer(initialState, setWebsocketDisconnect())).toEqual({
      ...initialState,
      wsConnectionStatus: false,
    });
  });

  it("Получения заказов через WS setWebsocketGetOrders", () => {
    expect(
      orderReducer(initialState, setWebsocketGetOrders(fakeOrders))
    ).toEqual({
      ...initialState,
      orders: fakeOrders,
    });
  });
});
