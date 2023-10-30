import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    // deleteFromCart: (state, action) => {
    //     if (action.payload.type !== "bun") {
    //         state.cartList.filter((element) => element.id !== action.element.id)
    //       }
    // },

    sortCart: (state, action) => {
     
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
