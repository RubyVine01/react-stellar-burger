import { createSlice } from "@reduxjs/toolkit";
import { TIngredient } from "../../../utils/types";

type TIngredientDetailsSlice = {
  ingredientDetails: TIngredient | null;
};

export const initialState: TIngredientDetailsSlice = {
  ingredientDetails: null,
};

const ingredientDetailsSlice = createSlice({
  name: "ingredientDetails", 
  initialState,
  reducers: {
    setIngredientDetails: (state, action) => {
      state.ingredientDetails = action.payload;
    },
    deleteIngredientDetails: (state) => {
      state.ingredientDetails = null;
    },
  },
});

export const { setIngredientDetails, deleteIngredientDetails } =
  ingredientDetailsSlice.actions;

export default ingredientDetailsSlice.reducer;
