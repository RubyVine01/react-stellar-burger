import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import ingredientsReducer from "./slices/ingredients-data-slice";
import ingredientDetailsReducer from "./slices/ingredient-details-slice";
import modalReducer from "./slices/modal-slice";
import createdOrderReducer from "./slices/created-order-details-slice";
import constructorReducer from "./slices/burger-constructor-slice";
import forgotPasswordReducer from "./slices/forgot-password-slice";
import resetPasswordReducer from "./slices/reset-password-slice";
import userProfileReducer from "./slices/user-slice";
import orderInfoReducer from "./slices/order-info-slice";
import { socketMiddleware } from "./middleware/socket-middleware";
import { orderReducer } from "./slices/orders-slice";

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
  createdOrder: createdOrderReducer,
  cartConstructor: constructorReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  userProfile: userProfileReducer,
  orders: orderReducer,
  orderInfo: orderInfoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware().concat(socketMiddleware(wsActions)),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
