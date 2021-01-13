import React from 'react';

import {
  CartItemsContainer,
  ItemDetailContainer,
  Name,
  PriceTag,
  ImageContainer,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemsContainer>
    <ImageContainer src={imageUrl} alt='item' />
    <ItemDetailContainer>
      <Name>{name}</Name>
      <PriceTag>
        {quantity} x ${price}
      </PriceTag>
    </ItemDetailContainer>
  </CartItemsContainer>
);

export default CartItem;
