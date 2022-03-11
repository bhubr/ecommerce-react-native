import { useContext } from 'react';

import CartContext from '../contexts/cart';

export default function useCart() {
  const { cart, dispatch } = useContext(CartContext);

  const add = (productId: number) => dispatch({ type: 'ITEM_ADD', productId });

  const sub = (productId: number) => dispatch({ type: 'ITEM_SUB', productId });

  const clear = () => dispatch({ type: 'CLEAR' });

  return { cart, add, sub, clear };
}
