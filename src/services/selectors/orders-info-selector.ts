import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getIngredients } from "./ingredients-data-selector";
import { TIngredient } from "../../utils/types";
import { TUniqueOrderItem } from "../../components/order-details-ingredient/order-details-ingredient";

export const getOrderInfo = (state: RootState) => state.orderInfo.orderInfo;

// Селектор для получения ингредиентов заказа
const getOrderIngredients = createSelector(
  [getOrderInfo, getIngredients],
  (order, allIngredients) => {
    if (!order || !order.ingredients) return [];
    return order.ingredients
      .map((id) => allIngredients.find((ingredient) => ingredient._id === id))
      .filter(
        (ingredient): ingredient is TIngredient => ingredient !== undefined
      );
  }
);

// Селектор для получения уникальных ингредиентов заказа
export const getUniqueOrderIngredients = createSelector(
  [getOrderIngredients],
  (orderIngredients) => {
    const uniqueIngredients: { [key: string]: TUniqueOrderItem } = {};
    orderIngredients.forEach((ingredient) => {
      if (uniqueIngredients[ingredient._id]) {
        uniqueIngredients[ingredient._id].count++;
      } else {
        uniqueIngredients[ingredient._id] = { ...ingredient, count: 1 };
      }
    });
    return Object.values(uniqueIngredients);
  }
);

// Селектор для получения общей стоимости заказа
export const getTotalPrice = createSelector(
  [getOrderIngredients],
  (orderIngredients) => {
    return orderIngredients.reduce(
      (total, ingredient) => total + ingredient.price,
      0
    );
  }
);
