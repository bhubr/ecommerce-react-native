import { StatusBar } from 'expo-status-bar';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { IProduct } from './types/product';
import ProductCardList from './components/ProductCardList';
import useFetch from './hooks/useFetch';

export default function App() {
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
      <ProductCardList products={products} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alert: {
    color: 'red',
    borderColor: 'red',
    borderWidth: 2,
  },
});
