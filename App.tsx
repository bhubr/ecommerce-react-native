import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { IProduct } from './types/product';
import ProductCardList from './components/ProductCardList';

export default function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    axios.get('https://fakestoreapi.com/proxducts')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        // err.message | err.response.data
        setError(err);
      })
      .finally(() => setLoading(false));

  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
  if (error) {
    return <View style={styles.container}>
      <Text style={styles.alert}>{error.message}</Text>
    </View>
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
    borderWidth: 2
  }
});
