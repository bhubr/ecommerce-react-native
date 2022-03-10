import { View, Text, Image } from 'react-native';
import React from 'react';

interface IProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard = ({
  title,
  price,
  image,
  description,
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
    </View>
  );
};

export default ProductCard;
