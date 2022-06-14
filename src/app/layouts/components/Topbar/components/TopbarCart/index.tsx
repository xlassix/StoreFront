import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { customMedia } from 'styles/media';
import { ReactComponent as Cart } from '../../assets/shopping_cart.svg';
import { StyleConstants } from 'styles/StyleConstants';

interface Props {}

export const TopbarCart = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleProfile = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Wrapper>
      <TopbarCartMenu type="button" onClick={toggleProfile}>
        <CartCount>
          <p>0</p>
        </CartCount>
        <CartIcon />
        <Text>{t(...messages.title())}</Text>
      </TopbarCartMenu>
      {isCollapsed && (
        <MenuBack
          type="button"
          aria-label="profile button"
          onClick={toggleProfile}
        />
      )}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 0;
  ${p => p.theme.direction['margin-left']}: 0px;

  ${customMedia.lessThan('small')`
    margin: inherit;
  `};

  ${customMedia.lessThan('xxsm')`
    margin: auto 0;
  `};
`;

const TopbarCartMenu = styled.button`
  height: 100%;
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 0;
  border: none;
  transition: all 0.3s;
  box-shadow: none;
  padding: 0 15px;
  background-color: transparent;

  &:hover,
  &:focus,
  &:active,
  &:focus:active {
    background-color: ${p => p.theme.color.colorHover};
  }

  &:focus {
    outline: none;
  }

  &:before {
    display: none;
  }
`;

const CartIcon = styled(Cart)`
  margin: auto 0;
  border-radius: 50%;
  height: 21px;
  width: 21px;

  path {
    stroke: ${p => p.theme.color.colorText};
  }
`;

const Text = styled.p`
  margin: auto 0;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  display: none;
  ${p => p.theme.direction['margin-left']}: 10px;
  color: ${p => p.theme.color.colorText};

  ${customMedia.greaterThan('xsm')`
    display: block; 
  `}
`;

const MenuBack = styled.button`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  border: none;
`;

const CartCount = styled.div`
  position: absolute;
  top: 24px;
  ${p => p.theme.direction['right']}: 45px;
  background-color: ${StyleConstants.COLOR_LIGHT_RED};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  p {
    display: inline-block;
    font-size: 11px;
    font-weight: bolder;
    color: ${StyleConstants.COLOR_DUSTY_WHITE};
  }

  ${customMedia.lessThan('small')`
    top: -7px;
  `};
  ${customMedia.lessThan('xsm')`
    right: 7px;
  `}
`;
