import { fakeIngridients } from "../../../utils/test-const";
import { fetchIngredients } from "../../thunks/ingredients-data-thunk";
import ingredientsDataReducer, { initialState } from "./ingredients-data-slice";

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
