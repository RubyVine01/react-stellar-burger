import { TIngredient } from "../../utils/types";
import { RootState } from "../store";

export const getIngredients = (state: RootState) =>
  state.ingredients.ingredientArray;
export const getLoadingIngredients = (state: RootState) =>
  state.ingredients.isLoading;
export const getErrorIngredients = (state: RootState) =>
  state.ingredients.error;
