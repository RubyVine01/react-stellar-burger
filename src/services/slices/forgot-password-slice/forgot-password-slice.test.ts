import { fetchResetCode } from "../../thunks/forgot-password-thunk";
import forgotPasswordReducer, { initialState } from "./forgot-password-slice";

const fakeResSuccess = {
  success: true,
  message: "some-message",
};

describe("Test forgotPasswordSlice", () => {
  it("Обработка начального значения", () => {
    expect(
      forgotPasswordReducer(undefined, {
        type: "unknown",
      })
    ).toEqual(initialState);
  });

  it("Обработка fetchResetCode.pending", () => {
    expect(
      forgotPasswordReducer(initialState, {
        type: fetchResetCode.pending.type,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
      error: false,
    });
  });

  it("Обработка fetchResetCode.fulfilled", () => {
    expect(
      forgotPasswordReducer(initialState, {
        type: fetchResetCode.fulfilled.type,
        payload: fakeResSuccess,
      })
    ).toEqual({
      ...initialState,
      fetchRes: fakeResSuccess,
      isLoading: false,
      error: false,
    });
  });

  it("Обработка fetchResetCode.rejected", () => {
    expect(
      forgotPasswordReducer(initialState, {
        type: fetchResetCode.rejected.type,
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: true,
    });
  });
});
