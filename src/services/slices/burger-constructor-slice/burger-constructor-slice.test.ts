import constructorReducer, {
  addToCart,
  deleteFromCart,
  sortCart,
  clearCart,
  initialState,
} from "./burger-constructor-slice";

import { TFillingItem } from "../../../utils/types";

const fakeIngredient: TFillingItem = {
  _id: "some-id",
  name: "Ingredient",
  type: "sauce",
  proteins: 10,
  fat: 10,
  carbohydrates: 10,
  calories: 10,
  price: 100,
  image: "some-url",
  image_mobile: "some-url",
  image_large: "some-url",
  __v: 0,
  uid: "some-unique-id",
};

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
        addToCart({ ...fakeIngredient, type: "bun" })
      )
    ).toEqual({
      ...initialState,
      cartBun: { ...fakeIngredient, type: "bun" },
    });
  });

  it("Добавление ингредиента с типом !bun в конструктор", () => {
    expect(constructorReducer(initialState, addToCart(fakeIngredient))).toEqual(
      {
        ...initialState,
        cartList: [...initialState.cartList, fakeIngredient],
      }
    );
  });

  it("Удаление ингредиента с типом !bun из конструктора", () => {
    const fakeState = {
      ...initialState,
      cartList: [fakeIngredient, { ...fakeIngredient, uid: "another-uid" }],
    };
    expect(
      constructorReducer(fakeState, deleteFromCart({ uid: fakeIngredient.uid }))
    ).toEqual({
      ...fakeState,
      cartList: [{ ...fakeIngredient, uid: "another-uid" }],
    });
  });

  it("Сортировка элементов в контрукторе", () => {
    const fakeState = {
      ...initialState,
      cartList: [
        fakeIngredient,
        { ...fakeIngredient, uid: "another-uid" },
        { ...fakeIngredient, uid: "yet-another-uid" },
      ],
    };
    const ingredient = { ...fakeIngredient, uid: "yet-another-uid" };

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
        { ...fakeIngredient, type: "bun" },
        { ...fakeIngredient, uid: "another-uid" },
      ],
    };
    expect(constructorReducer(fakeState, clearCart())).toEqual(initialState);
  });
});
