import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { TopbarCart } from './components/TopbarCart';
import { TopbarProfile } from './components/TopbarProfile';
import { TopbarSearch } from './components/TopbarSearch';
import { TopbarSidebarButton } from './components/TopbarSidebarButton';
import { TopbarWishlist } from './components/TopbarWishlist/index';

interface Props {}

export const Topbar = memo((props: Props) => {
  return (
    <Wrapper className="topbar">
      <Left>
        <TopbarSidebarButton />
        <Logo to="/" />
      </Left>
      <Right>
        <RightSearch>
          <TopbarSearch />
        </RightSearch>
        <RightOver>
          <TopbarProfile />
          <TopbarWishlist />
          <TopbarCart />
        </RightOver>
      </Right>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  min-height: 82px;
  z-index: 101;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  background: ${p => p.theme.color.colorBackground};

  ${customMedia.lessThan('small')`
    min-height: 120px;
  `}
`;

const Left = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  ${p => p.theme.direction['left']}: 0px;
`;

const Right = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 93%;
  ${p => p.theme.direction['right']}: 0px;
  ${p => p.theme.direction['margin-right']}: 15px;

  ${customMedia.lessThan('small')`
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-end;
  `};

  ${customMedia.lessThan('xxsm')`
    justify-content: flex-end;
  `};

  ${customMedia.greaterThan('large')`
    width: 80%;
  `};
`;

const RightOver = styled.div`
  display: flex;
  flex: auto;
  justify-content: flex-end;

  ${customMedia.lessThan('small')`
    margin-top: 10px;
  `};
`;

const RightSearch = styled.div`
  margin: auto 15px;
  width: 90%;

  ${customMedia.lessThan('xmedium')`
    margin-right: 0;
  `};
  ${customMedia.lessThan('small')`
    margin-right: 0;
  `};

  ${customMedia.lessThan('xsm')`
    width: 83%;
  `}

  ${customMedia.greaterThan('large')`
    display: flex;
    justify-content: center;
  `}
`;

const Logo = styled(Link)`
  width: 150px;
  height: 32px;
  margin: auto 0;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: left;
  background-size: contain;
  display: none;
  /* //background-image: ${p => p.theme.color.logoImg}; */

  ${customMedia.greaterThan('large')`
    display: block;
  `};
`;
