import { RootState } from "../store";

export const getIngredientDetails = (state: RootState) =>
  state.ingredientDetails.ingredientDetails;
