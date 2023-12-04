import { createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "../thunks/ingredients-data-thunk";

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
      state.ingredientArray = action.payload;
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
