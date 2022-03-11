import { View, Text, Button, Image } from 'react-native';
import React from 'react';

import { IProduct } from '../types/product';
import useCart from '../hooks/useCart';

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({
  product: { id, image, title, price },
}: IProductCardProps) => {
  const { add } = useCart();
  return (
    <View style={{ marginVertical: 20 }}>
      <Image
        source={{
          uri: image,
        }}
      />
      <Text>{title}</Text>
      {/* <Text>{description}</Text> */}
      <Text>{price}</Text>
      <Button title="Add to cart" onPress={() => add(id)} />
    </View>
  );
};

export default ProductCard;
