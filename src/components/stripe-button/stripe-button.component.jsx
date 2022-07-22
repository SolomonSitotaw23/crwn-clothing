import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51LO6RoLPaaOmFEDyOJeOkDK6sFi8ReNZiGIGN0LBNWhJjyId7svdtNdEvP0Abms75QueiJUIUFCKOE9ZgIH053pG003aJFI63g";

  const onToken = (token) => {
    console.log(token);
    alert("payment successfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing"
      billingAddress
      shippingAddress
      image="../../assets/crown.svg"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
