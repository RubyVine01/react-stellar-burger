import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import ingredientsReducer from "./slices/ingredients-data-slice";
import ingredientDetailsReducer from "./slices/ingredient-details-slice";
import modalReducer from "./slices/modal-slice";
import orderDetailsReducer from "./slices/order-details-slice";
import constructorReducer from "./slices/burger-constructor-slice";
import forgotPasswordReducer from "./slices/forgot-password-slice";
import resetPasswordReducer from "./slices/reset-password-slice";
import userProfileReducer from "./slices/user-slice";
import { socketMiddleware } from "./middleware/socket-middleware";
import { orderReducer } from "./slices/order-slice";

const wsActions = {
  wsConnect: "orders/setWebsocketConnect",
  wsDisconnect: "orders/setWebsocketDisconnect",
  wsOpen: "orders/setWebsocketOpen",
  wsError: "orders/setWebsocketConnectionError",
  wsMessage: "orders/setWebsocketGetOrders",
  wsClose: "orders/setWebsocketClose",
};

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  modal: modalReducer,
  orderDetails: orderDetailsReducer,
  cartConstructor: constructorReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  userProfile: userProfileReducer,
  orders: orderReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware().concat(socketMiddleware(wsActions)),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
