import { Button } from 'app/components/Button/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import { CardBody } from 'reactstrap';
import styled from 'styled-components';
import { customMedia } from 'styles/media';

interface Catalog {
  name: string;
  itemId: string;
  salesPrice: number;
  itemCount: any;
}

let StoreCatalogItems: Catalog[] = [];

let ItemCount = StoreCatalogItems.length;

const AddToCart = (num, item) => {
  for (var i = 0; i < StoreCatalogItems.length; i++) {
    if (StoreCatalogItems[i].itemId === item.ItemId) {
      ItemCount = i;
      break;
    }
  }


  StoreCatalogItems[ItemCount] = {
    name: item.Name,
    itemId: item.ItemId,
    salesPrice: item.SalesPrice,
    itemCount: num,
  };

  alert(ItemCount + ' - ' + item.Name);
};

const SubFromCart = (num, item) => {
  StoreCatalogItems[ItemCount] = {
    name: item.Name,
    itemId: item.ItemId,
    salesPrice: item.SalesPrice,
    itemCount: item.num,
  };

  alert(ItemCount + ' - ' + item.Name);
};
const Catalog = ({ items }) => (
  <CatalogItemsWrap>
    <CatalogItems>
      {items.map(item => (
        <CatalogItem key={item.i}>
          <CatalogItemLink>
            <CatalogItemImageWrap>
              <CatalogItemImg
                src={`https://test.api.simplemarket.app/api${item.ImageLink}`}
                alt="catalog-item-img"
              />{' '}
            </CatalogItemImageWrap>
            <CatalogItemInfo>
              <CatalogItemTitle>{item.Name}</CatalogItemTitle>
              <CatalogItemDescription>
                {item.description}
              </CatalogItemDescription>
              <CatalogItemPrice>
                Unit Price : ₦ {item.SalesPrice}
              </CatalogItemPrice>
            </CatalogItemInfo>
            <div>
              <SearchBtn onClick={() => AddToCart(1, item)}>Add +1</SearchBtn>
              <SearchBtn onClick={() => AddToCart(3, item)}>Add +3</SearchBtn>
              <SearchBtn onClick={() => SubFromCart(1, item)}>
                Reduce -1
              </SearchBtn>
            </div>
            <div>
              <Quantity>
                Quantiy : <TextAfterBtn>40</TextAfterBtn>
              </Quantity>
            </div>
          </CatalogItemLink>
        </CatalogItem>
      ))}
    </CatalogItems>
  </CatalogItemsWrap>
);

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
  height: 460px;
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

const CatalogItemLink = styled.div`
  padding: 40px 15px;
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
  /* width: calc(100% - 90px); */
  display: block;
  margin-bottom: 10px;
`;

const CatalogItemTitle = styled.h4`
  transition: all 0.3s;
  color: #646777;
  font-weight: 600;
  transition: all 0.3s;
  font-size: 10px;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  text-align: center;
  border-bottom: 1px solid rgb(218, 218, 218);

  &:hover {
    color: #4ce1b6;
  }
`;

const CatalogItemDescription = styled.p`
  margin: 0;
  color: #646777;
  line-height: 12px;
  font-weight: 400;
`;

const CatalogItemPrice = styled.h1`
  color: #646777;
  /* position: absolute; */
  /* top: 0; */
  text-align: center;
  line-height: 36px;
  font-size: 12px;
  margin-top: 0;
  font-weight: 400;
  margin-bottom: 0;
  border: 1px solid rgb(218, 218, 218);
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
`;

const SearchBtn = styled.span`
  margin-left: 5px;
  height: 30px;
  padding: 10px;
  cursor: pointer;
  color: #ffffff;
  border-radius: 3px;
  background-color: #100276;

  ${customMedia.lessThan('small')`
    height: 29px;
  `};

  &:hover {
    background-color: rgb(5, 183, 203);
    color: #fff;
  }
  &:after {
    background-color: #e4811c;
    color: #fff;
  }
`;

const Quantity = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  height: 30px;
  padding: 10px 10px 0px 10px;
  border-radius: 5px;
`;

const TextAfterBtn = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
  padding: 10px 10px 10px 10px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 5px;
`;

export default Catalog;
