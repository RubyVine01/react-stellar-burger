import { configureStore } from "@reduxjs/toolkit";
import  ingredientsReducer from "./reducers/ingredients-data-slice.js";

export const store = configureStore({
  reducer: { ingredients: ingredientsReducer },
});
