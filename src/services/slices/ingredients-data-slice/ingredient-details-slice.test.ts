import { TIngredient } from "../../../utils/types";
import { fetchIngredients } from "../../thunks/ingredients-data-thunk";
import ingredientsDataReducer, { initialState } from "./ingredients-data-slice";

const fakeIngridients: TIngredient[] = [
  {
    _id: "643d69a5c3f7b9001cfa093d",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
  },
  {
    _id: "643d69a5c3f7b9001cfa0944",
    name: "Соус традиционный галактический",
    type: "sauce",
    proteins: 42,
    fat: 24,
    carbohydrates: 42,
    calories: 99,
    price: 15,
    image: "https://code.s3.yandex.net/react/code/sauce-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
    __v: 0,
  },
  {
    _id: "643d69a5c3f7b9001cfa0947",
    name: "Плоды Фалленианского дерева",
    type: "main",
    proteins: 20,
    fat: 5,
    carbohydrates: 55,
    calories: 77,
    price: 874,
    image: "https://code.s3.yandex.net/react/code/sp_1.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
    __v: 0,
  },
];

describe("Test ingredientsDataSlice", () => {
  it("Обработка начального значения", () => {
    expect(
      ingredientsDataReducer(undefined, {
        type: "unknown",
      })
    ).toEqual(initialState);
  });

  it("Обработка fetchIngredients.pending", () => {
    expect(
      ingredientsDataReducer(initialState, {
        type: fetchIngredients.pending.type,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
      error: false,
    });
  });

  it("Обработка fetchIngredients.fulfilled", () => {
    expect(
      ingredientsDataReducer(initialState, {
        type: fetchIngredients.fulfilled.type,
        payload: fakeIngridients,
      })
    ).toEqual({
      ...initialState,
      ingredientArray: fakeIngridients,
      isLoading: false,
      error: false,
    });
  });

  it("Обработка fetchIngredients.rejected", () => {
    expect(
      ingredientsDataReducer(initialState, {
        type: fetchIngredients.rejected.type,
      })
    ).toEqual({
      ...initialState,
      isLoading: false,
      error: true,
    });
  });
});
