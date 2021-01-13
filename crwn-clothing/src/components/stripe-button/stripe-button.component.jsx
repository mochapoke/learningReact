import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51I91L1DF4bz0pUxblgW221WZjp8u0UdxYsPn4qPipIy5Oqtb3gSUbVXgWzFhUVFHo2RGXirReKjaYBT5qU4YboJC0071UgSsDf';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken} // on success callback
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
