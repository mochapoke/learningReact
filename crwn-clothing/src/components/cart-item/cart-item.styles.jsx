import styled from 'styled-components';

const CartItemsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

const ImageContainer = styled.img`
  width: 30%;
`;

const ItemDetailContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const Name = styled.div`
  font-size: 16px;
`;

const PriceTag = styled.div`
  font-size: 16px;
`;

export {
  CartItemsContainer,
  ItemDetailContainer,
  Name,
  PriceTag,
  ImageContainer,
};
