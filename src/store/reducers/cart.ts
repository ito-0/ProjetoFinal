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
      state.items.splice(action.payload, 1); // Remove o item baseado no índice
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
