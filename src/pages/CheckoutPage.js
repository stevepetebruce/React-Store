import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PageHero, StripeCheckout } from '../components';
// extra imports
import { useCartContext } from '../context/cart_context';

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h4>checkout page</h4>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
