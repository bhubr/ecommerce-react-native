import { View, Text, Button, Image } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../features/cart/cartSlice';

import { IProduct } from '../types/product';

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({
  product: { id, image, title, price },
}: IProductCardProps) => {
  const dispatch = useDispatch();
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
      <Button
        title="Add to cart"
        onPress={() =>
          dispatch(
            add({
              productId: id,
            })
          )
        }
      />
    </View>
  );
};

export default ProductCard;
