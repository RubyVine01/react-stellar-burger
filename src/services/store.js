import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./reducers/ingredients-data-slice.js";
import ingredientDetailsReducer from "./reducers/ingredient-details-slice.js";
import modalReducer from "./reducers/modal-slice.js";
import orderDetailsReducer from "./reducers/order-details-slice.js";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    modal: modalReducer,
    orderDetails: orderDetailsReducer,
  },
});
