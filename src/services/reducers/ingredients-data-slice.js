import { createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "../middleware/ingredients-data-thunk.js";

const initialState = {
  ingredientArray: [],
  isLoading: false,
  error: false,
};

const ingredientsDataSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchIngredients.fulfilled]: (state, action) => {
      state.ingredientArray = action.payload.data;
      state.isLoading = false;
      state.error = false;
    },
    [fetchIngredients.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchIngredients.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export default ingredientsDataSlice.reducer;
