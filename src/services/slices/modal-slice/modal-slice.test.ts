import modalReducer, {
  openModal,
  closeModal,
  initialState,
} from "./modal-slice";

const fakeModalType = "some-type";

describe("Test modalSlice", () => {
  it("Проверка начального состояния", () => {
    expect(modalReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("Открытие модального окна openModal", () => {
    expect(
      modalReducer(
        initialState,

        openModal(fakeModalType)
      )
    ).toEqual({
      ...initialState,
      isOpen: true,
      modalType: fakeModalType,
    });
  });

  it("Закрытие модального окна closeModal", () => {
    expect(modalReducer(initialState, closeModal())).toEqual(initialState);
  });
});
