import { fakeOrderInfo } from "../../../utils/test-const";
import { fetchOrderDetails } from "../../thunks/get-order-details-thunk";
import orderInfoReducer, {
  initialState,
  setOrder,
  deleteOrder,
} from "./order-info-slice";

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
