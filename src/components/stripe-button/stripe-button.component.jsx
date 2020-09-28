import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 1000;
  const publishableKey =
    'pk_test_51HWJnSHvqFVcOEzrupEIv6DxUirOnc7az0obLaeyduQcto96I6JWdrGHE4PrW7W67c0JsSTmj1XFO239sDmQYGKM00UhjPRIXQ';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Succeful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name="Let's Shop"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
