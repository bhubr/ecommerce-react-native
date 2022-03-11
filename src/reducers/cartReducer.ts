export interface ICartItem {
  productId: number;
  count: number;
}

export default function cartReducer(state: ICartItem[], action) {
  switch (action.type) {
    case 'ITEM_ADD': // { type: 'ITEM_ADD', productId: n }
      const itemInCartIndex = state.findIndex(
        (item) => item.productId === action.productId
      );
      if (itemInCartIndex === -1) {
        return [...state, { productId: action.productId, count: 1 }];
      }
      state[itemInCartIndex].count += 1;
      return state;
    default:
      throw new Error('Unhandled action type');
  }
}
