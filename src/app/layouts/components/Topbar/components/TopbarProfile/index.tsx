import React, { memo, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { Collapse } from 'reactstrap';
import { messages } from './messages';
import { TopbarMenuLink } from '../TopbarMenuLink';
import { customMedia } from 'styles/media';
import { ReactComponent as Avatar } from '../../../../../assets/user.svg';
import { ReactComponent as Dropdown } from '../../assets/arrow_down.svg';
import { ReactComponent as Entry } from '../../assets/entry.svg';
import { ReactComponent as Order } from '../../assets/order.svg';
import { ReactComponent as Tracking } from '../../assets/trending_up.svg';
import { ReactComponent as Wallet } from '../../assets/credit_card.svg';
import { ReactComponent as Question } from '../../assets/question.svg';
import { ReactComponent as Clipboard } from '../../assets/clipboard.svg';

interface Props {}

export const TopbarProfile = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleProfile = () => {
    setIsCollapsed(!isCollapsed);
  };

  // const logout = () => {
  //   localStorage.removeItem('altmall');
  // };

  return (
    <Wrapper>
      <TopbarAvatar type="button" onClick={toggleProfile}>
        <AvatarIcon />
        <AvatarName>{t(...messages.title())}</AvatarName>
        <DropdownIcon />
      </TopbarAvatar>
      {isCollapsed && (
        <MenuBack
          type="button"
          aria-label="profile button"
          onClick={toggleProfile}
        />
      )}
      <MenuWrap isOpen={isCollapsed}>
        <TopbarMenu>
          <TopbarMenuLink
            title={t(...messages.menu.signin())}
            path="/"
            onClick={toggleProfile}
          >
            <Entry />
          </TopbarMenuLink>
          <TopbarMenuLink
            title={t(...messages.menu.profile())}
            path="/"
            onClick={toggleProfile}
          >
            <Avatar />
          </TopbarMenuLink>
          <TopbarMenuLink
            title={t(...messages.menu.history())}
            path="/"
            onClick={toggleProfile}
          >
            <Order />
          </TopbarMenuLink>
          <TopbarMenuLink
            title={t(...messages.menu.orders())}
            path="/"
            onClick={toggleProfile}
          >
            <Tracking />
          </TopbarMenuLink>
          <TopbarMenuLink
            title={t(...messages.menu.wallet())}
            path="/"
            onClick={toggleProfile}
          >
            <Wallet />
          </TopbarMenuLink>
          <TopbarMenuLink
            title={t(...messages.menu.help())}
            path="/"
            onClick={toggleProfile}
          >
            <Question />
          </TopbarMenuLink>
          <TopbarMenuLink
            title={t(...messages.menu.ticket())}
            path="/"
            onClick={toggleProfile}
          >
            <Clipboard />
          </TopbarMenuLink>
        </TopbarMenu>
      </MenuWrap>
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

const TopbarAvatar = styled.button`
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

const AvatarIcon = styled(Avatar)`
  margin: auto 0;
  height: 21px;
  width: 21px;

  path {
    stroke: ${p => p.theme.color.colorText};
  }
`;

const AvatarName = styled.p`
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

const DropdownIcon = styled(Dropdown)`
  margin: auto 0;
  height: 18px;
  margin-top: auto;
  ${p => p.theme.direction['margin-left']}: 8px;

  path {
    fill: ${p => p.theme.color.colorText};
  }
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

const MenuWrap = styled(Collapse)`
  z-index: 101;
  position: absolute;
  width: 100%;
  min-width: 268px;
  margin-top: 10px;
  ${p => p.theme.direction['right']}: 0px;

  ${customMedia.lessThan('xxsm')`
    ${p => p.theme.direction['right']}: -50px;
  `}

  ${customMedia.lessThan('small')`
    margin-top: 27px;
  `};

  ${customMedia.lessThan('xsm')`
    left: -126px;
  `}
`;

const TopbarMenu = styled.div`
  /* width: 200px; */
  border-radius: 10px;
  border: none;
  padding: 15px 0;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  margin-top: 0;
  background: ${p => p.theme.color.colorBackground};

  button {
    padding: 0;

    &:hover {
      background-color: ${p => p.theme.color.colorHover};
    }
  }

  &:before {
    width: 15px;
    height: 15px;
    position: absolute;
    top: -7px;
    ${p => p.theme.direction['right']}: 22px;
    transform: rotate(45deg);
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
    margin-top: 0;
    background: ${p => p.theme.color.colorBackground};
    content: '';
  }

  *:focus {
    outline: none;
  }

  ${customMedia.greaterThan('xsm')`
    width: 100%;
    ${p => p.theme.direction['left']}: 0px !important;
  `}
`;
