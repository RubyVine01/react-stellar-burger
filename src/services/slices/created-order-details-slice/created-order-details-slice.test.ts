import { fakeResFetchCreateOrder } from "../../../utils/test-const";
import { fetchCreateOrder } from "../../thunks/created-order-details-thunk";
import createdOrderReducer, {
  initialState,
} from "./created-order-details-slice";

describe("Test createdOrderSlice", () => {
  it("Обработка начального значения", () => {
    expect(
      createdOrderReducer(undefined, {
        type: "unknown",
      })
    ).toEqual(initialState);
  });

  it("Обработка fetchCreateOrder.pending", () => {
    expect(
      createdOrderReducer(initialState, {
        type: fetchCreateOrder.pending.type,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
      error: false,
    });
  });

  it("Обработка fetchCreateOrder.fulfilled", () => {
    expect(
      createdOrderReducer(initialState, {
        type: fetchCreateOrder.fulfilled.type,
        payload: fakeResFetchCreateOrder,
      })
    ).toEqual({
      ...initialState,
      orderDetails: fakeResFetchCreateOrder,
      isLoading: false,
      error: false,
    });
  });

  it("Обработка fetchCreateOrder.rejected", () => {
    expect(
      createdOrderReducer(initialState, {
        type: fetchCreateOrder.rejected.type,
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: true,
    });
  });
});
