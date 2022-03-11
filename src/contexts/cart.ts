import { createContext } from 'react';
import { ICartItem, ICartAction } from '../reducers/cartReducer';

interface ICartContext {
  cart: ICartItem[];
  dispatch: (action: ICartAction) => void;
}

const CartContext = createContext<ICartContext>({
  cart: [],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (action: ICartAction) => {},
});

export default CartContext;
