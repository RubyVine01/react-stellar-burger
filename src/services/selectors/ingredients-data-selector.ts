import { TIngredient } from "../../utils/types";
import { RootState } from "../store";

export const getIngredients = (state: RootState): Array<TIngredient> => state.ingredients.ingredientArray; // перенести Array<TIngredient> в Slise
export const getLoadingIngredients = (state: RootState) => state.ingredients.isLoading;
export const getErrorIngredients = (state: RootState) => state.ingredients.error;
