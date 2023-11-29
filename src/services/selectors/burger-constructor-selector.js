export const getCartList = (state) => state.cartConstructor.cartList;
export const getCartBun = (state) => state.cartConstructor.cartBun;
export const getAllCart = (state) => {
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
 