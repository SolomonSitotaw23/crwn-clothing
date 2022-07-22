import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropDownComponent,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.style";
// redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { useNavigate } from "react-router-dom";

const CartDropDown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  return (
    <CartDropDownComponent>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem}></CartItem>
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        {" "}
        Go To Checkout
      </CustomButton>
    </CartDropDownComponent>
  );
};
const mapStateTotProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateTotProps)(CartDropDown);
