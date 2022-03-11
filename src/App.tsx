import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState, useReducer } from 'react';

import { IProduct } from './types/product';
import useFetch from './hooks/useFetch';

import ThemeContext from './contexts/theme';

import CartContext from './contexts/cart';
import ProductCardList from './components/ProductCardList';
import ThemeSwitch from './components/ThemeSwitch';
import cartReducer from './reducers/cartReducer';

function Home() {
  const {
    data: products,
    error,
    loading,
  } = useFetch<IProduct[]>('https://fakestoreapi.com/products');

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.alert}>{error.message}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* <ThemeSwitch /> */}
      <ProductCardList products={products} />
      {/* {products ? (
        products.map((product) => (
          <View key={product.id}>
            <Text>{product.title}</Text>
            <Text>{product.price}</Text>
            <Button
              title="Add to cart"
              onPress={() =>
                dispatch({ type: 'ITEM_ADD', productId: product.id })
              }
            />
          </View>
        ))
      ) : (
        <Text>No products</Text>
      )} */}
      <StatusBar style="auto" />
    </View>
  );
}

export function ColorProvider({ children }) {
  const [color, setColor] = useState('#66ccff');
  return (
    <ThemeContext.Provider
      value={{
        primaryColor: color,
        setPrimaryColor: setColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default function App() {
  const [cartState, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        dispatch,
      }}
    >
      <ColorProvider>
        <Home />
      </ColorProvider>
    </CartContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  alert: {
    color: 'red',
    borderColor: 'red',
    borderWidth: 2,
  },
});
