import React, { useState } from 'react';
import { Row } from 'reactstrap';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectBasket } from '../slice/basketSelector';
import { useStoreState } from 'easy-peasy';
import { customMedia } from 'styles/media';

export const SummarySection = () => {
  //   const [orderTotal, setOrderTotal] = useState(0);

  const baskets = useSelector(selectBasket);
  const selectedStore = useStoreState((state: any) => state.selectedStore);

  let sumOrderTotal = 0;

  baskets?.items.forEach(function (value) {
    sumOrderTotal += value.price * value.quantity;
  });

  return (
    <Row>
      <div className="container">
        <DivName>
          <ColName>
            Selected Store(
            {selectedStore?.Name ? `${selectedStore?.Name}` : 'None'})
          </ColName>
          <ColName>Payment Method (Cash on Delivery)</ColName>
          <ColName>Order Total (₦{sumOrderTotal})</ColName>
          <ColName>Summary and Checkout</ColName>
          <ColName>View Product Images</ColName>
        </DivName>
      </div>
    </Row>
  );
};

const ColName = styled.span`
  margin-left: 5px;
  height: 5rem;
  padding: 2rem;
  color: #ffffff;
  background-color: #100276;
  width: auto;
  flex-basis: 19%;
  font-size: 9px;
  margin-top: 0.5rem;

  ${customMedia.lessThan('large')`
  flex-basis: calc(25% - 30px);
  max-width: calc(25% - 30px);
`};

  ${customMedia.lessThan('medium')`
flex-basis: calc(43% - 30px);
max-width: calc(43% - 30px);
`};

  ${customMedia.lessThan('small')`
flex-basis: calc(75% - 30px);
max-width: calc(75% - 30px);
`};
`;

const DivName = styled.div`
  margin-top: 30px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;
