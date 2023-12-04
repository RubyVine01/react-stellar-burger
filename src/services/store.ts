import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from "./slices/ingredients-data-slice";
import ingredientDetailsReducer from "./slices/ingredient-details-slice";
import modalReducer from "./slices/modal-slice";
import orderDetailsReducer from "./slices/order-details-slice";
import constructorReducer from "./slices/burger-constructor-slice";
import forgotPasswordReducer from "./slices/forgot-password-slice";
import resetPasswordReducer from "./slices/reset-password-slice";
import userProfileReducer from "./slices/user-slice";

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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch