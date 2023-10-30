import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredientDetails: null,
};

const ingredientDetailsSlice = createSlice({
  name: "ingredientDetails",
  initialState,
  reducers: {
    setIngredientDetails: (state, action) => {
      state.ingredientArray = action.payload;
    },
    deleteIngredientDetails: (state) => {
      state.ingredientArray = null;
    },
  },
});

export const { setIngredientDetails, deleteIngredientDetails } = ingredientDetailsSlice.actions;

export default ingredientDetailsSlice.reducer;
