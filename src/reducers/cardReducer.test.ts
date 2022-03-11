import cartReducer, { ICartItem } from './cartReducer';

describe('cartReducer', () => {
  describe('ITEM_ADD action', () => {
    it("adds an item that wasn't in cart", () => {
      // AAA => Arrange, Act, Assert
      // Arrange = poser le décor, mettre en place
      const state: ICartItem[] = [];

      // Act = exécuter le code à tester, en partant de ce qu'on vient
      // d'initialiser
      const newState = cartReducer(state, { type: 'ITEM_ADD', productId: 1 });

      // Assert = vérifier que le résultat (_actual_ = résultat effectif de notre code) est bien conforme à l'état/au résultat attendu (_expected_)
      const expected = [{ productId: 1, count: 1 }];
      expect(newState).toEqual(expected);
    });

    it('adds an item that was already in cart', () => {
      const state: ICartItem[] = [
        { productId: 1, count: 2 },
        { productId: 2, count: 1 },
      ];
      const newState = cartReducer(state, { type: 'ITEM_ADD', productId: 1 });
      const expected = [
        { productId: 1, count: 3 },
        { productId: 2, count: 1 },
      ];
      expect(newState).toEqual(expected);
    });
  });

  describe('ITEM_SUB action', () => {
    it('removes an item if it had count 1', () => {
      const state: ICartItem[] = [
        { productId: 1, count: 2 },
        { productId: 2, count: 1 },
      ];
      const newState = cartReducer(state, { type: 'ITEM_SUB', productId: 2 });
      const expected = [{ productId: 1, count: 2 }];
      expect(newState).toEqual(expected);
    });
    it('decrements an item if it had count 2', () => {
      const state: ICartItem[] = [{ productId: 1, count: 2 }];
      const newState = cartReducer(state, { type: 'ITEM_SUB', productId: 1 });
      const expected = [{ productId: 1, count: 1 }];
      expect(newState).toEqual(expected);
    });
  });
});
