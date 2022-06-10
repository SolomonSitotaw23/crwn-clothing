import React from "react";
import "./cart-dropdown.style.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
// redux
import { connect } from "react-redux";

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
    {cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem}></CartItem>
    ))}
    </div>
    <CustomButton> Go To Checkout</CustomButton>
  </div>
);
const mapStateTotProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateTotProps)(CartDropDown);
