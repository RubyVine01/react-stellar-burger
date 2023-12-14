import { TOrderItem } from "../../../utils/types";
import { fetchOrderDetails } from "../../thunks/get-order-details-thunk";
import orderInfoReducer, {
  initialState,
  setOrder,
  deleteOrder,
} from "./order-info-slice";

const fakeOrderInfo: TOrderItem = {
  _id: "657b653f87899c001b822c7f",
  ingredients: [
    "643d69a5c3f7b9001cfa093d",
    "643d69a5c3f7b9001cfa0945",
    "643d69a5c3f7b9001cfa093d",
  ],
  owner: "657773be7fd657001ba084c8",
  status: "done",
  name: "Антарианский флюоресцентный бургер",
  createdAt: "2023-12-14T20:27:43.718Z",
  updatedAt: "2023-12-14T20:27:44.168Z",
  number: 29236,
  __v: 0,
};

describe("Test orderInfoSlice", () => {
  it("Обработка начального значения", () => {
    expect(
      orderInfoReducer(undefined, {
        type: "unknown",
      })
    ).toEqual(initialState);
  });

  it("Обработка fetchOrderDetails.pending", () => {
    expect(
      orderInfoReducer(initialState, {
        type: fetchOrderDetails.pending.type,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
      error: false,
    });
  });

  it("Обработка fetchOrderDetails.fulfilled", () => {
    expect(
      orderInfoReducer(initialState, {
        type: fetchOrderDetails.fulfilled.type,
        payload: fakeOrderInfo,
      })
    ).toEqual({
      ...initialState,
      orderInfo: fakeOrderInfo,
      isLoading: false,
      error: false,
    });
  });

  it("Обработка fetchOrderDetails.rejected", () => {
    expect(
      orderInfoReducer(initialState, {
        type: fetchOrderDetails.rejected.type,
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: true,
    });
  });

  it("Установка информации о заказе setOrder", () => {
    expect(orderInfoReducer(initialState, setOrder(fakeOrderInfo))).toEqual({
      ...initialState,
      orderInfo: fakeOrderInfo,
    });
  });

  it("Удаление информации о заказе deleteOrder", () => {
    expect(orderInfoReducer(initialState, deleteOrder())).toEqual({
      ...initialState,
      orderInfo: null,
    });
  });
});
