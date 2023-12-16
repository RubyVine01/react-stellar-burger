import { fakeFillingIngredient } from "./../../../utils/test-const";
import constructorReducer, {
  addToCart,
  deleteFromCart,
  sortCart,
  clearCart,
  initialState,
} from "./burger-constructor-slice";

describe("Test constructorSlice", () => {
  it("Проверка начального состояния", () => {
    expect(constructorReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("Добавление ингредиента с типом bun в конструктор", () => {
    expect(
      constructorReducer(
        initialState,
        addToCart({ ...fakeFillingIngredient, type: "bun" })
      )
    ).toEqual({
      ...initialState,
      cartBun: { ...fakeFillingIngredient, type: "bun" },
    });
  });

  it("Добавление ингредиента с типом !bun в конструктор", () => {
    expect(
      constructorReducer(initialState, addToCart(fakeFillingIngredient))
    ).toEqual({
      ...initialState,
      cartList: [...initialState.cartList, fakeFillingIngredient],
    });
  });

  it("Удаление ингредиента с типом !bun из конструктора", () => {
    const fakeState = {
      ...initialState,
      cartList: [
        fakeFillingIngredient,
        { ...fakeFillingIngredient, uid: "another-uid" },
      ],
    };
    expect(
      constructorReducer(
        fakeState,
        deleteFromCart({ uid: fakeFillingIngredient.uid })
      )
    ).toEqual({
      ...fakeState,
      cartList: [{ ...fakeFillingIngredient, uid: "another-uid" }],
    });
  });

  it("Сортировка элементов в контрукторе", () => {
    const fakeState = {
      ...initialState,
      cartList: [
        fakeFillingIngredient,
        { ...fakeFillingIngredient, uid: "another-uid" },
        { ...fakeFillingIngredient, uid: "yet-another-uid" },
      ],
    };
    const ingredient = { ...fakeFillingIngredient, uid: "yet-another-uid" };

    expect(
      constructorReducer(
        fakeState,
        sortCart({ indexFrom: 0, indexTo: 2, ingredient })
      )
    ).toEqual({
      ...fakeState,
      cartList: [fakeState.cartList[1], fakeState.cartList[2], ingredient],
    });
  });

  it("Удаление всех ингредиентов из конструктора ", () => {
    const fakeState = {
      ...initialState,
      cartList: [
        { ...fakeFillingIngredient, type: "bun" },
        { ...fakeFillingIngredient, uid: "another-uid" },
      ],
    };
    expect(constructorReducer(fakeState, clearCart())).toEqual(initialState);
  });
});
