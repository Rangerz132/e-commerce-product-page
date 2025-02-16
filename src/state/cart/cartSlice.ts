import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProductItem } from "../../types";

interface CartState {
  cart: CartProductItem[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProductItem>) => {
      const indexToUpdate = state.cart.findIndex(
        (cartProductItem) =>
          cartProductItem.productItem.id === action.payload.productItem.id
      );
      if (indexToUpdate === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart[indexToUpdate] = action.payload;
      }
    },
    removeProduct: (state, action: PayloadAction<CartProductItem>) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].productItem.id === action.payload.productItem.id) {
          state.cart.splice(i, 1);
          break;
        }
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
