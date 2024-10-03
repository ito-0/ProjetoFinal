import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../pages/Home/index'; // Importe a nova interface

type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1); // Remove apenas a primeira ocorrência do item
      }
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    }
  }
});

export const { add, remove, open, close } = cartSlice.actions;
export default cartSlice.reducer;
