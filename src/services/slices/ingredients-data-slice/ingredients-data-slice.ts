import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "../../thunks/ingredients-data-thunk";
import { TIngredient } from "../../../utils/types";

type TIngredientsDataSlice = {
  ingredientArray: TIngredient[] | [];
  isLoading: boolean;
  error: boolean;
};

const initialState: TIngredientsDataSlice = {
  ingredientArray: [],
  isLoading: false,
  error: false,
};

const ingredientsDataSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchIngredients.fulfilled,
        (state, action: PayloadAction<TIngredient[]>) => {
          state.ingredientArray = action.payload;
          state.isLoading = false;
          state.error = false;
        }
      )
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchIngredients.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default ingredientsDataSlice.reducer;
