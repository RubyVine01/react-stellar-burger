import { fakeError, fakeUser } from "../../../utils/test-const";
import { TUser } from "../../../utils/types";
import {
  fetchLogin,
  fetchRegister,
  fetchUpdateUser,
  fetchLogout,
} from "./../../thunks/user-thunk";
import userProfileReducer, {
  initialState,
  setAuthChecked,
  setUser,
  clearErrorLogin,
  clearErrorRegister,
} from "./user-slice";

describe("Test userProfileReducer", () => {
  it("Обработка начального значения", () => {
    expect(
      userProfileReducer(undefined, {
        type: "unknown",
      })
    ).toEqual(initialState);
  });

  it("Установка аутентификации", () => {
    expect(userProfileReducer(initialState, setAuthChecked(true))).toEqual({
      ...initialState,
      isAuthChecked: true,
    });
  });

  it("Установка данных пользователя", () => {
    expect(userProfileReducer(initialState, setUser(fakeUser))).toEqual({
      ...initialState,
      user: fakeUser,
    });
  });

  it("Очистка ошибки входа в систему", () => {
    const modifiedState = {
      ...initialState,
      errorLogin: true,
      errorMessageLogin: "Error",
    };
    expect(userProfileReducer(modifiedState, clearErrorLogin())).toEqual({
      ...modifiedState,
      errorLogin: false,
      errorMessageLogin: "",
    });
  });

  it("Очистка ошибки регистрации", () => {
    const modifiedState = {
      ...initialState,
      errorRegister: true,
      errorMessageRegister: "Error",
    };
    expect(userProfileReducer(modifiedState, clearErrorRegister())).toEqual({
      ...modifiedState,
      errorRegister: false,
      errorMessageRegister: "",
    });
  });

  // регистрация
  it("Обработка fetchRegister.pending", () => {
    expect(
      userProfileReducer(initialState, {
        type: fetchRegister.pending.type,
      })
    ).toEqual({
      ...initialState,
      isLoadingRegister: true,
      errorRegister: false,
    });
  });

  it("Обработка fetchRegister.fulfilled", () => {
    expect(
      userProfileReducer(initialState, {
        type: fetchRegister.fulfilled.type,
        payload: fakeUser,
      })
    ).toEqual({
      ...initialState,
      user: fakeUser,
      isLoadingRegister: false,
      errorRegister: false,
    });
  });

  it("Обработка fetchRegister.rejected", () => {
    expect(
      userProfileReducer(initialState, {
        type: fetchRegister.rejected.type,
        error: { message: fakeError },
      })
    ).toEqual({
      ...initialState,
      isLoadingRegister: false,
      errorRegister: true,
      errorMessageRegister: fakeError,
    });
  });

  // авторизация
  it("Обработка fetchLogin.pending", () => {
    expect(
      userProfileReducer(initialState, {
        type: fetchLogin.pending.type,
      })
    ).toEqual({
      ...initialState,
      isLoadingLogin: true,
      errorLogin: false,
    });
  });

  it("Обработка fetchLogin.fulfilled", () => {
    expect(
      userProfileReducer(initialState, {
        type: fetchLogin.fulfilled.type,
        payload: fakeUser,
      })
    ).toEqual({
      ...initialState,
      user: fakeUser,
      isLoadingLogin: false,
      errorLogin: false,
    });
  });

  it("Обработка fetchLogin.rejected", () => {
    expect(
      userProfileReducer(initialState, {
        type: fetchLogin.rejected.type,
        error: { message: fakeError },
      })
    ).toEqual({
      ...initialState,
      isLoadingLogin: false,
      errorLogin: true,
      errorMessageLogin: fakeError,
    });
  });

  // обновление данных пользователя
  it("Обработка fetchUpdateUser.pending", () => {
    expect(
      userProfileReducer(initialState, {
        type: fetchUpdateUser.pending.type,
      })
    ).toEqual({
      ...initialState,
      isLoadingUpdateUser: true,
      errorUpdateUser: false,
    });
  });

  it("Обработка fetchUpdateUser.fulfilled", () => {
    expect(
      userProfileReducer(initialState, {
        type: fetchUpdateUser.fulfilled.type,
        payload: fakeUser,
      })
    ).toEqual({
      ...initialState,
      user: fakeUser,
      isLoadingUpdateUser: false,
      errorUpdateUser: false,
    });
  });

  it("Обработка fetchUpdateUser.rejected", () => {
    expect(
      userProfileReducer(initialState, {
        type: fetchUpdateUser.rejected.type,
        error: { message: fakeError },
      })
    ).toEqual({
      ...initialState,
      isLoadingUpdateUser: false,
      errorUpdateUser: true,
      errorMessageUpdateUser: fakeError,
    });
  });

  // выход из профиля
  it("Обработка fetchLogout.pending", () => {
    expect(
      userProfileReducer(initialState, {
        type: fetchLogout.pending.type,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
      error: false,
    });
  });

  it("Обработка fetchLogout.fulfilled", () => {
    expect(
      userProfileReducer(initialState, {
        type: fetchLogout.fulfilled.type,
      })
    ).toEqual({
      ...initialState,
      user: null,
      isLoading: false,
      error: false,
    });
  });

  it("Обработка fetchLogout.rejected", () => {
    expect(
      userProfileReducer(initialState, {
        type: fetchLogout.rejected.type,
        error: { message: fakeError },
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: true,
      errorMessage: fakeError,
    });
  });
});
