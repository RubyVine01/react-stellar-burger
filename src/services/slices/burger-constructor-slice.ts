import { createSlice } from "@reduxjs/toolkit";
import { TCartConstructorSlice } from "../../utils/types";

const initialState: TCartConstructorSlice = {
  cartList: [],
  cartBun: null,
};

const constructorSlice = createSlice({
  name: "cartConstructor",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (action.payload.type === "bun") {
        state.cartBun = action.payload;
      } else {
        state.cartList.push(action.payload);
      }
    },
    deleteFromCart: (state, action) => {
      state.cartList = state.cartList.filter(
        (element) => element.uid !== action.payload.uid
      );
    },

    sortCart: (state, action) => {
      const { indexFrom, indexTo, ingredient } = action.payload;
      state.cartList.splice(indexFrom, 1);
      state.cartList.splice(indexTo, 0, ingredient);
    },

    clearCart: (state) => {
      state.cartList = [];
      state.cartBun = null;
    },
  },
});

export const { addToCart, deleteFromCart, sortCart, clearCart } =
  constructorSlice.actions;

export default constructorSlice.reducer;
