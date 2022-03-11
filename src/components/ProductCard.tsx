import { View, Text, Button, Image } from 'react-native';
import React, { useContext } from 'react';

import { IProduct } from '../types/product';
import CartContext from '../contexts/cart';

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({
  product: { id, image, title, price },
}: IProductCardProps) => {
  const { cart, dispatch } = useContext(CartContext);

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
        onPress={() => dispatch({ type: 'ITEM_ADD', productId: id })}
      />
    </View>
  );
};

export default ProductCard;
