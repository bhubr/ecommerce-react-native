import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface ICartPayload {
  productId: number;
}

const initialState: ICartItem[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ICartPayload>) => {
      // décomposition du payload pour récup. le productId;
      const { productId } = action.payload;
      const itemInCartIndex = state.findIndex(
        (item) => item.productId === productId
      );
      // Si l'item n'est pas trouvé dans le panier
      if (itemInCartIndex === -1) {
        // https://alligator.io/js/object-property-shorthand-es6/
        state.push({ productId, count: 1 });
      } else {
        state[itemInCartIndex].count += 1;
      }
    },
    sub: (state, action: PayloadAction<ICartPayload>) => {
      const { productId } = action.payload;
      const itemInCartIndex = state.findIndex(
        (item) => item.productId === productId
      );
      // à vérifier
      if (itemInCartIndex === -1) {
        return;
      }
      if (state[itemInCartIndex].count === 1) {
        state.splice(itemInCartIndex, 1);
      } else {
        state[itemInCartIndex].count -= 1;
      }
    },
    clear: (state) => {
      // Vide tout l'array (suppr à partir de l'index 0 et sur tout le nb d'items)
      state.splice(0, state.length);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, sub, clear } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
