import { fetchСonfirmNewPassword } from "../../thunks/reset-password-thunk";
import resetPasswordReducer, {
  initialState,
  setResetPasswordAllowed,
} from "./reset-password-slice";

const fakeResSuccess = {
  success: true,
  message: "some-message",
};

describe("Test resetPasswordSlice", () => {
  it("Обработка начального значения", () => {
    expect(
      resetPasswordReducer(undefined, {
        type: "unknown",
      })
    ).toEqual(initialState);
  });

  it("Обработка fetchСonfirmNewPassword.pending", () => {
    expect(
      resetPasswordReducer(initialState, {
        type: fetchСonfirmNewPassword.pending.type,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
      error: false,
    });
  });

  it("Обработка fetchСonfirmNewPassword.fulfilled", () => {
    expect(
      resetPasswordReducer(initialState, {
        type: fetchСonfirmNewPassword.fulfilled.type,
        payload: fakeResSuccess,
      })
    ).toEqual({
      ...initialState,
      fetchRes: fakeResSuccess,
      isLoading: false,
      error: false,
    });
  });

  it("Обработка fetchСonfirmNewPassword.rejected", () => {
    expect(
      resetPasswordReducer(initialState, {
        type: fetchСonfirmNewPassword.rejected.type,
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: true,
    });
  });

  it("Установка значения resetPasswordAllowed", () => {
    expect(
      resetPasswordReducer(initialState, setResetPasswordAllowed(true))
    ).toEqual({
      ...initialState,
      resetPasswordAllowed: true,
    });
  });
});

