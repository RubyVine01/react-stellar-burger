import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredientArray: [],
};

const ingredientsDataSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
});

export default ingredientsDataSlice.reducer;
