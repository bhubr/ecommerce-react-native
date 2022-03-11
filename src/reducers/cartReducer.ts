export interface ICartItem {
  productId: number;
  count: number;
}


interface ICartAddAction {
  type: 'ITEM_ADD';
  productId: number;
}

interface ICartSubAction {
  type: 'ITEM_SUB';
  productId: number;
}

interface ICartClearAction {
  type: 'CLEAR';
}

export type ICartAction = ICartAddAction | ICartSubAction | ICartClearAction;

export default function cartReducer(state: ICartItem[], action: ICartAction) {
  switch (action.type) {
    case 'CLEAR':
      return [];
    case 'ITEM_ADD': {
      const itemInCartIndex = state.findIndex(
        (item) => item.productId === action.productId
      );
      if (itemInCartIndex === -1) {
        return [...state, { productId: action.productId, count: 1 }];
      }
      state[itemInCartIndex].count += 1;
      return state;
    }
    case 'ITEM_SUB': {
      const itemInCartIndex = state.findIndex(
        (item) => item.productId === action.productId
      );
      // ne devrait pas arriver
      if (itemInCartIndex === -1) {
        return state;
      }
      if (state[itemInCartIndex].count === 1) {
        state.splice(itemInCartIndex, 1);
        return state;
      }
      state[itemInCartIndex].count -= 1;
      return state;
    }
    default:
      throw new Error('Unhandled action type');
  }
}
