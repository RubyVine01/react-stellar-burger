import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./slices/ingredients-data-slice.js";
import ingredientDetailsReducer from "./slices/ingredient-details-slice.js";
import modalReducer from "./slices/modal-slice.js";
import orderDetailsReducer from "./slices/order-details-slice.js";
import constructorReducer from "./slices/burger-constructor-slice.js";
import forgotPasswordReducer from "./slices/forgot-password-slice.js";
import resetPasswordReducer from "./slices/reset-password-slice.js";
import userProfileReducer from "./slices/user-slice.js";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    modal: modalReducer,
    orderDetails: orderDetailsReducer,
    cartConstructor: constructorReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    userProfile: userProfileReducer,
  },
});
