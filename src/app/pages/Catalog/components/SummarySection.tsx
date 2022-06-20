import React, { useState } from 'react';
import { Row } from 'reactstrap';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectBasket } from '../slice/basketSelector';

export const SummarySection = () => {
  //   const [orderTotal, setOrderTotal] = useState(0);

  const baskets = useSelector(selectBasket);

  let sumOrderTotal = 0;

  baskets?.items.forEach(function (value) {
    sumOrderTotal += value.price * value.quantity;
  });

  return (
    <Row>
      <div className="container">
        <DivName>
          <ColName>Selected Store(BamBam Store)</ColName>
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
  height: 50px;
  padding: 28px;
  color: #ffffff;
  background-color: #100276;
  width: auto;
  font-size: 9px;
`;

const DivName = styled.div`
  margin-top: 30px;
`;
