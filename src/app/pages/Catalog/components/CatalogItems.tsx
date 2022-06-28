import React, { useEffect } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';
import ProductItems from './ProductItem';
import { useBasketSlice } from '../slice/basketSlice';
import { selectBasket } from '../slice/basketSelector';
import { useDispatch, useSelector } from 'react-redux';

const CatalogItems = ({ catalogList }) => {
  const dispatch = useDispatch();

  const baskets = useSelector(selectBasket);
  const { actions } = useBasketSlice();

  useEffect(() => {
    dispatch(actions.setBasket(baskets));
  }, []);

  return (
    <Col md={12} lg={12}>
      <CatalogItemsWrap>
        <CatalogItemStyles>
          {catalogList.map((item, i) => (
            <ProductItems item={item} key={i} />
          ))}
        </CatalogItemStyles>
      </CatalogItemsWrap>
    </Col>
  );
};

const CatalogItemsWrap = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CatalogItemStyles = styled.div`
  width: calc(100% + 30px);
  display: flex;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  line-height: 1.6;
  box-sizing: inherit;
  color: #212529;
  text-align: left;
`;

export default CatalogItems;
