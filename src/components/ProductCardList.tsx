import { View, Text, FlatList } from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';
import { IProduct } from '../types/product';

interface IProductCardListProps {
  products: IProduct[];
  // products: Array<IProduct>;
}

const ProductCardList = ({ products }: IProductCardListProps) => {
  return (
    <View>
      <Text>ProductCardList</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ProductCardList;
