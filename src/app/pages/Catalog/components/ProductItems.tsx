import { Button } from 'app/components/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { CardBody } from 'reactstrap';
import styled from 'styled-components';
import { customMedia } from 'styles/media';

const Sale = `${process.env.PUBLIC_URL}/img/for_store/catalog/sale_lable.png`;
const New = `${process.env.PUBLIC_URL}/img/for_store/catalog/new_lable.png`;

const Catalog = ({ items }) => (
  <CatalogItemsWrap>
    <CatalogItems>
      {items.map(item => (
        <CatalogItem key={item.i}>
          <CatalogItemLink to="/e-commerce/product_page">
            <CatalogItemImageWrap>
              <CatalogItemImg src={`https://test.api.simplemarket.app/api${item.ImageLink}`} alt="catalog-item-img" />
            </CatalogItemImageWrap>
            <CatalogItemInfo>
              <CatalogItemTitle>{item.Name}</CatalogItemTitle>
              <CatalogItemPrice>${item.SalesPrice}</CatalogItemPrice>
            </CatalogItemInfo>
          </CatalogItemLink>
          <div>
            <SearchBtn>Add to Cart</SearchBtn>
          </div>
        </CatalogItem>
      ))}
    </CatalogItems>
  </CatalogItemsWrap>
);
const SearchBtn = styled(Button)`
  margin-top: -20px;
  margin-left: 40px;
  height: 40px;
  padding-left: 40px;
  padding-right: 40px;
  color: #ed017f;
  border-color: #ed017f;

  ${customMedia.lessThan('small')`
    height: 29px;
  `};

  &:hover {
    background-color: #e4811c;
    color: #fff;
  }
  &:after {
    background-color: #e4811c;
    color: #fff;
  }
`;

const CatalogItemsWrap = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CatalogItems = styled.div`
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

const CatalogItem = styled(CardBody)`
  width: calc(33.3333% - 30px);
  margin-bottom: 30px;
  height: 440px;
  position: relative;
  background-color: #fff;
  margin-right: 30px;
  box-sizing: border-box;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  border-radius: 5px;
  box-shadow: none;
`;

const CatalogItemLink = styled(Link)`
  padding: 40px 30px;
  display: block;
  text-decoration: none;
  color: #3ea3fc;
  transition: all 0.3s;
`;

const CatalogItemLabel = styled.img`
  position: absolute;
  top: -2px;
  width: 50px;
  right: 20px;
  vertical-align: middle;
`;

const CatalogItemImageWrap = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  overflow: hidden;
`;

const CatalogItemImg = styled.img`
  height: 100%;
  width: auto;
  vertical-align: middle;
`;

const CatalogItemInfo = styled.div`
  text-align: left;
  position: relative;
  width: calc(100% - 90px);
  display: block;
`;

const CatalogItemTitle = styled.h4`
  transition: all 0.3s;
  color: #646777;
  font-weight: 600;
  transition: all 0.3s;
  font-size: 16px;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    color: #4ce1b6;
  }
`;

const CatalogItemDescription = styled.p`
  margin: 0;
  color: #646777;
  line-height: 17px;
  font-weight: 400;
`;

const CatalogItemPrice = styled.h1`
  right: -90px;
  color: #646777;
  position: absolute;
  top: 0;
  line-height: 36px;
  font-size: 20px;
  margin-top: 0;
  font-weight: 400;
  margin-bottom: 0;
`;

const CatalogItemOldPrice = styled.p`
    position: absolute;
    top: 36px;
    line-height: 28px;
    color: #999;
    margin: 0;
    text-decoration: line-through;
    color: #646777;
    right: -90px;
}
`;

const CatalogItemColor = styled.h1`
  height: 10px;
  width: 10px;
  margin-right: 8px;
  display: inline-block;
  border-radius: 50%;
  margin-top: 10px;
`;

export default Catalog;
