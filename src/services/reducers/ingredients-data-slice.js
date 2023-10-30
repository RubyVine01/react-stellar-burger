import { createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "../middleware/ingredients-data-thunk.js";

const initialState = {
  ingredientArray: [],
  isloading: false,
  error: "",
};

const ingredientsDataSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchIngredients.fulfilled.type]: (state, action) => {
      state.ingredientArray = action.payload.data;
      state.isloading = false;
      state.error = "";
    },
    [fetchIngredients.pending.type]: (state) => {
      state.isloading = true;
      state.error = "";
    },
    [fetchIngredients.rejected.type]: (state, action) => {
      state.isloading = false;
      state.error = action.payload;
    },
  },
});

export default ingredientsDataSlice.reducer;

// export const {  } =  ingredientsDataSlice.actions;
