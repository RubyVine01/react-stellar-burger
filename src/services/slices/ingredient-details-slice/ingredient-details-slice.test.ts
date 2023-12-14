import ingredientDetailsReducer, {
  setIngredientDetails,
  deleteIngredientDetails,
  initialState,
} from "./ingredient-details-slice";

import { TIngredient } from "../../../utils/types";

const fakeIngredient: TIngredient = {
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
};

describe("Test ingredientDetailsSlice", () => {
  it("Проверка начального состояния", () => {
    expect(ingredientDetailsReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("Установка значения setIngredientDetails", () => {
    expect(
      ingredientDetailsReducer(
        initialState,
        setIngredientDetails(fakeIngredient)
      )
    ).toEqual({
      ...initialState,
      ingredientDetails: fakeIngredient,
    });
  });

  it("Удаление значения deleteIngredientDetails", () => {
    expect(
      ingredientDetailsReducer(initialState, deleteIngredientDetails())
    ).toEqual(initialState);
  });
});
