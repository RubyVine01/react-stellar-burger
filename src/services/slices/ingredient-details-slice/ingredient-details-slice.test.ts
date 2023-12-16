import ingredientDetailsReducer, {
  setIngredientDetails,
  deleteIngredientDetails,
  initialState,
} from "./ingredient-details-slice";

import { fakeIngredient } from "../../../utils/test-const";

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
