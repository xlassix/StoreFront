import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { customMedia } from 'styles/media';
import { ReactComponent as Heart } from '../../assets/heart.svg';

interface Props {}

export const TopbarWishlist = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleProfile = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Wrapper>
      <TopbarWishMenu type="button" onClick={toggleProfile}>
        <WishlistIcon />
        <Text>{t(...messages.title())}</Text>
      </TopbarWishMenu>
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

const TopbarWishMenu = styled.button`
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

const WishlistIcon = styled(Heart)`
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
