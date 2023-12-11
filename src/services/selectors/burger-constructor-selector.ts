import { createSelector } from "@reduxjs/toolkit";
import { TFillingItem } from "../../utils/types";
import { RootState } from "../store";

export const getCartList = (state: RootState) => state.cartConstructor.cartList;
export const getCartBun = (state: RootState) => state.cartConstructor.cartBun;

export const getAllCart = createSelector(
  [getCartList, getCartBun],
  (cartList, cartBun): Array<TFillingItem> => {
    const result: TFillingItem[] = [...cartList];

    if (cartBun !== null) {
      result.push(cartBun, cartBun);
    }

    return result;
  }
);
