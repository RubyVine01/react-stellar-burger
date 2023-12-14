import { TOrders } from "../../../utils/types";
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

const fakeUrl = "some-url";
const fakeError = "some-error";
const fakeOrders: TOrders = {
  success: true,
  orders: [
    {
      _id: "657b6c5287899c001b822c8d",
      ingredients: [
        "643d69a5c3f7b9001cfa093d",
        "643d69a5c3f7b9001cfa0943",
        "643d69a5c3f7b9001cfa0945",
        "643d69a5c3f7b9001cfa093d",
      ],
      status: "done",
      name: "Антарианский флюоресцентный space бургер",
      createdAt: "2023-12-14T20:57:54.493Z",
      updatedAt: "2023-12-14T20:57:54.955Z",
      number: 29239,
    },
    {
      _id: "657b6acd87899c001b822c88",
      ingredients: [
        "643d69a5c3f7b9001cfa093c",
        "643d69a5c3f7b9001cfa0941",
        "643d69a5c3f7b9001cfa0940",
        "643d69a5c3f7b9001cfa093c",
      ],
      status: "done",
      name: "Био-марсианский краторный метеоритный бургер",
      createdAt: "2023-12-14T20:51:25.807Z",
      updatedAt: "2023-12-14T20:51:26.273Z",
      number: 29238,
    },
  ],
  total: 28865,
  totalToday: 89,
};

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
