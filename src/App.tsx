import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState, useReducer } from 'react';
import { Provider } from 'react-redux';

import { IProduct } from './types/product';
import useFetch from './hooks/useFetch';

import ThemeContext from './contexts/theme';
import ProductCardList from './components/ProductCardList';
import ThemeSwitch from './components/ThemeSwitch';

import { store } from './app/store';

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
  return (
    <Provider store={store}>
      <ColorProvider>
        <Home />
      </ColorProvider>
    </Provider>
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
