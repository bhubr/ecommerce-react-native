import { View, Text, Image } from 'react-native';
import React from 'react';
import { IProduct } from '../types/product';

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({
  product: { image, title, description, price },
}: IProductCardProps) => {
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
      />
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  );
};

export default ProductCard;
