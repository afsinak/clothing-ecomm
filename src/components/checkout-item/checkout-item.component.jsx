import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const Checkout = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const { clearItemFromCartCompletely, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const clearItemHandler = () => {
    clearItemFromCartCompletely(cartItem);
  };


  const addItemHandler = () => {
    addItemToCart(cartItem);
  };

  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default Checkout;
