import React, { useState } from 'react';
import { CardBody } from 'reactstrap';
import styled from 'styled-components';
import { customMedia } from 'styles/media';
import { useBasketSlice } from '../slice/basketSlice';
import { selectBasket } from '../slice/basketSelector';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const ProductItem = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const baskets = useSelector(selectBasket);
  const { actions } = useBasketSlice();

  const addToCart = (itemQuantity, item) => {
    let prevQuantity =
      baskets?.items.find(i => i.productId === item.ItemId)?.quantity ?? 0;

    dispatch(
      actions.addItem({
        name: item.Name,
        productId: item.ItemId,
        price: item.SalesPrice,
        quantity: itemQuantity,
      }),
    );

    var totalQty = prevQuantity + itemQuantity;

    setSubTotal(totalQty * item.SalesPrice);

    setQuantity(totalQty);
  };

  const removeFromCart = item => {
    let prevQuantity =
      baskets?.items.find(i => i.productId === item.ItemId)?.quantity ?? 0;

    let totalQty = 0;

    if (prevQuantity > 0) {
      dispatch(
        actions.removeItem({
          productId: item.ItemId,
          quantity: 1,
        }),
      );

      totalQty = prevQuantity - 1;
    }

    setSubTotal(totalQty * item.SalesPrice);

    setQuantity(totalQty);
  };

  return (
    <CatalogItem key={item.i}>
      <CatalogItemLink>
        <CatalogItemImageWrap>
          <CatalogItemImg
            src={`https://test.api.simplemarket.app/api${item.ImageLink}`}
            alt="catalog-item-img"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = '/img/Product Image @@.png';
            }}
          />{' '}
        </CatalogItemImageWrap>
        <CatalogItemInfo>
          <CatalogItemTitle>{item.Name}</CatalogItemTitle>
          <CatalogItemDescription>{item.description}</CatalogItemDescription>
          <CatalogItemPrice>Unit Price : ??? {item.SalesPrice}</CatalogItemPrice>
        </CatalogItemInfo>
        <Center>
          <SearchBtn onClick={() => addToCart(1, item)}>
            {t('storeFront.product.add1')}
          </SearchBtn>
          <SearchBtn onClick={() => addToCart(3, item)}>
            {t('storeFront.product.add3')}
          </SearchBtn>
          <SearchBtn onClick={() => removeFromCart(item)}>
            {t('storeFront.product.reduce1')}
          </SearchBtn>
        </Center>
        <Center>
          <Quantity>
            Quantity : <TextAfterBtn>{quantity}</TextAfterBtn> Subtotal :
            <TextAfterBtn>???{subTotal}</TextAfterBtn>
          </Quantity>
        </Center>
      </CatalogItemLink>
    </CatalogItem>
  );
};

const CatalogItem = styled(CardBody)`
  flex-basis: calc(33.3333% - 30px);
<<<<<<< HEAD
  max-width: calc(33.333% - 30px);
=======
  max-width: calc(33.3333% - 30px);
>>>>>>> 255dabf (feat: catalog responsive)
  margin-bottom: 30px;
  height: 460px;
  position: relative;
  background-color: #fff;
  margin-right: 0.75rem;
  box-sizing: border-box;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  border-radius: 5px;
  box-shadow: none;

  ${customMedia.lessThan('large')`
  flex-basis: calc(49% - 30px);
  max-width: calc(49% - 30px);
`};

  ${customMedia.lessThan('medium')`
flex-basis: calc(90% - 30px);
max-width: calc(90% - 30px);
`};
`;

const CatalogItemLink = styled.div`
  padding: 40px 13px;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

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
  /* margin-top: 100px; */
  margin-left: 5px;
  min-height: 30px;
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
  text-align: left;
  /* width: 50%; */
  height: 30px;
  padding: 10px 0px 0px 10px;
  /* border: 1px solid rgb(218, 218, 218); */
  border-radius: 5px;
`;

const TextAfterBtn = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
  padding: 5px 1px 5px 1px;
  border: 1px solid rgb(218, 218, 218);
  border-radius: 5px;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ProductItem;
