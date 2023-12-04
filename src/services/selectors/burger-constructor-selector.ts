import { TFillingItem } from "../../utils/types";
import { RootState } from "../store";

export const getCartList = (state: RootState) =>
  state.cartConstructor.cartList;
export const getCartBun = (state: RootState) =>
  state.cartConstructor.cartBun;

export const getAllCart = (state: RootState): Array<TFillingItem>  => {
  const cartList = state.cartConstructor.cartList;
  const cartBun = state.cartConstructor.cartBun;
  const result = [];

  if (cartList.length > 0) {
    result.push(...cartList);
  }

  if (cartBun !== null) {
    result.push(cartBun, cartBun);
  }

  return result;
};
